/**
 * HVAC Load Calculator — App Controller
 * Manages UI state, room editing, and results rendering.
 */

import * as C from './constants.js';
import { calculateBuildingTotals } from './calc-engine.js';
import * as proposal from './proposal-app.js';

// ─── State ──────────────────────────────────────────────────

const state = {
  currentStep: 1,
  activeRoomIndex: 0,
  project: {
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    projectDate: new Date().toISOString().split('T')[0],
    summerOutside: 100,
    summerInside: 75,
    winterInside: 70,
    globalCeilingHeight: 8,
  },
  config: {
    wallInsulation: 'R-13',
    floorInsulation: 'R-19',
    windowType: 'double',
    doorType: 'solid',
    basementWallInsulation: 'R-11',
    tempMode: '75',
  },
  rooms: [],
};

function createDefaultRoom(name) {
  return {
    name: name || 'Entry',
    length: 0,
    width: 0,
    ceilingHeight: state.project.globalCeilingHeight,
    roomType: 'main',
    ceilingType: 'attic',
    ceilingInsulation: 'R-19',
    ductConfig: 'ductLoss',
    exposedWallFt: 0,
    windows: [
      { qty: 0, width: 0, height: 0, direction: 'N', windowStyle: 'sliding' },
      { qty: 0, width: 0, height: 0, direction: 'N', windowStyle: 'sliding' },
      { qty: 0, width: 0, height: 0, direction: 'N', windowStyle: 'sliding' },
      { qty: 0, width: 0, height: 0, direction: 'N', windowStyle: 'sliding' },
    ],
    doors: { qty: 0, width: 0, height: 0 },
    warmFloorPct: 0,
    applianceCount: 0,
    peopleCount: 0,
    adjustments: [],
  };
}

function createDefaultAdjustment() {
  return {
    label: '',
    type: 'gain',
    quantity: 0,
    unit: 'sq ft',
    unitLoad: 0,
  };
}

// Initialize with one room
state.rooms.push(createDefaultRoom('Entry'));

// ─── Step Navigation ────────────────────────────────────────

