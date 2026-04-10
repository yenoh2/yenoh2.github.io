/**
 * HVAC Load Calculation Constants
 * All multiplier values sourced from the Settings sheet of the original spreadsheet.
 * Two temperature modes: '75' (75°F winter differential) and '90' (90°F winter differential)
 */

// ═══════════════════════════════════════════════════════════════
// COOLING CONSTANTS
// ═══════════════════════════════════════════════════════════════

/** Window solar gain multipliers by glass type and compass direction */
export const COOLING_WINDOW_DIRECTION = {
  single: { N: 27, 'NE/NW': 42, 'E/W': 61, 'SE/SW': 49, S: 35 },
  double: { N: 19, 'NE/NW': 32, 'E/W': 49, 'SE/SW': 42, S: 27 },
};

/** Direction index mapping (LGdata direction values → key) */
export const DIRECTION_MAP = {
  1: 'N',
  2: 'NE/NW',
  3: 'E/W',
  4: 'SE/SW',
  5: 'S',
};

/** Door cooling multiplier by door type */
export const COOLING_DOOR = {
  hollow: 13.2,
  solid: 10.9,
};

/** Warm ceiling multipliers by ceiling type and insulation level */
export const WARM_CEILING = {
  attic:   { none: 19.2, 'R-11': 3.7, 'R-19': 2.3, 'R-26': 1.7 },
  vaulted: { none: 12.6, 'R-11': 3.2, 'R-19': 2.2, 'R-26': 1.8 },
};

/** Warm floor multiplier by floor insulation */
export const WARM_FLOOR = {
  none: 4.8,
  'R-11': 1.2,
  'R-19': 0.8,
};

/** Net wall cooling multiplier by wall insulation */
export const NET_WALL_COOLING = {
  none: 6.4,
  'R-5': 4.2,
  'R-11': 1.9,
  'R-13': 1.5,
};

/** Infiltration gain/warming constant (BTU per sq ft of exposed wall) */
export const INFILTRATION_COOLING_RATE = 1.8;

/** Internal heat gains */
export const INTERNAL_GAINS = {
  applianceBTU: 1200,
  personBTU: 350,
};

/** Total sensible multiplier by duct configuration */
export const TOTAL_SENSIBLE_MULTIPLIER = {
  ductLoss: 1.58,
  noDuctLoss: 1.38,
  off: 0,
  boost: 1.78,
};

// ═══════════════════════════════════════════════════════════════
// HEATING CONSTANTS
// ═══════════════════════════════════════════════════════════════

/** Window heating loss multiplier by glass type and temperature mode */
export const HEATING_WINDOW = {
  single: { 75: 78.4, 90: 94.1 },
  double: { 75: 45.7, 90: 54.8 },
};

/** Door heating loss multiplier by door type and temperature mode */
export const HEATING_DOOR = {
  hollow: { 75: 42.0, 90: 50.4 },
  solid:  { 75: 34.5, 90: 41.4 },
};

/** Net wall heating multiplier by wall insulation and temperature mode */
export const NET_WALL_HEATING = {
  none:   { 75: 20.3, 90: 24.4 },
  'R-5':  { 75: 13.5, 90: 15.8 },
  'R-11': { 75: 6.7,  90: 8.1 },
  'R-13': { 75: 4.9,  90: 5.9 },
};

/** Basement wall multiplier by insulation and temperature mode */
export const BASEMENT_WALL = {
  none:   { 75: 9.4,  90: 11.2 },
  'R-11': { 75: 3.8,  90: 4.6 },
};

/** Cold ceiling-attic multiplier by insulation and temperature mode */
export const COLD_CEILING_ATTIC = {
  none:   { 75: 44.9, 90: 53.9 },
  'R-11': { 75: 6.6,  90: 7.9 },
  'R-19': { 75: 4.0,  90: 4.8 },
  'R-26': { 75: 2.8,  90: 3.4 },
};

/** Cold vaulted ceiling multiplier by insulation and temperature mode */
export const COLD_CEILING_VAULTED = {
  none:   { 75: 23.1, 90: 27.7 },
  'R-11': { 75: 5.4,  90: 6.5 },
  'R-19': { 75: 3.7,  90: 4.4 },
  'R-26': { 75: 3.0,  90: 3.6 },
};

