/**
 * Proposal & Bid Builder — Pricing & Operating Cost Engine
 * Replicates the Pricing and Bid sheet calculations.
 */

import * as PC from './proposal-constants.js';
import { DUCT_MATERIAL_TYPES, calculateDuctTypeSqft } from './materials-data.js';

// ─── Furnace Pricing ────────────────────────────────────────

/**
 * Calculate furnace total price for a bid option.
 * Pricing!B22-B30 logic:
 *   cost + materials + salesTax + labor = subtotal
 *   total = subtotal / (1 - profitMargin) + bonus
 */
export function calculateFurnacePrice(furnace, materialsTotal, laborTotal, bonus = 0) {
  if (!furnace || !furnace.cost) return null;

  const equipCost = furnace.cost;
  const subtotalBeforeTax = equipCost + materialsTotal;
  const salesTax = subtotalBeforeTax * PC.SALES_TAX_RATE;
  const subtotalWithTax = subtotalBeforeTax + salesTax;
  const subtotalWithLabor = subtotalWithTax + laborTotal;
  const total = subtotalWithLabor / (1 - PC.FURNACE_PROFIT_MARGIN) + bonus;
  const profit = total - subtotalWithLabor;

  return {
    equipCost,
    materialsTotal,
    salesTax,
    laborTotal,
    subtotal: subtotalWithLabor,
    profit,
    total,
  };
}

// ─── A/C Pricing ────────────────────────────────────────────

/**
 * Calculate A/C + Coil total price for a bid option.
 * Pricing!H23-H35 logic:
 *   acCost + coilCost + materials + salesTax + labor = subtotal
 *   total = subtotal / (1 - profitMargin) + bonus
 *   withFurnace variant uses reduced material/tax calculation
 */
export function calculateACPrice(ac, acMaterialsTotal, acLaborTotal, withFurnace, bonus = 0) {
  if (!ac || !ac.cost) return null;

  const acCost = ac.cost;
  const coilCost = ac.coilCost || 0;
  const materialsTotal = acMaterialsTotal;

  // Standalone pricing (no furnace bundle)
  const subtotalStandalone = acCost + coilCost + materialsTotal;
  const salesTaxStandalone = subtotalStandalone * PC.SALES_TAX_RATE;
  const withLaborStandalone = subtotalStandalone + salesTaxStandalone + acLaborTotal;
  const totalStandalone = withLaborStandalone / (1 - PC.AC_PROFIT_MARGIN) + bonus;

  // With-furnace pricing (bundled - uses reduced materials)
  const subtotalBundle = acCost + coilCost + materialsTotal;
  const withLaborBundle = subtotalBundle + (subtotalBundle * PC.SALES_TAX_RATE) + acLaborTotal;
  const totalWithFurnace = withLaborBundle / (1 - PC.AC_PROFIT_MARGIN) + bonus;

  return {
    acCost,
    coilCost,
    materialsTotal,
    salesTax: salesTaxStandalone,
    laborTotal: acLaborTotal,
    totalStandalone,
    totalWithFurnace,
    total: withFurnace ? totalWithFurnace : totalStandalone,
  };
}

// ─── Option Total ───────────────────────────────────────────

/**
 * Calculate full option total including all line items.
 * Replicates Proposal H21 = SUM(H8:H20)
 */
export function calculateOptionTotal(option) {
  let total = 0;

  // Furnace price (from Pricing sheet total)
  total += option.furnaceTotal || 0;

  // A/C price (with-furnace variant if both selected)
  total += option.acTotal || 0;

  // IAQ items
  for (const iaq of (option.iaqSelections || [])) {
    if (iaq && iaq.price) total += iaq.price;
  }

  // Misc items (can be additions or discounts)
  for (const misc of (option.miscSelections || [])) {
    if (misc && misc.price) {
      total += misc.isDiscount ? -Math.abs(misc.price) : misc.price;
    }
  }

  // Thermostat
  total += option.thermostatPrice || 0;

  return total;
}

// ─── Rebates & After-Incentives ─────────────────────────────

/**
 * Calculate after-incentives price.
 */
export function calculateAfterIncentives(optionTotal, rebates) {
  let totalRebates = 0;
  for (const r of (rebates || [])) {
    totalRebates += r.amount || 0;
  }
  return Math.max(0, optionTotal - totalRebates);
}

// ─── Financing / Monthly Payment ────────────────────────────

/**
 * Calculate monthly payment for a financing option.
 * Formula: total × factor
 */
export function calculateMonthlyPayment(total, paymentOption) {
  if (!paymentOption || !paymentOption.isFinancing || !paymentOption.factor) return null;
  return Math.round(total * paymentOption.factor);
}

// ─── Operating Cost Analysis ────────────────────────────────

/**
 * Calculate annual heating gas cost.
 * Bid sheet formula: btuLoss × operatingHours / (afue/100) × gasPrice / 1,000,000
 */
