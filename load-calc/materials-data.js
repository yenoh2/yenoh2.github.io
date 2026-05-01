/**
 * Materials & Labor — Bill of Materials Template
 * Replicates the Ma sheet's line-item material takeoff structure.
 * Each category has items with default unit prices.
 * Users enter quantities per job; totals auto-calculate.
 */

// ═══════════════════════════════════════════════════════════════
// FURNACE MATERIALS (Ma sheet, columns A-D)
// ═══════════════════════════════════════════════════════════════

export const FURNACE_MATERIALS = [
  // Venting - Aluminum
  { id: 'fm1',  name: 'Handy Box & SSU Switch', unitPrice: 12.21, unit: 'ea' },
  { id: 'fm2',  name: 'CO Detector',            unitPrice: 34.85, unit: 'ea' },
  { id: 'fm3',  name: '4" Alum Pipe',       unitPrice: 1.94,  unit: 'ft' },
  { id: 'fm4',  name: '4" Alum 90',         unitPrice: 2.49,  unit: 'ea' },
  // Electrical
  { id: 'fm5',  name: 'Wire 12/2 WG',       unitPrice: 0.56,  unit: 'ft' },
  // Amerivent
  { id: 'fm6',  name: '3EC',                unitPrice: 4.69,  unit: 'ea' },
  { id: 'fm7',  name: '4EF',                unitPrice: 6.10,  unit: 'ea' },
  { id: 'fm8',  name: '4E5',                unitPrice: 17.61, unit: 'ea' },
  { id: 'fm9',  name: '4EC',                unitPrice: 9.15,  unit: 'ea' },
  { id: 'fm10', name: '4EAL',               unitPrice: 12.81, unit: 'ea' },
  { id: 'fm11', name: '5EC',                unitPrice: 12.22, unit: 'ea' },
  { id: 'fm12', name: '5EAL',               unitPrice: 18.01, unit: 'ea' },
  { id: 'fm13', name: '5E5',                unitPrice: 20.33, unit: 'ea' },
  { id: 'fm14', name: '5EF',                unitPrice: 9.68,  unit: 'ea' },
  { id: 'fm15', name: '6EC',                unitPrice: 15.84, unit: 'ea' },
  { id: 'fm16', name: '6EAL',               unitPrice: 23.68, unit: 'ea' },
  { id: 'fm17', name: '6E5',                unitPrice: 26.68, unit: 'ea' },
  { id: 'fm18', name: '6EF',                unitPrice: 13.60, unit: 'ea' },
  // PVC Venting
  { id: 'fm19', name: '2" PVC Pipe',        unitPrice: 1.05,  unit: 'ft' },
  { id: 'fm20', name: '2" PVC Fittings',    unitPrice: 2.26,  unit: 'ea' },
  { id: 'fm21', name: '2" Term Kit',        unitPrice: 35.00, unit: 'ea' },
  { id: 'fm22', name: '2 1/8" Insultube',   unitPrice: 0.46,  unit: 'ft' },
  { id: 'fm23', name: '3" PVC Pipe',        unitPrice: 1.99,  unit: 'ft' },
  { id: 'fm24', name: '3" PVC Fittings',    unitPrice: 5.20,  unit: 'ea' },
  { id: 'fm25', name: '3" Term Kit',        unitPrice: 40.00, unit: 'ea' },
  { id: 'fm26', name: '3 1/8" Insultube',   unitPrice: 0.67,  unit: 'ft' },
  // Gas Piping
  { id: 'fm27', name: '1/2" Black Pipe',    unitPrice: 0.83,  unit: 'ft' },
  { id: 'fm28', name: '1/2" Fittings',      unitPrice: 0.67,  unit: 'ea' },
  { id: 'fm29', name: '3/4" Black Pipe',    unitPrice: 1.36,  unit: 'ft' },
  { id: 'fm30', name: '3/4" Fittings',      unitPrice: 0.77,  unit: 'ea' },
  { id: 'fm31', name: '1" Black Pipe',      unitPrice: 1.50,  unit: 'ft' },
  { id: 'fm32', name: '1" Fittings',        unitPrice: 1.51,  unit: 'ea' },
  { id: 'fm33', name: '1 1/4" Black Pipe',  unitPrice: 2.50,  unit: 'ft' },
  { id: 'fm34', name: '1 1/4" Fittings',    unitPrice: 1.89,  unit: 'ea' },
];

