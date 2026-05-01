/**
 * Proposal App Module - equipment builder, proposal preview, and settings.
 */

import * as PC from './proposal-constants.js';
import * as PE from './proposal-engine.js';
import * as picker from './catalog-picker.js';
import {
  createMaterialsState, DUCT_MATERIAL_TYPES,
  calculateDuctTypeSqft, calculateDuctRunSqft,
  createDuctRun, MAX_DUCT_ROWS,
} from './materials-data.js';

const proposalState = {
  saleType: 'furnaceAndAC',
  existingAFUE: 70,
  paymentId: '',
  installDate: '',
  companyProfile: loadFromStorage('hvac_company_profile', { ...PC.DEFAULT_COMPANY_PROFILE }),
  materials: createMaterialsState(),
  options: [createDefaultOption(1), createDefaultOption(2), createDefaultOption(3)],
  selectedOption: 0,
  settingsTab: 'profile',
};

let materialsRenderTimer = null;

function createDefaultOption(num) {
  return {
    label: `Option ${num}`,
    furnace: null,
    ac: null,
    coil: null,
    seer: '',
    filterId: '',
    iaqSelections: [{ itemId: '' }, { itemId: '' }, { itemId: '' }],
    miscSelections: [{ itemId: '', price: 0 }, { itemId: '', price: 0 }, { itemId: '', price: 0 }],
    thermostatId: '',
    warrantyId: '',
    paymentId: '',
    rebates: [{ categoryId: '', amount: 0 }, { categoryId: '', amount: 0 }, { categoryId: '', amount: 0 }],
  };
}

