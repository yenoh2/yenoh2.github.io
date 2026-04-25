/**
 * Proposal App Module - equipment builder, proposal preview, and settings.
 */

import * as PC from './proposal-constants.js';
import * as PE from './proposal-engine.js';
import * as picker from './catalog-picker.js';
import { createMaterialsState } from './materials-data.js';

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

  let html = `
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

    <div class="card">
      <div class="card-title">Customer Options</div>
      <div class="options-grid proposal-options-builder">
  `;

  for (let i = 0; i < 3; i++) {
    html += renderOptionColumn(i, loadResults);
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
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
      materials.acGeneralMaterialsTotal,
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