// ═══════════════════════════════════════════════════════════════
// A/C MATERIALS (Ma sheet rows 7-14, columns E-H)
// These are A/C-specific items used in AC pricing
// ═══════════════════════════════════════════════════════════════

export const AC_MATERIALS = [
  { id: 'am1',  name: 'Disconnect',           unitPrice: 34.85, unit: 'ea' },
  { id: 'am2',  name: 'Condenser Pad',        unitPrice: 35.00, unit: 'ea' },
  { id: 'am3',  name: 'Misc. Materials',      unitPrice: 1.00,  unit: 'ea' },
  { id: 'am4',  name: '3/4" Lineset',         unitPrice: 146.00, unit: 'set' },
  { id: 'am5',  name: '7/8" Lineset',         unitPrice: 182.00, unit: 'set' },
  { id: 'am6',  name: '1 1/8" Lineset',       unitPrice: 245.00, unit: 'set' },
  { id: 'am7',  name: 'Wire',                 unitPrice: 0.88,  unit: 'ft' },
  { id: 'am8',  name: 'A/C Cover & Shipping', unitPrice: 40.00, unit: 'ea' },
];

// ═══════════════════════════════════════════════════════════════
// GENERAL MATERIALS (Ma sheet rows 21-48, columns E-H)
// Thermostats, ductwork, registers, water heater, etc.
// ═══════════════════════════════════════════════════════════════

export const GENERAL_MATERIALS = [
  // Thermostat
  { id: 'gm1',  name: 'Two Stage Prog. Stat', unitPrice: 55.00, unit: 'ea' },
  { id: 'gm2',  name: 'Touch Screen Stat',    unitPrice: 120.00, unit: 'ea' },
  { id: 'gm3',  name: 'Condensate Pump',      unitPrice: 38.00, unit: 'ea' },
  // Ductwork
  { id: 'gm4',  name: 'Ductboard',            unitPrice: 27.16, unit: 'sheet' },
  { id: 'gm5',  name: 'Sheet Metal 28GA 3x8', unitPrice: 17.00, unit: 'sheet' },
  { id: 'gm6',  name: 'Sheet Metal 26GA 4x10', unitPrice: 36.00, unit: 'sheet' },
  { id: 'gm7',  name: '3/4" PVC Pipe',        unitPrice: 0.37,  unit: 'ft' },
  { id: 'gm8',  name: '3/4" PVC Fittings',    unitPrice: 0.15,  unit: 'ea' },
  { id: 'gm9',  name: '6" Galv Pipe',         unitPrice: 0.79,  unit: 'ft' },
  { id: 'gm10', name: '6" Galv 90',           unitPrice: 1.15,  unit: 'ea' },
  { id: 'gm11', name: '6" Insulated Flex',    unitPrice: 1.06,  unit: 'ft' },
  { id: 'gm12', name: '6" Spin-in 90',        unitPrice: 5.73,  unit: 'ea' },
  { id: 'gm13', name: 'R-8 Duct Insulation',  unitPrice: 2.42,  unit: 'ft' },
  { id: 'gm14', name: '7" Galv Pipe',         unitPrice: 1.33,  unit: 'ft' },
  { id: 'gm15', name: '7" Galv 90',           unitPrice: 1.59,  unit: 'ea' },
  { id: 'gm16', name: 'Boots',                unitPrice: 2.40,  unit: 'ea' },
  // Registers
  { id: 'gm17', name: 'Floor Registers',      unitPrice: 2.50,  unit: 'ea' },
  { id: 'gm18', name: 'Ceiling Registers',    unitPrice: 3.99,  unit: 'ea' },
  { id: 'gm19', name: '8x14 Base Return',     unitPrice: 5.79,  unit: 'ea' },
  { id: 'gm20', name: '8x24 Base Return',     unitPrice: 8.02,  unit: 'ea' },
  { id: 'gm21', name: '8x30 Base Return',     unitPrice: 6.04,  unit: 'ea' },
  // Water Heater
  { id: 'gm22', name: 'WH Copper Pipe',       unitPrice: 3.45,  unit: 'ft' },
  { id: 'gm23', name: 'WH Copper Fittings',   unitPrice: 2.50,  unit: 'ea' },
  { id: 'gm24', name: 'Stat Wire',            unitPrice: 0.30,  unit: 'ft' },
];

