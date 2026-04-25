/**
 * HVAC Load Calculation Engine
 * Pure-function formulas that replicate the LOSSGAIN spreadsheet logic.
 * All functions take plain data objects and return numeric BTU values.
 */

import * as C from './constants.js';

// ─── Cooling Calculations ───────────────────────────────────

/**
 * Calculate window solar heat gain for one window entry.
 * Formula: qty × width × height × directionMultiplier
 */
export function calcWindowGain(qty, width, height, direction, windowType) {
  if (!qty || !width || !height) return 0;
  const mult = C.COOLING_WINDOW_DIRECTION[windowType]?.[direction] || 0;
  return qty * width * height * mult;
}

/**
 * Calculate door cooling gain.
 * Formula: qty × width × height × doorMultiplier
 */
export function calcDoorGain(qty, width, height, doorType) {
  if (!qty || !width || !height) return 0;
  const mult = C.COOLING_DOOR[doorType] || 0;
  return qty * width * height * mult;
}

/**
 * Calculate warm ceiling gain.
 * Formula: area × multiplier × applicableFlag
 * Area = L × W × 1.15 if vaulted
 */
export function calcWarmCeiling(length, width, ceilingType, ceilingInsulation, roomType) {
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags || !flags.coolingCeiling) return 0;
  let area = length * width;
  if (ceilingType === 'vaulted') area *= C.VAULTED_CEILING_AREA_FACTOR;
  const mult = C.WARM_CEILING[ceilingType]?.[ceilingInsulation] || 0;
  return area * mult;
}

/**
 * Calculate warm floor gain.
 * Formula: L × W × floorPct × multiplier
 */
export function calcWarmFloor(length, width, floorPct, floorInsulation) {
  if (!floorPct) return 0;
  const area = length * width;
  const mult = C.WARM_FLOOR[floorInsulation] || 0;
  return area * floorPct * mult;
}

/**
 * Calculate net exposed wall cooling gain.
 * Formula: (exposedWallArea - windowDoorArea) × multiplier × applicableFlag
 */
export function calcNetWallCooling(exposedWallArea, windowDoorArea, wallInsulation, roomType) {
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags || !flags.coolingWall) return 0;
  const netArea = Math.max(0, exposedWallArea - windowDoorArea);
  const mult = C.NET_WALL_COOLING[wallInsulation] || 0;
  return netArea * mult;
}

/**
 * Calculate internal gains from appliances and people.
 */
export function calcInternalGains(applianceCount, peopleCount) {
  return (applianceCount || 0) * C.INTERNAL_GAINS.applianceBTU +
         (peopleCount || 0) * C.INTERNAL_GAINS.personBTU;
}

/**
 * Calculate infiltration cooling (warming).
 * Formula: exposedWallArea × rate × applicableFlag
 */
export function calcInfiltrationCooling(exposedWallArea, roomType) {
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags || !flags.coolingInfiltration) return 0;
  return exposedWallArea * C.INFILTRATION_COOLING_RATE;
}

/**
 * Calculate total window+door area for a room (used in net wall calc and heating).
 */
export function calcTotalWindowDoorArea(windows, doors) {
  let area = 0;
  for (const w of windows) {
    if (w.qty && w.width && w.height) {
      area += w.qty * w.width * w.height;
    }
  }
  if (doors.qty && doors.width && doors.height) {
    area += doors.qty * doors.width * doors.height;
  }
  return area;
}

/**
 * Calculate total window area only (no doors) for heating window loss.
 */
export function calcTotalWindowArea(windows) {
  let area = 0;
  for (const w of windows) {
    if (w.qty && w.width && w.height) {
      area += w.qty * w.width * w.height;
    }
  }
  return area;
}

/**
 * Full cooling calculation for one room.
 * Returns an object with per-component BTU values and total.
 */