function loadFromStorage(key, defaultVal) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultVal;
  } catch {
    return defaultVal;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export async function init() {
  await picker.loadCatalog();
}

export function renderEquipmentBuilder(loadResults) {
  const container = document.getElementById('equipmentBuilder');
  if (!container) return;

  const saleTypeOptions = PC.SALE_TYPES.map(st =>
    `<option value="${escAttr(st.id)}" ${st.id === proposalState.saleType ? 'selected' : ''}>${esc(st.label)}</option>`
  ).join('');

  const paymentOptions = ['<option value="">Select payment method</option>',
    ...PC.PAYMENT_OPTIONS.map(p =>
      `<option value="${escAttr(p.id)}" ${p.id === proposalState.paymentId ? 'selected' : ''}>${esc(p.name)}</option>`
    )
  ].join('');

  const selectedButtons = proposalState.options.map((opt, idx) => `
    <button type="button" class="segmented-button ${idx === proposalState.selectedOption ? 'active' : ''}"
      onclick="app.proposal.selectOption(${idx})">${esc(opt.label || `Option ${idx + 1}`)}</button>
  `).join('');

  const setupHTML = `
    <div class="card proposal-workflow-card">
      <div class="card-title">Proposal Setup</div>
      <div class="proposal-setup-grid">
        <div class="form-group">
          <label>Kind of Sale</label>
          <select id="saleType" onchange="app.proposal.updateSaleType(this.value)">${saleTypeOptions}</select>
        </div>
        <div class="form-group">
          <label>Payment Method</label>
          <select id="proposalPayment" onchange="app.proposal.updatePayment(this.value)">${paymentOptions}</select>
        </div>
        <div class="form-group">
          <label>Installation Date</label>
          <input type="date" value="${escAttr(proposalState.installDate)}" onchange="app.proposal.updateInstallDate(this.value)">
        </div>
        <div class="form-group">
          <label>Existing AFUE (%)</label>
          <input type="number" id="existingAFUE" value="${proposalState.existingAFUE}" min="0" max="100"
            onchange="app.proposal.updateExistingAFUE(this.value)">
        </div>
      </div>
      <div class="proposal-fast-row">
        <div>
          <div class="proposal-fast-label">Load</div>
          <div class="proposal-fast-value">${fmt(loadResults?.totalGain || 0)} BTU gain / ${fmt(loadResults?.totalLoss || 0)} BTU loss</div>
        </div>
        <div>
          <div class="proposal-fast-label">Approval option</div>
          <div class="segmented-control">${selectedButtons}</div>
        </div>
      </div>
    </div>
  `;

  let optionsHTML = '<div class="card"><div class="card-title">Customer Options</div><div class="options-grid proposal-options-builder">';
  for (let i = 0; i < 3; i++) {
    optionsHTML += renderOptionColumn(i, loadResults);
  }
  optionsHTML += '</div></div>';

  // Use stable sub-containers so materials card isn't destroyed on every re-render
  const setupWrap = container.querySelector('#eqSetup');
  if (!setupWrap) {
    // First render — create all three sections
    container.innerHTML = `
      <div id="eqSetup">${setupHTML}</div>
      <div id="eqMaterials">${renderMaterialsCard()}</div>
      <div id="eqOptions">${optionsHTML}</div>
    `;
  } else {
    // Subsequent renders — only update setup and options, leave materials untouched
    setupWrap.innerHTML = setupHTML;
    container.querySelector('#eqOptions').innerHTML = optionsHTML;
  }
}

function renderOptionColumn(optIdx, loadResults) {
  const opt = normalizeOption(proposalState.options[optIdx], optIdx);
  const financials = calculateOptionFinancials(opt);
  const selected = optIdx === proposalState.selectedOption;
  const showFurnace = proposalState.saleType !== 'acOnly';
  const showAC = proposalState.saleType !== 'furnaceOnly';
  const selectedIAQ = getSelectedIAQItems(opt);
  const selectedThermostat = PC.THERMOSTAT_OPTIONS.find(t => t.id === opt.thermostatId);
  const selectedWarranty = PC.WARRANTY_OPTIONS.find(w => w.id === opt.warrantyId);
  const fitBadges = buildFitBadges(opt, loadResults);

  const iaqRows = opt.iaqSelections.map((slot, slotIdx) => {
    const iaqOptions = ['<option value="">None</option>',
      ...PC.IAQ_CATALOG.map(item =>
        `<option value="${escAttr(item.id)}" ${item.id === slot.itemId ? 'selected' : ''}>${esc(item.name)} ($${fmt(item.price)})</option>`
      )
    ].join('');
    return `
      <div class="option-line-item">
        <select class="option-select" onchange="app.proposal.updateIAQ(${optIdx}, ${slotIdx}, this.value)">${iaqOptions}</select>
      </div>`;
  }).join('');

  const miscRows = opt.miscSelections.map((misc, miscIdx) => {
    const miscOptions = ['<option value="">None</option>',
      ...PC.MISC_ITEMS.map(item =>
        `<option value="${escAttr(item.id)}" ${item.id === misc.itemId ? 'selected' : ''}>${esc(item.name)}</option>`
      )
    ].join('');
    return `
      <div class="option-line-item option-line-edit">
        <select class="option-select" onchange="app.proposal.updateMisc(${optIdx}, ${miscIdx}, this.value)">${miscOptions}</select>
        <input type="number" class="option-input-sm" value="${misc.price || ''}" placeholder="$"
          onchange="app.proposal.updateMiscPrice(${optIdx}, ${miscIdx}, this.value)">
      </div>`;
  }).join('');

  const rebateRows = opt.rebates.map((rebate, rebateIdx) => {
    const rebateOptions = ['<option value="">None</option>',
      ...PC.REBATE_CATEGORIES.map(category =>
        `<option value="${escAttr(category.id)}" ${category.id === rebate.categoryId ? 'selected' : ''}>${esc(category.name)}</option>`
      )
    ].join('');
    return `
      <div class="option-line-item option-line-edit">
        <select class="option-select" onchange="app.proposal.updateRebate(${optIdx}, ${rebateIdx}, this.value)">${rebateOptions}</select>
        <input type="number" class="option-input-sm" value="${rebate.amount || ''}" placeholder="$"
          onchange="app.proposal.updateRebateAmt(${optIdx}, ${rebateIdx}, this.value)">
      </div>`;
  }).join('');

  const thermostatOptions = ['<option value="">Select thermostat</option>',
    ...PC.THERMOSTAT_OPTIONS.map(t =>
      `<option value="${escAttr(t.id)}" ${t.id === opt.thermostatId ? 'selected' : ''}>${esc(t.name)}</option>`
    )
  ].join('');

  const warrantyOptions = ['<option value="">Select warranty</option>',
    ...PC.WARRANTY_OPTIONS.map(w =>
      `<option value="${escAttr(w.id)}" ${w.id === opt.warrantyId ? 'selected' : ''}>${esc(w.name)}</option>`
    )
  ].join('');

  return `
    <div class="option-column proposal-option-builder ${selected ? 'selected' : ''}">
      <div class="option-builder-header">
        <input class="option-title-input" value="${escAttr(opt.label)}" onchange="app.proposal.updateOptionLabel(${optIdx}, this.value)">
        <button type="button" class="option-pick-button ${selected ? 'active' : ''}" onclick="app.proposal.selectOption(${optIdx})">
          ${selected ? 'Approval' : 'Use'}
        </button>
      </div>
      <div class="option-fit-row">${fitBadges.join('')}</div>

      ${showFurnace ? renderFurnaceControl(optIdx, opt) : ''}
      ${showAC ? renderACControl(optIdx, opt) : ''}

      <div class="section-label mt-md">IAQ / Filters</div>
      ${iaqRows}

      <div class="section-label mt-md">Thermostat & Warranty</div>
      <select class="option-select" onchange="app.proposal.updateThermostat(${optIdx}, this.value)">${thermostatOptions}</select>
      <select class="option-select" onchange="app.proposal.updateWarranty(${optIdx}, this.value)">${warrantyOptions}</select>
      ${selectedThermostat ? renderMiniLine(selectedThermostat.name, selectedThermostat.price) : ''}
      ${selectedWarranty && selectedWarranty.id !== 'war0' ? renderMiniLine(selectedWarranty.name, selectedWarranty.price) : ''}

      <div class="section-label mt-md">Adders / Discounts</div>
      ${miscRows}

      <div class="section-label mt-md">Rebates / Incentives</div>
      ${rebateRows}

      <div class="option-total">
        <span>Total</span>
        <span>$${fmt(financials.total)}</span>
      </div>
      <div class="option-line-item option-after-incentives">
        <span>After Incentives</span>
        <span>$${fmt(financials.afterIncentives)}</span>
      </div>
      ${renderPaymentEstimate(financials)}

      <div class="option-actions">
        ${optIdx > 0 ? `<button type="button" class="text-button" onclick="app.proposal.copyOption(${optIdx - 1}, ${optIdx})">Copy previous</button>` : '<span></span>'}
        <button type="button" class="text-button muted" onclick="app.proposal.clearOption(${optIdx})">Clear</button>
      </div>
    </div>
  `;
}

function renderFurnaceControl(optIdx, opt) {
  if (!opt.furnace) {
    return `
      <div class="section-label">Furnace</div>
      <button class="picker-trigger" onclick="app.proposal.openFurnacePicker(${optIdx})">Select furnace from catalog</button>`;
  }

  return `
    <div class="section-label">Furnace</div>
    <div class="selected-equip">
      <button class="btn-change" onclick="app.proposal.openFurnacePicker(${optIdx})">Change</button>
      <div class="selected-equip-name">${esc(opt.furnace.name)}</div>
      <div class="selected-equip-model">${esc(opt.furnace.model)}</div>
      <div class="selected-equip-specs">
        <span class="spec-badge">${fmt(opt.furnace.afue)}% AFUE</span>
        <span class="spec-badge">${fmt(opt.furnace.btu75)} BTU</span>
        <span class="spec-badge price">$${fmt(opt.furnace.cost)}</span>
      </div>
    </div>`;
}

function renderACControl(optIdx, opt) {
  let html = '';
  if (!opt.ac) {
    html += `
      <div class="section-label mt-md">A/C Unit</div>
      <button class="picker-trigger" onclick="app.proposal.openACPicker(${optIdx})">Select A/C from catalog</button>`;
    return html;
  }

  html += `
    <div class="section-label mt-md">A/C Unit</div>
    <div class="selected-equip">
      <button class="btn-change" onclick="app.proposal.openACPicker(${optIdx})">Change</button>
      <div class="selected-equip-name">${esc(opt.ac.name)}</div>
      <div class="selected-equip-model">${esc(opt.ac.model)}</div>
      <div class="selected-equip-specs">
        <span class="spec-badge">${fmt(opt.ac.tonnage)}T</span>
        <span class="spec-badge price">$${fmt(opt.ac.cost)}</span>
      </div>
    </div>
    <div class="form-grid cols-2 mt-md">
      <div class="form-group">
        <label>SEER Rating</label>
        <input type="number" class="option-input-sm option-input-wide" value="${escAttr(opt.seer || '')}" placeholder="SEER"
          onchange="app.proposal.updateSEER(${optIdx}, this.value)">
      </div>
    </div>`;

  if (opt.coil) {
    html += `
      <div class="selected-equip" style="margin-top:4px">
        <button class="btn-change" onclick="app.proposal.openCoilPicker(${optIdx})">Change</button>
        <div class="selected-equip-name">${esc(opt.coil.name)}</div>
        <div class="selected-equip-model">${esc(opt.coil.model)}</div>
        <div class="selected-equip-specs">
          <span class="spec-badge">${fmt(opt.coil.tonnage)}T</span>
          <span class="spec-badge price">$${fmt(opt.coil.cost)}</span>
        </div>
      </div>`;
  } else {
    html += `<button class="picker-trigger" style="margin-top:4px" onclick="app.proposal.openCoilPicker(${optIdx})">Select coil</button>`;
  }

  return html;
}

function renderMiniLine(label, amount) {
  return `
    <div class="option-line-item">
      <span class="option-line-name">${esc(label)}</span>
      <span class="option-line-price">${amount ? `$${fmt(amount)}` : 'Included'}</span>
    </div>`;
}

function renderPaymentEstimate(financials) {
  const payment = PC.PAYMENT_OPTIONS.find(p => p.id === proposalState.paymentId);
  if (!payment) return '';

  if (!payment.isFinancing) {
    return `<div class="option-line-item option-payment-line"><span>Payment</span><span>${esc(payment.name)}</span></div>`;
  }

  const monthly = PE.calculateMonthlyPayment(financials.total, payment);
  return `<div class="option-line-item option-payment-line"><span>${esc(payment.name)}</span><span>$${fmt(monthly)}/mo</span></div>`;
}

export function openFurnacePicker(optIdx) {
  const btu = window._lastLoadResults?.totalLoss || 0;
  picker.openPicker('furnace', optIdx, (idx, item) => {
    proposalState.options[idx].furnace = item;
    renderEquipmentBuilder(window._lastLoadResults);
  }, btu);
}

export function openACPicker(optIdx) {
  const btu = window._lastLoadResults?.totalGain || 0;
  picker.openPicker('ac', optIdx, (idx, item) => {
    proposalState.options[idx].ac = item;
    proposalState.options[idx].coil = null;
    renderEquipmentBuilder(window._lastLoadResults);
  }, btu);
}

export function openCoilPicker(optIdx) {
  picker.openPicker('coil', optIdx, (idx, item) => {
    proposalState.options[idx].coil = item;
    renderEquipmentBuilder(window._lastLoadResults);
  }, 0);
}

export function renderProposalPreview(loadResults) {
  const container = document.getElementById('proposalPreview');
  if (!container) return;

  const profile = proposalState.companyProfile;
  const project = window._appState?.project || {};
  const selected = normalizeOption(proposalState.options[proposalState.selectedOption], proposalState.selectedOption);
  const selectedFinancials = calculateOptionFinancials(selected);
  const payment = PC.PAYMENT_OPTIONS.find(p => p.id === proposalState.paymentId);
  const phone = project.customerPhone || '';

  const optionCards = proposalState.options.map((option, idx) =>
    renderProposalOption(normalizeOption(option, idx), idx, idx === proposalState.selectedOption)
  ).join('');

  const serviceItems = buildServiceItems(selected, project);
  const installationFeatures = buildInstallationFeatures(selected);

  const html = `
    <div class="proposal-doc proposal-sheet">
      <div class="proposal-topbar">
        <div class="proposal-logo">
          <div class="proposal-logo-main">ALTA AIR</div>
          <div class="proposal-logo-sub">Conditioning - Heating - Humidifiers</div>
        </div>
        <div class="proposal-meta">
          <div><strong>System Designer:</strong> ${esc(profile.advisorName || '')}</div>
          <div><strong>Phone Number:</strong> ${esc(profile.cellPhone || profile.phone || '')}</div>
        </div>
        <div class="proposal-meta right">
          <div><strong>Date:</strong> ${esc(formatDate(project.projectDate))}</div>
          <div><strong>BTU Gain:</strong> ${fmt(loadResults?.totalGain || 0)} &nbsp;&nbsp; <strong>BTU Loss:</strong> ${fmt(loadResults?.totalLoss || 0)}</div>
        </div>
      </div>

      <div class="proposal-options-row">
        ${optionCards}
      </div>

      <div class="proposal-checklist-grid">
        <div class="proposal-checklist-stack">
          ${renderChecklistGroup('Guarantees & Certifications', PC.GUARANTEES.map(label => ({ label, checked: true })))}
          ${renderChecklistGroup('Customer-Centric Benefits', PC.CUSTOMER_BENEFITS.slice(0, 3).map(label => ({ label, checked: true })))}
          ${renderChecklistGroup('Service & Performance', serviceItems)}
        </div>
        <div class="proposal-installation-wrap">
          ${renderChecklistGroup('Installation Features', installationFeatures)}
        </div>
      </div>

      <div class="proposal-approval-block">
        <div class="approval-col">
          <div class="approval-field"><strong>Customer's Name:</strong> ${esc(project.customerName || '')}</div>
          <div class="approval-field"><strong>Address:</strong> ${esc(project.customerAddress || '')}</div>
          <div class="approval-field"><strong>Phone number:</strong> ${esc(phone)}</div>
        </div>
        <div class="approval-col">
          <div class="approval-field"><strong>System Total:</strong> $${fmt(selectedFinancials.total)}</div>
          <div class="approval-field"><strong>Payment Method:</strong> ${esc(payment?.name || '')}${payment?.isFinancing ? ` - $${fmt(PE.calculateMonthlyPayment(selectedFinancials.total, payment))}/mo` : ''}</div>
          <div class="approval-field"><strong>Installation Date:</strong> ${esc(formatDate(proposalState.installDate))}</div>
        </div>
        <div class="approval-col">
          <div class="approval-signature"><strong>Customer Approval:</strong></div>
          <div class="approval-signature"><strong>Date:</strong></div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderProposalOption(option, idx, selected) {
  const financials = calculateOptionFinancials(option);
  const rows = buildProposalRows(option, financials);

  return `
    <div class="proposal-option-card ${selected ? 'selected' : ''}">
      <div class="proposal-option-header">
        <span class="proposal-radio ${selected ? 'checked' : ''}"></span>
        <span>${esc(option.label || `Option ${idx + 1}`)}</span>
      </div>
      <div class="proposal-option-body">
        ${rows.primary.length ? rows.primary.map(row => renderProposalRow(row)).join('') : '<div class="proposal-option-line muted">No equipment selected</div>'}
        ${rows.adders.length ? '<div class="proposal-option-divider"></div>' + rows.adders.map(row => renderProposalRow(row)).join('') : ''}
      </div>
      <div class="proposal-price-lines">
        ${proposalState.paymentId ? `<div class="proposal-finance-row"><strong>${esc(getPaymentText(financials))}</strong></div>` : ''}
        <div><span>Total:</span><strong>$${fmt(financials.total)}</strong></div>
        ${rows.rebates.map(row => renderProposalRow(row, 'rebate')).join('')}
        <div><span>After Incentives:</span><strong>$${fmt(financials.afterIncentives)}</strong></div>
      </div>
    </div>`;
}

function renderProposalRow(row, className = '') {
  const amount = row.amount === null || row.amount === undefined
    ? ''
    : `${row.amount < 0 ? '-' : ''}$${fmt(Math.abs(row.amount))}`;
  return `
    <div class="proposal-option-item ${className}">
      <span>${esc(row.label)}</span>
      <strong>${amount}</strong>
    </div>`;
}

function buildProposalRows(option, financials) {
  const primary = [];
  const adders = [];
  const rebates = [];

  if (proposalState.saleType !== 'acOnly' && option.furnace) {
    primary.push({
      label: `${option.furnace.name} ${option.furnace.model}`,
      amount: financials.furnaceTotal,
    });
  }
  if (proposalState.saleType !== 'furnaceOnly' && option.ac) {
    const seer = option.seer ? `${option.seer} SEER` : `${fmt(option.ac.tonnage)} ton`;
    primary.push({
      label: `${option.ac.name} ${option.ac.model} ${seer}`,
      amount: financials.acTotal,
    });
  }
  if (proposalState.saleType !== 'furnaceOnly' && option.coil) {
    primary.push({
      label: `${option.coil.name} coil ${option.coil.model}`,
      amount: null,
    });
  }

  for (const iaq of financials.iaqLines) {
    adders.push(iaq);
  }

  const thermostat = PC.THERMOSTAT_OPTIONS.find(t => t.id === option.thermostatId);
  if (thermostat && thermostat.id !== 'stat0') adders.push({ label: thermostat.name, amount: thermostat.price || null });
  const warranty = PC.WARRANTY_OPTIONS.find(w => w.id === option.warrantyId);
  if (warranty && warranty.id !== 'war0') adders.push({ label: warranty.name, amount: warranty.price || null });

  adders.push(...financials.miscLines);
  rebates.push(...financials.rebateLines.map(row => ({ ...row, amount: -Math.abs(row.amount) })));

  return { primary, adders, rebates };
}

function renderChecklistGroup(title, items) {
  return `
    <div class="proposal-checklist-group">
      <h3>${esc(title)}</h3>
      ${items.map(item => `
        <div class="proposal-check-row">
          <span class="proposal-check ${item.checked ? 'checked' : ''}"></span>
          <span>${esc(item.label)}</span>
        </div>
      `).join('')}
    </div>`;
}

function buildServiceItems(option, project) {
  const hasAC = proposalState.saleType !== 'furnaceOnly' && option.ac;
  const seer = option.seer || '';
  return [
    { label: 'OVER 120 YEARS COMBINED EXPERIENCE', checked: true },
    { label: 'Temperature Guarantee / Load Calculations', checked: true },
    { label: `Heating ${project.winterInside || 70}F @ -5F, Cooling ${project.summerInside || 75}F @ ${project.summerOutside || 100}F`, checked: true },
    { label: `ARI Certified SEER Ratings: ${seer}`, checked: Boolean(hasAC && seer) },
  ];
}

function buildInstallationFeatures(option) {
  const hasFurnace = proposalState.saleType !== 'acOnly' && Boolean(option.furnace);
  const hasAC = proposalState.saleType !== 'furnaceOnly' && Boolean(option.ac);
  const highEfficiencyFurnace = hasFurnace && (option.furnace.afue || 0) >= 90;
  const standardFurnace = hasFurnace && (option.furnace.afue || 0) < 90;
  const hasFilter = getSelectedIAQItems(option).some(item => item.category === 'filter' || /filter/i.test(item.name));
  const thermostat = PC.THERMOSTAT_OPTIONS.find(t => t.id === option.thermostatId);

  return [
    { label: 'Remove/Dispose of Existing Equipment', checked: true },
    { label: 'Complete Clean Up', checked: true },
    { label: thermostat && thermostat.id !== 'stat0' ? thermostat.name : 'Select a Thermostat', checked: Boolean(thermostat && thermostat.id !== 'stat0') },
    { label: 'Condensate Pump', checked: false },
    { label: 'Condensate Drain', checked: false },
    { label: 'High Efficient Furnace Flue', checked: highEfficiencyFurnace },
    { label: 'Bring 80% Furnace Flue To Code', checked: standardFurnace },
    { label: 'External Filter Rack', checked: hasFilter },
    { label: 'Reconnect to Existing Ducting', checked: hasFurnace || hasAC },
    { label: 'Install Turning Vanes', checked: false },
    { label: 'Insulate Ducting', checked: false },
    { label: 'Seal Ducting', checked: false },
    { label: 'Return Air Grills: Add / Enlarge', checked: false },
    { label: 'Supply Air Registers: Add / New', checked: false },
    { label: 'Flex Gas Connector with Shutoff', checked: hasFurnace },
    { label: 'Add Outside Combustion Air', checked: false },
    { label: 'Condenser Pad', checked: hasAC },
    { label: 'Wiring', checked: hasAC },
    { label: 'Electrical / Disconnect', checked: hasAC },
    { label: 'Refrigeration Lines', checked: hasAC },
    { label: 'Flush Refrigeration Lines', checked: false },
    { label: 'A/C Storage Cover', checked: hasAC },
    { label: 'Installation', checked: true },
    { label: 'Fire, Charge & Test Equipment', checked: hasAC },
    { label: 'Labor', checked: true },
    { label: 'Sales Tax', checked: true },
  ];
}

export function renderSettings() {
  const body = document.getElementById('settingsBody');
  if (!body) return;
  const profile = proposalState.companyProfile;

  body.innerHTML = `
    <div class="form-grid cols-2">
      <div class="form-group"><label>Company Name</label><input type="text" id="sCompanyName" value="${escAttr(profile.companyName)}"></div>
      <div class="form-group"><label>System Designer</label><input type="text" id="sAdvisorName" value="${escAttr(profile.advisorName)}"></div>
      <div class="form-group"><label>Phone</label><input type="text" id="sPhone" value="${escAttr(profile.phone)}"></div>
      <div class="form-group"><label>Cell Phone</label><input type="text" id="sCellPhone" value="${escAttr(profile.cellPhone)}"></div>
      <div class="form-group"><label>Email</label><input type="text" id="sEmail" value="${escAttr(profile.email)}"></div>
      <div class="form-group" style="grid-column:1/-1"><label>Address</label><input type="text" id="sAddress" value="${escAttr(profile.address)}"></div>
    </div>
    <p class="text-sm text-muted mt-lg">Equipment catalog is loaded from <code>equipment-catalog.json</code>. Edit that file directly for bulk catalog updates.</p>
  `;
}

export function saveSettings() {
  proposalState.companyProfile = {
    companyName: document.getElementById('sCompanyName')?.value || '',
    advisorName: document.getElementById('sAdvisorName')?.value || '',
    phone: document.getElementById('sPhone')?.value || '',
    cellPhone: document.getElementById('sCellPhone')?.value || '',
    email: document.getElementById('sEmail')?.value || '',
    address: document.getElementById('sAddress')?.value || '',
  };
  saveToStorage('hvac_company_profile', proposalState.companyProfile);
}

export function updateSaleType(val) {
  proposalState.saleType = val;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateExistingAFUE(val) {
  proposalState.existingAFUE = parseFloat(val) || 70;
}

export function updateInstallDate(val) {
  proposalState.installDate = val;
}

export function selectOption(idx) {
  proposalState.selectedOption = clampIndex(idx);
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateOptionLabel(optIdx, val) {
  proposalState.options[optIdx].label = val || `Option ${optIdx + 1}`;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateSEER(optIdx, val) {
  proposalState.options[optIdx].seer = val;
}

export function updateIAQ(optIdx, slotIdx, val) {
  normalizeOption(proposalState.options[optIdx], optIdx);
  proposalState.options[optIdx].iaqSelections[slotIdx].itemId = val;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateFilter(optIdx, val) {
  normalizeOption(proposalState.options[optIdx], optIdx);
  proposalState.options[optIdx].filterId = val;
  proposalState.options[optIdx].iaqSelections[0].itemId = val;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateThermostat(optIdx, val) {
  proposalState.options[optIdx].thermostatId = val;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateWarranty(optIdx, val) {
  proposalState.options[optIdx].warrantyId = val;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateMisc(optIdx, miscIdx, val) {
  proposalState.options[optIdx].miscSelections[miscIdx].itemId = val;
  const item = PC.MISC_ITEMS.find(x => x.id === val);
  proposalState.options[optIdx].miscSelections[miscIdx].price = item ? item.price : 0;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateMiscPrice(optIdx, miscIdx, val) {
  proposalState.options[optIdx].miscSelections[miscIdx].price = parseFloat(val) || 0;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updatePayment(...args) {
  const val = args.length === 1 ? args[0] : args[1];
  proposalState.paymentId = val || '';
  renderEquipmentBuilder(window._lastLoadResults);
}

export function updateRebate(optIdx, rebIdx, val) {
  proposalState.options[optIdx].rebates[rebIdx].categoryId = val;
}

export function updateRebateAmt(optIdx, rebIdx, val) {
  proposalState.options[optIdx].rebates[rebIdx].amount = parseFloat(val) || 0;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function copyOption(fromIdx, toIdx) {
  const source = normalizeOption(proposalState.options[fromIdx], fromIdx);
  const label = proposalState.options[toIdx].label || `Option ${toIdx + 1}`;
  proposalState.options[toIdx] = JSON.parse(JSON.stringify(source));
  proposalState.options[toIdx].label = label;
  renderEquipmentBuilder(window._lastLoadResults);
}

export function clearOption(optIdx) {
  const label = proposalState.options[optIdx].label || `Option ${optIdx + 1}`;
  proposalState.options[optIdx] = createDefaultOption(optIdx + 1);
  proposalState.options[optIdx].label = label;
  renderEquipmentBuilder(window._lastLoadResults);
}

export { picker };

// ═══════════════════════════════════════════════════════════════
// MATERIALS & DUCT CALCULATOR
// ═══════════════════════════════════════════════════════════════

function getMaterialsTotals() {
  const furnaceType = getFurnaceType(proposalState.options[proposalState.selectedOption]?.furnace);
  return PE.calculateMaterialsTotal(proposalState.materials, furnaceType);
}

function renderMaterialsCard() {
  const totals = getMaterialsTotals();
  const grandTotal = totals.totalMaterials + totals.totalLabor;
  const expanded = proposalState._materialsExpanded ? 'expanded' : '';

  return `
    <div class="card materials-card ${expanded}" id="materialsCard">
      <div class="materials-summary-bar" onclick="app.proposal.toggleMaterialsCard()">
        <div class="materials-summary-left">
          <span class="icon">📦</span> Materials & Labor
          <span class="materials-toggle-icon">▼</span>
        </div>
        <div class="materials-summary-totals">
          <span class="materials-summary-chip">Materials <strong>$${fmt(totals.totalMaterials)}</strong></span>
          <span class="materials-summary-chip">Labor <strong>$${fmt(totals.totalLabor)}</strong></span>
          <span class="materials-summary-chip">Total <strong>$${fmt(grandTotal)}</strong></span>
        </div>
      </div>
      <div class="materials-body">
        <div class="materials-panels">
          <div>
            <div class="materials-panel-title">Furnace Materials</div>
            ${renderMaterialTable('furnaceMaterials')}
            ${renderFurnaceLaborSection()}
            ${renderACLaborSection()}
          </div>
          <div>
            <div class="materials-panel-title">A/C Materials</div>
            ${renderMaterialTable('acMaterials')}
            
            <div class="materials-panel-title" style="margin-top: var(--space-lg);">General Materials</div>
            ${renderMaterialTable('generalMaterials')}
            
            ${renderDuctCollapsible()}
          </div>
        </div>
        ${renderMaterialsGrandTotals(totals)}
      </div>
    </div>
  `;
}

function renderMaterialTable(stateKey) {
  const items = proposalState.materials[stateKey];
  let subtotal = 0;
  const rows = items.map((item, idx) => {
    const lineTotal = (item.qty || 0) * item.unitPrice;
    subtotal += lineTotal;
    const hasQty = item.qty > 0;
    return `
      <tr class="${hasQty ? 'has-qty' : ''}">
        <td>${esc(item.name)}</td>
        <td class="right"><input type="number" value="${item.qty || ''}" min="0" placeholder="0"
          data-materials-focus-key="mat:${stateKey}:${idx}"
          onchange="app.proposal.updateMaterialQty('${stateKey}', ${idx}, this.value)"></td>
        <td class="right">$${item.unitPrice.toFixed(2)}</td>
        <td class="right total-cell">${hasQty ? '$' + lineTotal.toFixed(2) : '—'}</td>
      </tr>`;
  }).join('');

  // Add duct-computed read-only rows for generalMaterials
  let ductRows = '';
  if (stateKey === 'generalMaterials') {
    const waste = proposalState.materials.ductWasteFactor || 0;
    for (const dtype of DUCT_MATERIAL_TYPES) {
      const runs = proposalState.materials.ductRuns?.[dtype.key] || [];
      const { totalSqft } = calculateDuctTypeSqft(runs, waste);
      const cost = totalSqft * dtype.pricePerSqft;
      subtotal += cost;
      const hasSqft = totalSqft > 0;
      ductRows += `
        <tr class="${hasSqft ? 'has-qty' : ''}">
          <td class="mat-readonly">${esc(dtype.name)} (duct calc)</td>
          <td class="right mat-readonly">${hasSqft ? totalSqft.toFixed(1) : '—'}</td>
          <td class="right">$${dtype.pricePerSqft.toFixed(2)}/sqft</td>
          <td class="right total-cell">${hasSqft ? '$' + cost.toFixed(2) : '—'}</td>
        </tr>`;
    }
  }

  return `
    <div class="mat-scroll">
      <table class="mat-table">
        <thead><tr>
          <th>Item</th><th class="right">Qty</th><th class="right">$/unit</th><th class="right">Total</th>
        </tr></thead>
        <tbody>
          ${rows}
          ${ductRows}
        </tbody>
      </table>
    </div>
    <div class="mat-subtotal-fixed">
      <span>Subtotal</span>
      <span>$${fmt(subtotal)}</span>
    </div>`;
}

function renderFurnaceLaborSection() {
  const labor = proposalState.materials.labor;
  const rate = proposalState.materials.laborRate;
  let total80 = 0, total90 = 0;
  const rows = labor.map((cat, idx) => {
    const isEquip = cat.name === 'Equipment';
    const hrs80 = cat.hours80 || 0;
    const hrs90 = isEquip ? (cat.hours90 || 0) : hrs80;
    
    total80 += hrs80;
    total90 += hrs90;

    const col90HTML = isEquip
      ? `<input type="number" value="${cat.hours90 || ''}" min="0" placeholder="0" step="0.5" data-materials-focus-key="labor:${idx}:90" onchange="app.proposal.updateLaborHours(${idx}, '90', this.value)">`
      : `<span class="mat-readonly" style="padding-right: 4px;">${hrs90 || '—'}</span>`;

    return `
      <tr>
        <td>${esc(cat.name)}</td>
        <td class="right"><input type="number" value="${cat.hours80 || ''}" min="0" placeholder="0" step="0.5"
          data-materials-focus-key="labor:${idx}:80"
          onchange="app.proposal.updateLaborHours(${idx}, '80', this.value)"></td>
        <td class="right">${col90HTML}</td>
      </tr>`;
  }).join('');

  return `
    <div class="labor-section">
      <div class="materials-panel-title">Furnace Labor</div>
      <table class="labor-table">
        <thead><tr><th>Task</th><th class="right">80% hrs</th><th class="right">90% hrs</th></tr></thead>
        <tbody>
          ${rows}
          <tr class="labor-total-row">
            <td>Total</td>
            <td class="right">${total80}h → $${fmt(total80 * rate)}</td>
            <td class="right">${total90}h → $${fmt(total90 * rate)}</td>
          </tr>
        </tbody>
      </table>
      <div class="labor-rate-row">
        Rate: $<input type="number" value="${rate}" min="0" step="1"
          data-materials-focus-key="labor:rate"
          onchange="app.proposal.updateLaborRate(this.value)">/hr
      </div>
    </div>`;
}

function renderACLaborSection() {
  const m = proposalState.materials;
  const rate = m.laborRate;
  const acCost = (m.acLaborHours || 0) * rate;
  const genCost = (m.generalLaborHours || 0) * rate;

  return `
    <div class="labor-section">
      <div class="materials-panel-title">A/C & General Labor</div>
      <table class="labor-table">
        <thead><tr><th>Task</th><th class="right">Hours</th><th class="right">Cost</th></tr></thead>
        <tbody>
          <tr>
            <td>A/C Labor</td>
            <td class="right"><input type="number" value="${m.acLaborHours || ''}" min="0" placeholder="0" step="0.5"
              data-materials-focus-key="labor:ac"
              onchange="app.proposal.updateACLaborHours(this.value)"></td>
            <td class="right">$${fmt(acCost)}</td>
          </tr>
          <tr>
            <td>General Labor</td>
            <td class="right"><input type="number" value="${m.generalLaborHours || ''}" min="0" placeholder="0" step="0.5"
              data-materials-focus-key="labor:general"
              onchange="app.proposal.updateGeneralLaborHours(this.value)"></td>
            <td class="right">$${fmt(genCost)}</td>
          </tr>
          <tr class="labor-total-row">
            <td>Total</td>
            <td class="right">${(m.acLaborHours || 0) + (m.generalLaborHours || 0)}h</td>
            <td class="right">$${fmt(acCost + genCost)}</td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderDuctCollapsible() {
  const m = proposalState.materials;
  const waste = m.ductWasteFactor ?? 0.30;
  const expanded = proposalState._ductCalcExpanded ? 'expanded' : '';

  // Build summary chips
  const summaryParts = DUCT_MATERIAL_TYPES.map(dtype => {
    const runs = m.ductRuns?.[dtype.key] || [];
    const { totalSqft } = calculateDuctTypeSqft(runs, waste);
    const shortName = dtype.name.replace('Sheet Metal ', 'SM').replace('×', 'x');
    return `<span class="duct-summary-chip${totalSqft > 0 ? ' has-data' : ''}">${shortName}: <strong>${totalSqft > 0 ? totalSqft.toFixed(1) + ' sqft' : '—'}</strong></span>`;
  }).join('');

  return `
    <div class="duct-collapsible ${expanded}" style="margin-top: var(--space-lg);">
      <div class="duct-collapsible-bar" onclick="app.proposal.toggleDuctCalc()">
        <span class="duct-collapsible-label">📐 Duct Calculator <span class="materials-toggle-icon">▼</span></span>
        <span class="duct-summary-chips">${summaryParts}</span>
      </div>
      <div class="duct-collapsible-body">
        ${renderDuctCalculatorBody()}
      </div>
    </div>
  `;
}

function renderDuctCalculatorBody() {
  const m = proposalState.materials;
  const waste = m.ductWasteFactor ?? 0.30;
  const wastePercent = Math.round(waste * 100);

  let html = `
    <div class="duct-waste-row">
      Waste factor:
      <input type="number" value="${wastePercent}" min="0" max="100" step="1"
        data-materials-focus-key="duct:waste"
        onchange="app.proposal.updateDuctWaste(this.value)">%
    </div>
    <div class="duct-calc-section">`;

  for (const dtype of DUCT_MATERIAL_TYPES) {
    const runs = m.ductRuns?.[dtype.key] || [];
    const { rawSqft, totalSqft } = calculateDuctTypeSqft(runs, waste);
    const cost = totalSqft * dtype.pricePerSqft;

    let runRows = runs.map((run, idx) => {
      const sqft = calculateDuctRunSqft(run.length || 0, run.width || 0, run.height || 0);
      const hasData = sqft > 0;
      return `
        <tr class="${hasData ? 'has-data' : ''}">
          <td>${idx + 1}</td>
          <td><input type="number" value="${run.length || ''}" min="0" placeholder="0" step="0.5"
            data-materials-focus-key="duct:${dtype.key}:${idx}:length"
            onchange="app.proposal.updateDuctRun('${dtype.key}', ${idx}, 'length', this.value)"></td>
          <td><input type="number" value="${run.width || ''}" min="0" placeholder="0" step="0.5"
            data-materials-focus-key="duct:${dtype.key}:${idx}:width"
            onchange="app.proposal.updateDuctRun('${dtype.key}', ${idx}, 'width', this.value)"></td>
          <td><input type="number" value="${run.height || ''}" min="0" placeholder="0" step="0.5"
            data-materials-focus-key="duct:${dtype.key}:${idx}:height"
            onchange="app.proposal.updateDuctRun('${dtype.key}', ${idx}, 'height', this.value)"></td>
          <td>${hasData ? sqft.toFixed(1) : '—'}</td>
        </tr>`;
    }).join('');

    const canAdd = runs.length < MAX_DUCT_ROWS;

    html += `
      <div class="duct-type-block">
        <div class="duct-type-label">${esc(dtype.name)}</div>
        <table class="duct-table">
          <thead><tr><th>#</th><th>L(ft)</th><th>W(in)</th><th>H(in)</th><th>sqft</th></tr></thead>
          <tbody>
            ${runRows}
            <tr class="duct-subtotal-row">
              <td colspan="4">Subtotal: ${rawSqft.toFixed(1)} + ${wastePercent}% = ${totalSqft.toFixed(1)} sqft</td>
              <td>$${cost.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="duct-add-row" ${canAdd ? '' : 'disabled'}
          onclick="app.proposal.addDuctRow('${dtype.key}')">+ Add row</button>
      </div>`;
  }

  html += '</div>';
  return html;
}

function renderMaterialsGrandTotals(totals) {
  const grandTotal = totals.totalMaterials + totals.totalLabor;
  return `
    <div class="materials-grand-totals">
      <div class="materials-gt-item">
        <div class="materials-gt-label">Furnace Mat.</div>
        <div class="materials-gt-value">$${fmt(totals.furnaceMaterialsTotal)}</div>
      </div>
      <div class="materials-gt-item">
        <div class="materials-gt-label">A/C Mat.</div>
        <div class="materials-gt-value">$${fmt(totals.acMaterialsTotal)}</div>
      </div>
      <div class="materials-gt-item">
        <div class="materials-gt-label">General Mat.</div>
        <div class="materials-gt-value">$${fmt(totals.generalMaterialsTotal)}</div>
      </div>
      <div class="materials-gt-item">
        <div class="materials-gt-label">Total Labor</div>
        <div class="materials-gt-value">$${fmt(totals.totalLabor)}</div>
      </div>
      <div class="materials-gt-item">
        <div class="materials-gt-label">Grand Total</div>
        <div class="materials-gt-value">$${fmt(grandTotal)}</div>
      </div>
    </div>`;
}

export function toggleMaterialsCard() {
  proposalState._materialsExpanded = !proposalState._materialsExpanded;
  const card = document.getElementById('materialsCard');
  if (!card) return;
  card.classList.toggle('expanded', proposalState._materialsExpanded);
  // One-shot animation only on expand toggle
  if (proposalState._materialsExpanded) {
    const body = card.querySelector('.materials-body');
    if (body) {
      body.classList.add('animating');
      body.addEventListener('animationend', () => body.classList.remove('animating'), { once: true });
    }
  }
}

export function toggleDuctCalc() {
  proposalState._ductCalcExpanded = !proposalState._ductCalcExpanded;
  const el = document.querySelector('.duct-collapsible');
  if (!el) return;
  el.classList.toggle('expanded', proposalState._ductCalcExpanded);
  if (proposalState._ductCalcExpanded) {
    const body = el.querySelector('.duct-collapsible-body');
    if (body) {
      body.classList.add('animating');
      body.addEventListener('animationend', () => body.classList.remove('animating'), { once: true });
    }
  }
}

export function updateMaterialQty(stateKey, itemIdx, value) {
  proposalState.materials[stateKey][itemIdx].qty = parseFloat(value) || 0;
  scheduleMaterialsCardRerender();
}

export function updateLaborHours(catIdx, type, value) {
  const key = type === '90' ? 'hours90' : 'hours80';
  proposalState.materials.labor[catIdx][key] = parseFloat(value) || 0;
  scheduleMaterialsCardRerender();
}

export function updateLaborRate(value) {
  proposalState.materials.laborRate = parseFloat(value) || 50;
  scheduleMaterialsCardRerender();
}

export function updateACLaborHours(value) {
  proposalState.materials.acLaborHours = parseFloat(value) || 0;
  scheduleMaterialsCardRerender();
}

export function updateGeneralLaborHours(value) {
  proposalState.materials.generalLaborHours = parseFloat(value) || 0;
  scheduleMaterialsCardRerender();
}

export function updateDuctRun(typeKey, runIdx, field, value) {
  const runs = proposalState.materials.ductRuns[typeKey];
  if (runs && runs[runIdx]) {
    runs[runIdx][field] = parseFloat(value) || 0;
  }
  scheduleMaterialsCardRerender();
}

export function addDuctRow(typeKey) {
  const runs = proposalState.materials.ductRuns[typeKey];
  if (runs && runs.length < MAX_DUCT_ROWS) {
    runs.push(createDuctRun());
    scheduleMaterialsCardRerender();
  }
}

export function updateDuctWaste(value) {
  proposalState.materials.ductWasteFactor = (parseFloat(value) || 0) / 100;
  scheduleMaterialsCardRerender();
}

function scheduleMaterialsCardRerender() {
  if (materialsRenderTimer !== null) clearTimeout(materialsRenderTimer);
  materialsRenderTimer = setTimeout(() => {
    materialsRenderTimer = null;
    rerenderMaterialsCard();
  }, 0);
}

function rerenderMaterialsCard() {
  const matWrap = document.getElementById('eqMaterials');
  if (!matWrap) return;

  // Preserve focused input position and scroll state
  const allInputs = Array.from(matWrap.querySelectorAll('input'));
  const focusedEl = matWrap.contains(document.activeElement) ? document.activeElement : null;
  const focusedIdx = allInputs.indexOf(focusedEl);
  const focusedKey = focusedEl?.dataset?.materialsFocusKey || '';
  const scrollPositions = [];
  matWrap.querySelectorAll('.mat-scroll').forEach((el, i) => {
    scrollPositions[i] = el.scrollTop;
  });

  // Re-render (no animation class — just a stable content swap)
  matWrap.innerHTML = renderMaterialsCard();

  // Restore scroll positions
  matWrap.querySelectorAll('.mat-scroll').forEach((el, i) => {
    if (scrollPositions[i] !== undefined) el.scrollTop = scrollPositions[i];
  });

  // Restore focus to the same input position
  if (focusedIdx >= 0) {
    const newInputs = Array.from(matWrap.querySelectorAll('input'));
    const focusTarget = newInputs.find(input => input.dataset.materialsFocusKey === focusedKey)
      || newInputs[focusedIdx];
    if (focusTarget) focusTarget.focus();
  }
}

function normalizeOption(option, idx) {
  if (!option.label) option.label = `Option ${idx + 1}`;
  if (!Array.isArray(option.iaqSelections) || option.iaqSelections.length === 0) {
    option.iaqSelections = [{ itemId: option.filterId || '' }, { itemId: '' }, { itemId: '' }];
  }
  while (option.iaqSelections.length < 3) option.iaqSelections.push({ itemId: '' });
  option.iaqSelections = option.iaqSelections.map(slot =>
    typeof slot === 'string' ? { itemId: slot } : { itemId: slot?.itemId || '' }
  );
  if (!Array.isArray(option.miscSelections)) option.miscSelections = [];
  while (option.miscSelections.length < 3) option.miscSelections.push({ itemId: '', price: 0 });
  if (!Array.isArray(option.rebates)) option.rebates = [];
  while (option.rebates.length < 3) option.rebates.push({ categoryId: '', amount: 0 });
  return option;
}

function calculateOptionFinancials(option) {
  const normalized = normalizeOption(option, 0);
  const showFurnace = proposalState.saleType !== 'acOnly';
  const showAC = proposalState.saleType !== 'furnaceOnly';
  const materials = PE.calculateMaterialsTotal(proposalState.materials, getFurnaceType(normalized.furnace));

  let equipmentTotal = 0;
  let furnaceTotal = 0;
  let acTotal = 0;
  if (showFurnace && normalized.furnace) {
    const furnacePrice = PE.calculateFurnacePrice(
      normalized.furnace,
      materials.furnaceMaterialsTotal,
      materials.furnaceLaborTotal
    );
    furnaceTotal = furnacePrice?.total || 0;
    equipmentTotal += furnaceTotal;
  }

  if (showAC && normalized.ac) {
    const acWithCoil = { ...normalized.ac, coilCost: normalized.coil?.cost || 0 };
    const acPrice = PE.calculateACPrice(
      acWithCoil,
      materials.acMaterialsTotal + materials.generalMaterialsTotal,
      materials.acLaborTotal + materials.generalLaborTotal,
      Boolean(showFurnace && normalized.furnace)
    );
    acTotal = acPrice?.total || 0;
    equipmentTotal += acTotal;
  }

  const iaqLines = getSelectedIAQItems(normalized).map(item => ({
    label: item.name,
    amount: item.price || 0,
  }));
  const iaqTotal = iaqLines.reduce((sum, item) => sum + (item.amount || 0), 0);
  const thermostat = PC.THERMOSTAT_OPTIONS.find(t => t.id === normalized.thermostatId);
  const warranty = PC.WARRANTY_OPTIONS.find(w => w.id === normalized.warrantyId);
  const thermostatTotal = thermostat?.price || 0;
  const warrantyTotal = warranty?.price || 0;

  let miscTotal = 0;
  const miscLines = [];
  for (const misc of normalized.miscSelections) {
    const item = PC.MISC_ITEMS.find(x => x.id === misc.itemId);
    if (!item) continue;
    const amount = misc.price || item?.price || 0;
    const signedAmount = item?.isDiscount ? -Math.abs(amount) : amount;
    miscTotal += signedAmount;
    miscLines.push({ label: item.name, amount: signedAmount });
  }

  const total = Math.max(0, equipmentTotal + iaqTotal + thermostatTotal + warrantyTotal + miscTotal);
  const rebateTotal = normalized.rebates.reduce((sum, r) => sum + (r.amount || 0), 0);
  const rebateLines = normalized.rebates
    .map(r => ({
      label: PC.REBATE_CATEGORIES.find(c => c.id === r.categoryId)?.name || '',
      amount: r.amount || 0,
    }))
    .filter(row => row.label && row.amount);
  const afterIncentives = PE.calculateAfterIncentives(total, normalized.rebates);

  return {
    equipmentTotal,
    furnaceTotal,
    acTotal,
    iaqTotal,
    iaqLines,
    miscTotal,
    miscLines,
    rebateTotal,
    rebateLines,
    total,
    afterIncentives,
  };
}

function getSelectedIAQItems(option) {
  const ids = [];
  if (option.filterId) ids.push(option.filterId);
  for (const slot of option.iaqSelections || []) {
    if (slot?.itemId) ids.push(slot.itemId);
  }
  return [...new Set(ids)]
    .map(id => PC.IAQ_CATALOG.find(item => item.id === id))
    .filter(Boolean);
}

function getFurnaceType(furnace) {
  return (furnace?.afue || 0) >= 90 ? '90' : '80';
}

function buildFitBadges(option, loadResults) {
  const badges = [];
  if (proposalState.saleType !== 'acOnly' && option.furnace && loadResults?.totalLoss) {
    const ratio = option.furnace.btu75 / loadResults.totalLoss;
    const status = ratio < 0.9 ? 'warn' : ratio > 1.35 ? 'caution' : 'good';
    badges.push(`<span class="fit-badge ${status}">Heat ${Math.round(ratio * 100)}%</span>`);
  }
  if (proposalState.saleType !== 'furnaceOnly' && option.ac && loadResults?.totalGain) {
    const capacity = option.ac.tonnage * 12000;
    const ratio = capacity / loadResults.totalGain;
    const status = ratio < 0.9 ? 'warn' : ratio > 1.35 ? 'caution' : 'good';
    badges.push(`<span class="fit-badge ${status}">Cool ${Math.round(ratio * 100)}%</span>`);
  }
  if (!badges.length) badges.push('<span class="fit-badge">Ready for selections</span>');
  return badges;
}

function getPaymentText(financials) {
  const payment = PC.PAYMENT_OPTIONS.find(p => p.id === proposalState.paymentId);
  if (!payment) return '';
  if (!payment.isFinancing) return payment.name;
  return `${payment.name} - $${fmt(PE.calculateMonthlyPayment(financials.total, payment))}/Month`;
}

function formatDate(value) {
  if (!value) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-');
    return `${Number(month)}/${Number(day)}/${year}`;
  }
  return value;
}

function clampIndex(idx) {
  const num = parseInt(idx, 10);
  if (!Number.isFinite(num)) return 0;
  return Math.max(0, Math.min(2, num));
}

function fmt(n) {
  const num = Number(n);
  if (!num || !isFinite(num)) return '0';
  return Math.round(num).toLocaleString();
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escAttr(value) {
  return esc(value);
}