/** Cold floor multiplier by floor insulation and temperature mode */
export const COLD_FLOOR = {
  none:   { 75: 16.3, 90: 19.6 },
  'R-11': { 75: 5.3,  90: 6.4 },
  'R-19': { 75: 3.6,  90: 4.3 },
};

/** Basement floor heat loss (flat value by temp mode) */
export const BASEMENT_FLOOR = { 75: 4.5, 90: 5.4 };

/** Infiltration heating multipliers by type and temperature mode */
export const INFILTRATION_HEATING = {
  fixedWindow:   { 75: 19,  90: 22.8 },
  slidingWindow: { 75: 45,  90: 54 },
  door:          { 75: 75,  90: 90 },
};

// ═══════════════════════════════════════════════════════════════
// AIRFLOW CONSTANTS
// ═══════════════════════════════════════════════════════════════

export const CFM_DIVISOR_BASE = 1000;
export const REGISTER_CFM_COOLING = 125;
export const REGISTER_CFM_HEATING = 110;

// ═══════════════════════════════════════════════════════════════
// ROOM TYPE BEHAVIOR FLAGS
// ═══════════════════════════════════════════════════════════════

/**
 * Room type determines which components are active.
 * Values: 'basement', 'main', 'mainWith2ndFloor', 'upper'
 * 
 * Cooling side:
 *   - warmCeiling: active for main, upper (rooms exposed to attic above)
 *   - warmFloor: uses user-entered floor %, OR for basement rooms it's always active with a flat flag
 *   - netWallCooling: active for main, mainWith2ndFloor, upper
 *   - infiltrationCooling: active for main, mainWith2ndFloor, upper
 *
 * Heating side:
 *   - coldCeiling: active for main, upper (not mainWith2ndFloor or basement)
 *   - coldFloor: active based on floor% or basement flag
 *   - useBasementWallMultiplier: true for basement rooms
 */
export const ROOM_TYPE_FLAGS = {
  basement: {
    coolingCeiling: false,  // ceiling above is the main floor, not attic
    coolingWall: false,     // basement walls below grade — no solar gain
    coolingInfiltration: false,
    heatingCeiling: false,
    heatingColdFloor: true, // basement on slab/ground
    heatingUseBasementWall: true,
  },
  main: {
    coolingCeiling: true,
    coolingWall: true,
    coolingInfiltration: true,
    heatingCeiling: true,
    heatingColdFloor: false, // uses warmFloor% input
    heatingUseBasementWall: false,
  },
  mainWith2ndFloor: {
    coolingCeiling: false,  // 2nd floor above, no attic exposure
    coolingWall: true,
    coolingInfiltration: true,
    heatingCeiling: false,
    heatingColdFloor: false,
    heatingUseBasementWall: false,
  },
  upper: {
    coolingCeiling: true,
    coolingWall: true,
    coolingInfiltration: true,
    heatingCeiling: true,
    heatingColdFloor: false,
    heatingUseBasementWall: false,
  },
};

// ═══════════════════════════════════════════════════════════════
// ROOM NAME OPTIONS
// ═══════════════════════════════════════════════════════════════

export const ROOM_NAMES = [
  'Entry',
  'Living Room',
  'Kitchen',
  'Dining Room',
  'Family Room',
  'Laundry Room',
  'Laundry / Bath Room',
  'Master Bedroom',
  'Master Bathroom',
  'Office',
  'Hall Bathroom',
  'Bedroom 1',
  'Bedroom 2',
  'Bedroom 3',
  'Basement',
];

/** Vaulted ceiling adds 15% to floor area for ceiling calculation */
export const VAULTED_CEILING_AREA_FACTOR = 1.15;

/** Default ceiling height */
export const DEFAULT_CEILING_HEIGHT = 8;

/** Maximum number of rooms */
export const MAX_ROOMS = 19;

/** Maximum windows per room */
export const MAX_WINDOWS_PER_ROOM = 4;