function goToStep(step) {
  if (step < 1 || step > 6) return;

  // Save current form data before navigating away
  if (state.currentStep === 1) readProjectForm();
  if (state.currentStep === 2) readConfigForm();
  if (state.currentStep === 3) readCurrentRoomForm();

  state.currentStep = step;

  // Update step indicator
  document.querySelectorAll('.step-dot').forEach(dot => {
    const s = parseInt(dot.dataset.step);
    dot.classList.toggle('active', s === step);
    dot.classList.toggle('completed', s < step);
  });

  // Show correct panel
  document.querySelectorAll('.step-panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');

  // Render step-specific content
  if (step === 3) renderRoomEditor();
  if (step === 4) renderResults();
  if (step === 5) {
    const results = getLoadResults();
    proposal.renderEquipmentBuilder(results);
  }
  if (step === 6) {
    const results = getLoadResults();
    proposal.renderProposalPreview(results);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Form Readers ───────────────────────────────────────────

function readProjectForm() {
  state.project.customerName = document.getElementById('customerName').value;
  state.project.customerAddress = document.getElementById('customerAddress').value;
  state.project.customerPhone = document.getElementById('customerPhone')?.value || '';
  state.project.projectDate = document.getElementById('projectDate').value;
  state.project.summerOutside = parseFloat(document.getElementById('summerOutside').value) || 100;
  state.project.summerInside = parseFloat(document.getElementById('summerInside').value) || 75;
  state.project.winterInside = parseFloat(document.getElementById('winterInside').value) || 70;
  state.project.globalCeilingHeight = parseFloat(document.getElementById('globalCeilingHeight').value) || 8;
}

function readConfigForm() {
  state.config.wallInsulation = document.getElementById('wallInsulation').value;
  state.config.floorInsulation = document.getElementById('floorInsulation').value;
  state.config.windowType = document.getElementById('windowType').value;
  state.config.doorType = document.getElementById('doorType').value;
  state.config.basementWallInsulation = document.getElementById('basementWallInsulation').value;
  state.config.tempMode = document.getElementById('tempMode').value;
}

function readCurrentRoomForm() {
  const room = state.rooms[state.activeRoomIndex];
  if (!room) return;
  const editor = document.getElementById('roomEditor');
  if (!editor.querySelector('#roomName')) return;

  room.name = document.getElementById('roomName').value;
  room.length = parseFloat(document.getElementById('roomLength').value) || 0;
  room.width = parseFloat(document.getElementById('roomWidth').value) || 0;
  room.ceilingHeight = parseFloat(document.getElementById('roomCeilingHeight').value) || state.project.globalCeilingHeight;
  room.roomType = document.getElementById('roomType').value;
  room.ceilingType = document.getElementById('ceilingType').value;
  room.ceilingInsulation = document.getElementById('ceilingInsulation').value;
  room.ductConfig = document.getElementById('ductConfig').value;
  room.exposedWallFt = parseFloat(document.getElementById('exposedWallFt').value) || 0;
  room.warmFloorPct = parseFloat(document.getElementById('warmFloorPct').value) || 0;
  room.applianceCount = parseInt(document.getElementById('applianceCount').value) || 0;
  room.peopleCount = parseInt(document.getElementById('peopleCount').value) || 0;

  // Windows
  for (let i = 0; i < 4; i++) {
    room.windows[i].qty = parseInt(document.getElementById(`winQty${i}`).value) || 0;
    room.windows[i].width = parseFloat(document.getElementById(`winW${i}`).value) || 0;
    room.windows[i].height = parseFloat(document.getElementById(`winH${i}`).value) || 0;
    room.windows[i].direction = document.getElementById(`winDir${i}`).value;
    room.windows[i].windowStyle = document.getElementById(`winStyle${i}`).value;
  }

  // Doors
  room.doors.qty = parseInt(document.getElementById('doorQty').value) || 0;
  room.doors.width = parseFloat(document.getElementById('doorW').value) || 0;
  room.doors.height = parseFloat(document.getElementById('doorH').value) || 0;

  // Additional gain/loss loads
  room.adjustments = Array.from(editor.querySelectorAll('.adjustment-entry')).map((row, i) => {
    const label = document.getElementById(`adjLabel${i}`)?.value.trim() || '';
    const type = document.getElementById(`adjType${i}`)?.value || 'gain';
    const quantity = parseFloat(document.getElementById(`adjQty${i}`)?.value) || 0;
    const unit = document.getElementById(`adjUnit${i}`)?.value.trim() || 'each';
    const unitLoad = parseFloat(document.getElementById(`adjUnitLoad${i}`)?.value) || 0;

    return { label, type, quantity, unit, unitLoad };
  }).filter(adj => adj.label || adj.quantity !== 0 || adj.unitLoad !== 0);
}

// ─── Room Editor Rendering ──────────────────────────────────

function renderRoomTabs() {
  const container = document.getElementById('roomTabs');
  let html = '';
  state.rooms.forEach((room, i) => {
    const active = i === state.activeRoomIndex ? 'active' : '';
    const closable = state.rooms.length > 1
      ? `<span class="tab-close" onclick="event.stopPropagation(); app.removeRoom(${i})">✕</span>`
      : '';
    html += `<div class="room-tab ${active}" onclick="app.switchRoom(${i})">${room.name || `Room ${i+1}`}${closable}</div>`;
  });
  if (state.rooms.length < C.MAX_ROOMS) {
    html += `<button class="room-tab-add" onclick="app.addRoom()">+ Add Room</button>`;
  }
  container.innerHTML = html;
}

function renderRoomForm() {
  const room = state.rooms[state.activeRoomIndex];
  if (!room) return;

  const dirOptions = ['N', 'NE/NW', 'E/W', 'SE/SW', 'S']
    .map(d => `<option value="${d}">${d}</option>`).join('');

  const roomNameOptions = C.ROOM_NAMES
    .map(n => `<option value="${n}" ${n === room.name ? 'selected' : ''}>${n}</option>`).join('');

  const windowRows = room.windows.map((w, i) => `
    <div class="window-entry">
      <span class="window-entry-label">Win ${i+1}</span>
      <input type="number" id="winQty${i}" value="${w.qty || ''}" placeholder="0" min="0">
      <input type="number" id="winW${i}" value="${w.width || ''}" placeholder="0" step="0.5" min="0">
      <input type="number" id="winH${i}" value="${w.height || ''}" placeholder="0" step="0.5" min="0">
      <select id="winDir${i}">${dirOptions.replace(`value="${w.direction}"`, `value="${w.direction}" selected`)}</select>
      <select id="winStyle${i}">
        <option value="sliding" ${w.windowStyle === 'sliding' ? 'selected' : ''}>Sliding</option>
        <option value="fixed" ${w.windowStyle === 'fixed' ? 'selected' : ''}>Fixed</option>
      </select>
      <span></span>
    </div>
  `).join('');

  const hasAdjustments = Array.isArray(room.adjustments) && room.adjustments.length > 0;
  const adjustmentRows = (hasAdjustments ? room.adjustments : [createDefaultAdjustment()]).map((adj, i) => {
    const quantity = Number(adj.quantity) || 0;
    const unitLoad = Number(adj.unitLoad) || 0;
    const total = quantity * unitLoad;
    const removeButton = hasAdjustments
      ? `<button type="button" class="adjustment-remove" onclick="app.removeAdjustment(${i})" title="Remove load">x</button>`
      : '<span></span>';

    return `
      <div class="adjustment-entry">
        <input type="text" id="adjLabel${i}" value="${escapeHTML(adj.label || '')}" placeholder="Lighting, copier, server">
        <select id="adjType${i}">
          <option value="gain" ${adj.type === 'gain' ? 'selected' : ''}>Gain</option>
          <option value="loss" ${adj.type === 'loss' ? 'selected' : ''}>Loss</option>
        </select>
        <input type="number" id="adjQty${i}" value="${quantity || ''}" placeholder="0" step="0.01" min="0" oninput="app.updateAdjustmentPreview(${i})">
        <div class="unit-combo" onclick="event.stopPropagation()">
          <input type="text" id="adjUnit${i}" value="${escapeHTML(adj.unit || '')}" placeholder="Pick or type" autocomplete="off" onfocus="app.openUnitMenu(${i}, true)" oninput="app.filterUnitMenu(${i})">
          <button type="button" class="unit-combo-toggle" onclick="app.toggleUnitMenu(${i})" title="Show unit choices">v</button>
          <div class="unit-menu" id="adjUnitMenu${i}">${renderUnitMenuOptions(i)}</div>
        </div>
        <input type="number" id="adjUnitLoad${i}" value="${unitLoad || ''}" placeholder="BTU/hr per unit" step="0.01" oninput="app.updateAdjustmentPreview(${i})">
        <span class="adjustment-total" id="adjTotal${i}">${formatBTU(total)}</span>
        ${removeButton}
      </div>
    `;
  }).join('');

  const html = `
    <div class="card">
      <div class="card-title"><span class="icon">🏠</span> Room Details</div>
      <div class="form-grid cols-4">
        <div class="form-group">
          <label for="roomName">Room Name</label>
          <select id="roomName">${roomNameOptions}</select>
        </div>
        <div class="form-group">
          <label for="roomLength">Length (ft)</label>
          <input type="number" id="roomLength" value="${room.length || ''}" placeholder="0" step="0.5" min="0">
        </div>
        <div class="form-group">
          <label for="roomWidth">Width (ft)</label>
          <input type="number" id="roomWidth" value="${room.width || ''}" placeholder="0" step="0.5" min="0">
        </div>
        <div class="form-group">
          <label for="roomCeilingHeight">Ceiling Ht (ft)</label>
          <input type="number" id="roomCeilingHeight" value="${room.ceilingHeight || state.project.globalCeilingHeight}" step="0.5" min="6" max="20">
        </div>
      </div>
      <div class="form-grid cols-4 mt-md">
        <div class="form-group">
          <label for="roomType">Room Type</label>
          <select id="roomType">
            <option value="basement" ${room.roomType === 'basement' ? 'selected' : ''}>Basement</option>
            <option value="main" ${room.roomType === 'main' ? 'selected' : ''}>Main Floor</option>
            <option value="mainWith2ndFloor" ${room.roomType === 'mainWith2ndFloor' ? 'selected' : ''}>Main + 2nd Floor Above</option>
            <option value="upper" ${room.roomType === 'upper' ? 'selected' : ''}>Upper Level</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ceilingType">Ceiling Type</label>
          <select id="ceilingType">
            <option value="attic" ${room.ceilingType === 'attic' ? 'selected' : ''}>Ceiling-Attic</option>
            <option value="vaulted" ${room.ceilingType === 'vaulted' ? 'selected' : ''}>Vaulted</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ceilingInsulation">Ceiling Insulation</label>
          <select id="ceilingInsulation">
            <option value="none" ${room.ceilingInsulation === 'none' ? 'selected' : ''}>None</option>
            <option value="R-11" ${room.ceilingInsulation === 'R-11' ? 'selected' : ''}>R-11</option>
            <option value="R-19" ${room.ceilingInsulation === 'R-19' ? 'selected' : ''}>R-19</option>
            <option value="R-26" ${room.ceilingInsulation === 'R-26' ? 'selected' : ''}>R-26</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ductConfig">Duct Configuration</label>
          <select id="ductConfig">
            <option value="ductLoss" ${room.ductConfig === 'ductLoss' ? 'selected' : ''}>Duct Loss</option>
            <option value="noDuctLoss" ${room.ductConfig === 'noDuctLoss' ? 'selected' : ''}>No Duct Loss</option>
            <option value="basement" ${room.ductConfig === 'basement' ? 'selected' : ''}>Basement</option>
            <option value="attic" ${room.ductConfig === 'attic' ? 'selected' : ''}>Attic</option>
          </select>
        </div>
      </div>
      <div class="form-grid cols-4 mt-md">
        <div class="form-group">
          <label for="exposedWallFt">Exposed Wall (lin ft)</label>
          <input type="number" id="exposedWallFt" value="${room.exposedWallFt || ''}" placeholder="0" step="0.5" min="0">
        </div>
        <div class="form-group">
          <label for="warmFloorPct">Warm Floor %</label>
          <input type="number" id="warmFloorPct" value="${room.warmFloorPct || ''}" placeholder="0" step="0.01" min="0" max="1">
        </div>
        <div class="form-group">
          <label for="applianceCount">Appliances</label>
          <input type="number" id="applianceCount" value="${room.applianceCount || ''}" placeholder="0" min="0">
        </div>
        <div class="form-group">
          <label for="peopleCount">People</label>
          <input type="number" id="peopleCount" value="${room.peopleCount || ''}" placeholder="0" min="0">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title"><span class="icon">🪟</span> Windows</div>
      <div class="window-entry-header">
        <span></span><span>Qty</span><span>Width</span><span>Height</span><span>Direction</span><span>Style</span><span></span>
      </div>
      <div class="window-entries">${windowRows}</div>
    </div>

    <div class="card">
      <div class="card-title"><span class="icon">🚪</span> Doors</div>
      <div class="form-grid cols-3">
        <div class="form-group">
          <label for="doorQty">Quantity</label>
          <input type="number" id="doorQty" value="${room.doors.qty || ''}" placeholder="0" min="0">
        </div>
        <div class="form-group">
          <label for="doorW">Width (ft)</label>
          <input type="number" id="doorW" value="${room.doors.width || ''}" placeholder="0" step="0.5" min="0">
        </div>
        <div class="form-group">
          <label for="doorH">Height (ft)</label>
          <input type="number" id="doorH" value="${room.doors.height || ''}" placeholder="0" step="0.5" min="0">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Additional Loads</div>
      <div class="adjustment-entry-header">
        <span>Label</span><span>Applies</span><span>Qty</span><span>Unit</span><span>BTU/hr/Unit</span><span>Total</span><span></span>
      </div>
      <div class="adjustment-entries">${adjustmentRows}</div>
      <button type="button" class="room-tab-add adjustment-add" onclick="app.addAdjustment()">+ Add Load</button>
    </div>
  `;

  document.getElementById('roomEditor').innerHTML = html;
}

function renderRoomEditor() {
  renderRoomTabs();
  renderRoomForm();
}

function renderUnitMenuOptions(index) {
  return C.ADDITIONAL_LOAD_UNITS.map(unit => `
    <button type="button" class="unit-option" data-unit="${escapeHTML(unit)}" onclick="app.selectAdjustmentUnit(${index}, this.dataset.unit)">${escapeHTML(unit)}</button>
  `).join('');
}

// ─── Room Management ────────────────────────────────────────

function addRoom() {
  if (state.rooms.length >= C.MAX_ROOMS) return;
  // Pick next unused name
  const usedNames = new Set(state.rooms.map(r => r.name));
  const nextName = C.ROOM_NAMES.find(n => !usedNames.has(n)) || `Room ${state.rooms.length + 1}`;
  state.rooms.push(createDefaultRoom(nextName));
  state.activeRoomIndex = state.rooms.length - 1;
  renderRoomEditor();
}

function removeRoom(index) {
  if (state.rooms.length <= 1) return;
  readCurrentRoomForm();
  state.rooms.splice(index, 1);
  if (state.activeRoomIndex >= state.rooms.length) {
    state.activeRoomIndex = state.rooms.length - 1;
  }
  renderRoomEditor();
}

function switchRoom(index) {
  readCurrentRoomForm();
  state.activeRoomIndex = index;
  renderRoomEditor();
}

// ─── Results Rendering ──────────────────────────────────────

function addAdjustment() {
  readCurrentRoomForm();
  const room = state.rooms[state.activeRoomIndex];
  if (!room) return;
  if (!Array.isArray(room.adjustments)) room.adjustments = [];
  room.adjustments.push(createDefaultAdjustment());
  renderRoomEditor();
}

function removeAdjustment(index) {
  readCurrentRoomForm();
  const room = state.rooms[state.activeRoomIndex];
  if (!room || !Array.isArray(room.adjustments)) return;
  room.adjustments.splice(index, 1);
  renderRoomEditor();
}

function updateAdjustmentPreview(index) {
  const qty = parseFloat(document.getElementById(`adjQty${index}`)?.value) || 0;
  const unitLoad = parseFloat(document.getElementById(`adjUnitLoad${index}`)?.value) || 0;
  const totalEl = document.getElementById(`adjTotal${index}`);
  if (totalEl) totalEl.textContent = formatBTU(qty * unitLoad);
}

function openUnitMenu(index, showAll = false) {
  closeUnitMenus(index);
  const menu = document.getElementById(`adjUnitMenu${index}`);
  if (!menu) return;
  menu.classList.add('open');
  filterUnitMenu(index, showAll);
}

function toggleUnitMenu(index) {
  const menu = document.getElementById(`adjUnitMenu${index}`);
  if (!menu) return;
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    openUnitMenu(index, true);
  }
}

function filterUnitMenu(index, showAll = false) {
  const input = document.getElementById(`adjUnit${index}`);
  const menu = document.getElementById(`adjUnitMenu${index}`);
  if (!input || !menu) return;

  const query = showAll ? '' : input.value.trim().toLowerCase();
  let visibleCount = 0;
  menu.querySelectorAll('.unit-option').forEach(option => {
    const matches = !query || option.dataset.unit.toLowerCase().includes(query);
    option.hidden = !matches;
    if (matches) visibleCount += 1;
  });
  menu.classList.toggle('empty', visibleCount === 0);
}

function selectAdjustmentUnit(index, unit) {
  const input = document.getElementById(`adjUnit${index}`);
  const menu = document.getElementById(`adjUnitMenu${index}`);
  if (input) input.value = unit;
  if (menu) menu.classList.remove('open');
}

function closeUnitMenus(exceptIndex = null) {
  document.querySelectorAll('.unit-menu.open').forEach(menu => {
    if (exceptIndex !== null && menu.id === `adjUnitMenu${exceptIndex}`) return;
    menu.classList.remove('open');
  });
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function formatBTU(value) {
  if (!value || !isFinite(value)) return '0';
  return Math.round(value).toLocaleString();
}

function renderResults() {
  readProjectForm();
  readConfigForm();
  // Read room form if coming from step 3
  if (document.getElementById('roomName')) readCurrentRoomForm();

  const results = calculateBuildingTotals(state.rooms, state.config);

  // Summary cards
  document.getElementById('resultsSummary').innerHTML = `
    <div class="summary-card cooling">
      <div class="summary-value">${formatBTU(results.totalGain)}</div>
      <div class="summary-label">Total Cooling Load (BTU/hr)</div>
      <div class="summary-sub">${formatBTU(results.totalCFMCooling)} Total CFM</div>
    </div>
    <div class="summary-card heating">
      <div class="summary-value">${formatBTU(results.totalLoss)}</div>
      <div class="summary-label">Total Heating Load (BTU/hr)</div>
      <div class="summary-sub">${formatBTU(results.totalCFMHeating)} Total CFM</div>
    </div>
  `;

  // Per-room cards
  const maxCool = Math.max(...results.rooms.map(r => r.cooling.total), 1);
  const maxHeat = Math.max(...results.rooms.map(r => r.heating.total), 1);

  const roomCards = results.rooms.map(r => {
    const room = r.room;
    const cool = r.cooling;
    const heat = r.heating;

    const roomTypeLabel = {
      basement: 'Basement', main: 'Main', mainWith2ndFloor: 'Main+2FL', upper: 'Upper'
    }[room.roomType] || room.roomType;

    const coolBreakdown = [
      { name: 'Windows', value: cool.windowGain },
      { name: 'Doors', value: cool.doorGain },
      { name: 'Warm Ceiling', value: cool.warmCeiling },
      { name: 'Warm Floor', value: cool.warmFloor },
      { name: 'Net Wall', value: cool.netWall },
      { name: 'Internal', value: cool.internalGains },
      { name: 'Infiltration', value: cool.infiltration },
      ...(cool.adjustmentItems || []).map(item => ({
        name: item.label ? `Adj: ${item.label}` : 'Additional Load',
        value: item.total,
      })),
    ].filter(b => b.value !== 0);

    const heatBreakdown = [
      { name: 'Windows', value: heat.windowLoss },
      { name: 'Doors', value: heat.doorLoss },
      { name: 'Net Wall', value: heat.netWall },
      { name: 'Ceiling', value: heat.coldCeiling },
      { name: 'Floor', value: heat.coldFloor },
      { name: 'Infiltration', value: heat.infiltration },
      ...(heat.adjustmentItems || []).map(item => ({
        name: item.label ? `Adj: ${item.label}` : 'Additional Load',
        value: item.total,
      })),
    ].filter(b => b.value !== 0);

    const maxCoolComponent = Math.max(...coolBreakdown.map(b => Math.abs(b.value)), 1);
    const maxHeatComponent = Math.max(...heatBreakdown.map(b => Math.abs(b.value)), 1);

    return `
      <div class="room-result-card">
        <div class="room-result-header">
          <span class="room-result-name">${room.name}</span>
          <span class="room-result-type">${roomTypeLabel}</span>
        </div>
        <div class="room-result-totals">
          <div class="room-total-item cool">
            <div class="room-total-value">${formatBTU(cool.total)}</div>
            <div class="room-total-label">BTU Gain</div>
          </div>
          <div class="room-total-item heat">
            <div class="room-total-value">${formatBTU(heat.total)}</div>
            <div class="room-total-label">BTU Loss</div>
          </div>
        </div>
        ${coolBreakdown.length ? `
          <div class="section-label">Cooling Breakdown</div>
          <div class="breakdown-list">
            ${coolBreakdown.map(b => `
              <div class="breakdown-item">
                <span class="breakdown-name">${escapeHTML(b.name)}</span>
                <span class="breakdown-value">${formatBTU(b.value)}</span>
                <div class="breakdown-bar-bg">
                  <div class="breakdown-bar cool" style="width: ${(Math.abs(b.value) / maxCoolComponent * 100).toFixed(1)}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${heatBreakdown.length ? `
          <div class="section-label mt-md">Heating Breakdown</div>
          <div class="breakdown-list">
            ${heatBreakdown.map(b => `
              <div class="breakdown-item">
                <span class="breakdown-name">${escapeHTML(b.name)}</span>
                <span class="breakdown-value">${formatBTU(b.value)}</span>
                <div class="breakdown-bar-bg">
                  <div class="breakdown-bar heat" style="width: ${(Math.abs(b.value) / maxHeatComponent * 100).toFixed(1)}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        <div class="cfm-row">
          <div><span class="cfm-label">Cool CFM</span><br><span class="cfm-value">${formatBTU(r.cfmCooling)}</span></div>
          <div><span class="cfm-label">Cool Reg</span><br><span class="cfm-value">${Math.ceil(r.registersCooling || 0)}</span></div>
          <div><span class="cfm-label">Heat CFM</span><br><span class="cfm-value">${formatBTU(r.cfmHeating)}</span></div>
          <div><span class="cfm-label">Heat Reg</span><br><span class="cfm-value">${Math.ceil(r.registersHeating || 0)}</span></div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('roomResultsGrid').innerHTML = roomCards;
}

// ─── Load Results Helper ────────────────────────────────────

function getLoadResults() {
  readProjectForm();
  readConfigForm();
  if (document.getElementById('roomName')) readCurrentRoomForm();
  const results = calculateBuildingTotals(state.rooms, state.config);
  window._lastLoadResults = results;
  window._appState = state;
  return results;
}

// ─── Settings Modal ─────────────────────────────────────────

function openSettings() {
  proposal.renderSettings();
  document.getElementById('settingsModal').classList.add('open');
}

function closeSettings() {
  document.getElementById('settingsModal').classList.remove('open');
}

function saveSettings() {
  proposal.saveSettings();
  closeSettings();
}

// ─── Init & Export ──────────────────────────────────────────

function init() {
  // Set today's date
  document.getElementById('projectDate').value = state.project.projectDate;

  // Wire up step indicator clicks
  document.querySelectorAll('.step-dot').forEach(dot => {
    dot.addEventListener('click', () => goToStep(parseInt(dot.dataset.step)));
  });
  document.addEventListener('click', () => closeUnitMenus());

  // Pre-load equipment catalog
  proposal.init();
}

// Expose to global for onclick handlers in HTML
window.app = {
  goToStep, addRoom, removeRoom, switchRoom,
  addAdjustment, removeAdjustment, updateAdjustmentPreview,
  openUnitMenu, toggleUnitMenu, filterUnitMenu, selectAdjustmentUnit,
  openSettings, closeSettings, saveSettings,
  proposal,
};

init();