export function calculateAnnualHeatingCost(btuLoss, afue, gasPrice, operatingHours) {
  if (!afue || afue === 0) return 0;
  return btuLoss * operatingHours / (afue / 100) * gasPrice / 1000000;
}

/**
 * Calculate annual cooling electricity cost.
 * Bid sheet formula: btuGain / seer × electricityRate (simplified)
 * Full: single-stage = btuGain / seer, multi = btuGain / seer × 0.75
 * Then × electricityRate
 */
export function calculateAnnualCoolingCost(btuGain, seer, isSingleStage, electricityRate) {
  if (!seer || seer === 0) return 0;
  const wattage = isSingleStage ? (btuGain / seer) : (btuGain / seer * 0.75);
  return wattage * electricityRate;
}

/**
 * Calculate 10-year savings vs existing or baseline equipment.
 * Bid sheet formula: (baselineCost - newCost) × 10 years
 */
export function calculateSavings(baselineAnnualCost, newAnnualCost) {
  const annualSavings = baselineAnnualCost - newAnnualCost;
  return {
    annualSavings,
    tenYearSavings: annualSavings * 10,
    monthlySavings: annualSavings / 12,
    dollarSavings10yr: annualSavings * 10 * 1.63,  // Bid sheet multiplier
  };
}

/**
 * Full operating cost analysis for one equipment option.
 */
export function calculateOperatingAnalysis(btuGain, btuLoss, furnace, ac, existingAFUE = 70) {
  const gasPrice = PC.GAS_PRICE;
  const elecRate = PC.ELECTRICITY_RATE;
  const hours = PC.OPERATING_HOURS;

  const isSingleStage = furnace
    ? (furnace.name?.includes('Single Stage') ||
       furnace.name?.includes('1-Stage') ||
       furnace.name?.includes('1 - Stage'))
    : true;

  // New system costs
  const heatingCost = furnace?.afue
    ? calculateAnnualHeatingCost(btuLoss, furnace.afue, gasPrice, hours)
    : 0;

  const coolingCost = ac?.seer
    ? calculateAnnualCoolingCost(btuGain, ac.seer, isSingleStage, elecRate)
    : 0;

  // Existing/baseline system costs
  const existingHeatingCost = calculateAnnualHeatingCost(btuLoss, existingAFUE, gasPrice, hours);

  // Savings
  const heatingSavings = calculateSavings(existingHeatingCost, heatingCost);

  return {
    heatingCost,
    coolingCost,
    totalAnnualCost: heatingCost + coolingCost,
    existingHeatingCost,
    heatingSavings,
  };
}

// ─── Materials Totals ───────────────────────────────────────

/**
 * Calculate total material cost from a materials state.
 */
export function calculateMaterialsTotal(materialsState, furnaceType) {
  let furnaceTotal = 0;
  for (const item of materialsState.furnaceMaterials) {
    if (item.qty > 0) furnaceTotal += item.qty * item.unitPrice;
  }

  let acTotal = 0;
  for (const item of (materialsState.acMaterials || [])) {
    if (item.qty > 0) acTotal += item.qty * item.unitPrice;
  }

  let generalTotal = 0;
  for (const item of (materialsState.generalMaterials || [])) {
    if (item.qty > 0) generalTotal += item.qty * item.unitPrice;
  }

  // Duct calculator — computed sqft × per-sqft price (added to general)
  let ductTotal = 0;
  const ductDetails = [];
  if (materialsState.ductRuns) {
    for (const dtype of DUCT_MATERIAL_TYPES) {
      const runs = materialsState.ductRuns[dtype.key] || [];
      const { totalSqft } = calculateDuctTypeSqft(runs, materialsState.ductWasteFactor || 0);
      const cost = totalSqft * dtype.pricePerSqft;
      ductTotal += cost;
      ductDetails.push({ key: dtype.key, name: dtype.name, sqft: totalSqft, cost });
    }
  }
  generalTotal += ductTotal;

  // Labor hours
  let laborHours80 = 0;
  let laborHours90 = 0;
  for (const cat of materialsState.labor) {
    laborHours80 += cat.hours80 || 0;
    laborHours90 += cat.name === 'Equipment' ? (cat.hours90 || 0) : (cat.hours80 || 0);
  }
  const laborHours = furnaceType === '90' ? laborHours90 : laborHours80;
  const furnaceLaborTotal = laborHours * materialsState.laborRate;

  const acLaborTotal = (materialsState.acLaborHours || 0) * materialsState.laborRate;
  const generalLaborTotal = (materialsState.generalLaborHours || 0) * materialsState.laborRate;

  return {
    furnaceMaterialsTotal: furnaceTotal,
    acMaterialsTotal: acTotal,
    generalMaterialsTotal: generalTotal,
    ductTotal,
    ductDetails,
    furnaceLaborTotal,
    acLaborTotal,
    generalLaborTotal,
    totalMaterials: furnaceTotal + acTotal + generalTotal,
    totalLabor: furnaceLaborTotal + acLaborTotal + generalLaborTotal,
  };
}