export function calculateRoomCooling(room, config) {
  const { length, width, roomType, ceilingType, ceilingInsulation,
          windows, doors, warmFloorPct, applianceCount, peopleCount,
          exposedWallFt, ceilingHeight, ductConfig } = room;

  const exposedWallArea = (exposedWallFt || 0) * (ceilingHeight || C.DEFAULT_CEILING_HEIGHT);
  const windowDoorArea = calcTotalWindowDoorArea(windows, doors);

  // Window gain by direction
  let windowGain = 0;
  for (const w of windows) {
    windowGain += calcWindowGain(w.qty, w.width, w.height, w.direction, config.windowType);
  }

  const doorGain = calcDoorGain(doors.qty, doors.width, doors.height, config.doorType);
  const warmCeiling = calcWarmCeiling(length, width, ceilingType, ceilingInsulation, roomType);
  const warmFloor = calcWarmFloor(length, width, warmFloorPct, config.floorInsulation);
  const netWall = calcNetWallCooling(exposedWallArea, windowDoorArea, config.wallInsulation, roomType);
  const internalGains = calcInternalGains(applianceCount, peopleCount);
  const infiltration = calcInfiltrationCooling(exposedWallArea, roomType);

  const subtotal = windowGain + doorGain + warmCeiling + warmFloor + netWall + internalGains + infiltration;
  const totalSensibleMult = C.TOTAL_SENSIBLE_MULTIPLIER[ductConfig] || 0;
  const total = subtotal * totalSensibleMult;

  return {
    windowGain,
    doorGain,
    warmCeiling,
    warmFloor,
    netWall,
    internalGains,
    infiltration,
    subtotal,
    totalSensibleMult,
    total,
  };
}


// ─── Heating Calculations ───────────────────────────────────

/**
 * Calculate window heating loss.
 * Formula: totalWindowArea × multiplier
 */
export function calcWindowLoss(windowArea, windowType, tempMode) {
  const mult = C.HEATING_WINDOW[windowType]?.[tempMode] || 0;
  return windowArea * mult;
}

/**
 * Calculate door heating loss.
 * Formula: doorArea × multiplier
 */
export function calcDoorLoss(doorArea, doorType, tempMode) {
  const mult = C.HEATING_DOOR[doorType]?.[tempMode] || 0;
  return doorArea * mult;
}

/**
 * Calculate net wall heating loss.
 * For basement rooms, uses basement wall multiplier.
 * For other rooms, uses standard wall multiplier.
 */
export function calcNetWallHeating(netWallArea, wallInsulation, basementWallInsulation, tempMode, roomType) {
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags) return 0;

  if (flags.heatingUseBasementWall) {
    const mult = C.BASEMENT_WALL[basementWallInsulation]?.[tempMode] || 0;
    return netWallArea * mult;
  } else {
    const mult = C.NET_WALL_HEATING[wallInsulation]?.[tempMode] || 0;
    return netWallArea * mult;
  }
}

/**
 * Calculate cold ceiling heating loss.
 */
export function calcColdCeiling(length, width, ceilingType, ceilingInsulation, tempMode, roomType) {
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags || !flags.heatingCeiling) return 0;
  let area = length * width;
  if (ceilingType === 'vaulted') area *= C.VAULTED_CEILING_AREA_FACTOR;

  const table = ceilingType === 'vaulted' ? C.COLD_CEILING_VAULTED : C.COLD_CEILING_ATTIC;
  const mult = table[ceilingInsulation]?.[tempMode] || 0;
  return area * mult;
}

/**
 * Calculate cold floor heating loss.
 * For basement rooms: entire floor area × basement floor rate
 * For other rooms: area × warmFloorPct × cold floor multiplier
 *   (warmFloorPct here represents the fraction of floor over unconditioned space)
 */
export function calcColdFloor(length, width, warmFloorPct, floorInsulation, tempMode, roomType) {
  const area = length * width;
  const flags = C.ROOM_TYPE_FLAGS[roomType];
  if (!flags) return 0;

  if (flags.heatingColdFloor) {
    // Basement — entire slab on ground
    const mult = C.BASEMENT_FLOOR[tempMode] || 0;
    return area * mult;
  } else {
    // Normal rooms — by floor % 
    const pct = warmFloorPct || 0;
    if (pct === 0) return 0;
    const mult = C.COLD_FLOOR[floorInsulation]?.[tempMode] || 0;
    return area * pct * mult;
  }
}

/**
 * Calculate window crack length for infiltration heating.
 * The spreadsheet formula:
 *   Fixed style: fixed crack = (W*2 + H*2) * qty
 *   Sliding style: fixed/base crack = (W + H) * qty, sliding crack = (W + 2H) * qty
 */