// ═══════════════════════════════════════════════════════════════
// LABOR TEMPLATE
// ═══════════════════════════════════════════════════════════════

export const LABOR_CATEGORIES = [
  { id: 'lab1', name: 'Rough-in',   defaultHours80: 0, defaultHours90: 0 },
  { id: 'lab2', name: 'Gas Piping', defaultHours80: 0, defaultHours90: 0 },
  { id: 'lab3', name: 'Equipment',  defaultHours80: 0, defaultHours90: 0 },
  { id: 'lab4', name: 'Final',      defaultHours80: 0, defaultHours90: 0 },
  { id: 'lab5', name: 'Travel',     defaultHours80: 0, defaultHours90: 0 },
];

export const AC_LABOR_HOURS = 0; // Default A/C labor hours - user enters per job
export const AC_LABOR_RATE = 50; // $/hour for A/C labor

// ═══════════════════════════════════════════════════════════════
// DUCT CALCULATOR — computed materials (Duct sheet → Ma rows 46-48)
// Per-sqft prices for duct material calculated from the Duct sheet
// ═══════════════════════════════════════════════════════════════

export const DUCT_MATERIAL_TYPES = [
  { key: 'sheetMetal28', name: 'Sheet Metal 28GA 3×8', pricePerSqft: 0.45 },
  { key: 'sheetMetal26', name: 'Sheet Metal 26GA 4×10', pricePerSqft: 0.55 },
  { key: 'ductboard',   name: 'Ductboard',              pricePerSqft: 0.52 },
];

export const DEFAULT_DUCT_WASTE_FACTOR = 0.30;
export const DEFAULT_DUCT_ROWS = 5;
export const MAX_DUCT_ROWS = 15;

/**
 * Calculate surface area for a single duct run (sqft).
 * Formula: Length × (2×W/12 + 2×H/12)
 * W and H are in inches, Length in feet.
 */
export function calculateDuctRunSqft(length, width, height) {
  if (!length || (!width && !height)) return 0;
  return length * (2 * (width || 0) / 12 + 2 * (height || 0) / 12);
}

/**
 * Calculate total sqft for an array of duct runs, including waste factor.
 * Returns { rawSqft, totalSqft } where totalSqft = rawSqft × (1 + waste).
 */
export function calculateDuctTypeSqft(runs, wasteFactor) {
  let rawSqft = 0;
  for (const run of (runs || [])) {
    rawSqft += calculateDuctRunSqft(run.length || 0, run.width || 0, run.height || 0);
  }
  const totalSqft = rawSqft * (1 + (wasteFactor || 0));
  return { rawSqft, totalSqft };
}

/**
 * Create a fresh duct run row.
 */
export function createDuctRun() {
  return { length: 0, width: 0, height: 0 };
}

/**
 * Create a fresh materials state object for a new bid.
 * Each item gets qty = 0, preserving the template structure.
 */
export function createMaterialsState() {
  return {
    furnaceMaterials: FURNACE_MATERIALS.map(item => ({
      ...item,
      qty: 0,
    })),
    acMaterials: AC_MATERIALS.map(item => ({
      ...item,
      qty: 0,
    })),
    generalMaterials: GENERAL_MATERIALS.map(item => ({
      ...item,
      qty: 0,
    })),
    labor: LABOR_CATEGORIES.map(cat => ({
      ...cat,
      hours80: cat.defaultHours80,
      hours90: cat.defaultHours90,
    })),
    acLaborHours: 0,
    generalLaborHours: 0,
    laborRate: 50,
    // Duct calculator state
    ductRuns: {
      sheetMetal28: Array.from({ length: DEFAULT_DUCT_ROWS }, createDuctRun),
      sheetMetal26: Array.from({ length: DEFAULT_DUCT_ROWS }, createDuctRun),
      ductboard:   Array.from({ length: DEFAULT_DUCT_ROWS }, createDuctRun),
    },
    ductWasteFactor: DEFAULT_DUCT_WASTE_FACTOR,
  };
}