export function calcWindowCrackLength(windows) {
  let fixed = 0;
  let sliding = 0;
  for (const w of windows) {
    if (!w.qty || !w.width || !w.height) continue;
    if (w.windowStyle === 'fixed') {
      // Fixed: full perimeter crack
      fixed += (w.width * 2 + w.height * 2) * w.qty;
    } else {
      // Sliding windows also carry the base crack length used by LOSSGAIN row 45.
      fixed += (w.width + w.height) * w.qty;
      sliding += (w.width + 2 * w.height) * w.qty;
    }
  }
  return { fixed, sliding };
}

/**
 * Calculate door crack (perimeter) for infiltration heating.
 * Formula: (W×2 + H×2) × qty
 */
export function calcDoorCrack(doors) {
  if (!doors.qty || !doors.width || !doors.height) return 0;
  return (doors.width * 2 + doors.height * 2) * doors.qty;
}

/**
 * Calculate infiltration heating BTU.
 */
export function calcInfiltrationHeating(windows, doors, tempMode) {
  const crack = calcWindowCrackLength(windows);
  const doorCrack = calcDoorCrack(doors);
  const fixedBTU = crack.fixed * (C.INFILTRATION_HEATING.fixedWindow[tempMode] || 0);
  const slidingBTU = crack.sliding * (C.INFILTRATION_HEATING.slidingWindow[tempMode] || 0);
  const doorBTU = doorCrack * (C.INFILTRATION_HEATING.door[tempMode] || 0);
  return fixedBTU + slidingBTU + doorBTU;
}

/**
 * Full heating calculation for one room.
 */
export function calculateRoomHeating(room, config) {
  const { length, width, roomType, ceilingType, ceilingInsulation,
          windows, doors, warmFloorPct, exposedWallFt, ceilingHeight } = room;

  const exposedWallArea = (exposedWallFt || 0) * (ceilingHeight || C.DEFAULT_CEILING_HEIGHT);
  const windowDoorArea = calcTotalWindowDoorArea(windows, doors);
  const windowArea = calcTotalWindowArea(windows);
  const doorArea = (doors.qty && doors.width && doors.height)
    ? doors.qty * doors.width * doors.height : 0;
  const netWallArea = Math.max(0, exposedWallArea - windowDoorArea);

  const windowLoss = calcWindowLoss(windowArea, config.windowType, config.tempMode);
  const doorLoss = calcDoorLoss(doorArea, config.doorType, config.tempMode);
  const netWall = calcNetWallHeating(netWallArea, config.wallInsulation, config.basementWallInsulation, config.tempMode, roomType);
  const coldCeiling = calcColdCeiling(length, width, ceilingType, ceilingInsulation, config.tempMode, roomType);
  const coldFloor = calcColdFloor(length, width, warmFloorPct, config.floorInsulation, config.tempMode, roomType);
  const infiltration = calcInfiltrationHeating(windows, doors, config.tempMode);

  const total = windowLoss + doorLoss + netWall + coldCeiling + coldFloor + infiltration;

  return {
    windowLoss,
    doorLoss,
    netWall,
    coldCeiling,
    coldFloor,
    infiltration,
    total,
  };
}


// ─── Building-Level Totals ──────────────────────────────────

/**
 * Calculate building-level totals from all rooms.
 * Returns per-room CFM, register counts, and building sums.
 */
export function calculateBuildingTotals(rooms, config) {
  const results = rooms.map(room => {
    const cooling = calculateRoomCooling(room, config);
    const heating = calculateRoomHeating(room, config);
    return { room, cooling, heating };
  });

  const totalGain = results.reduce((sum, r) => sum + r.cooling.total, 0);
  const totalLoss = results.reduce((sum, r) => sum + r.heating.total, 0);

  const cfmDivisorCooling = totalGain / C.CFM_DIVISOR_BASE || 1;
  const cfmDivisorHeating = totalLoss / C.CFM_DIVISOR_BASE || 1;

  for (const r of results) {
    r.cfmCooling = r.cooling.total / cfmDivisorCooling;
    r.cfmHeating = r.heating.total / cfmDivisorHeating;
    r.registersCooling = r.cfmCooling / C.REGISTER_CFM_COOLING;
    r.registersHeating = r.cfmHeating / C.REGISTER_CFM_HEATING;
  }

  return {
    rooms: results,
    totalGain,
    totalLoss,
    totalCFMCooling: totalGain / C.CFM_DIVISOR_BASE,
    totalCFMHeating: totalLoss / C.CFM_DIVISOR_BASE,
  };
}
