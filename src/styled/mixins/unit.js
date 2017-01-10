/**
 * Unit
 * @type {{EM: string, REM: string, PX: string, PERCENT: string}}
 */
export const UNIT = {
  EM: 'em',
  REM: 'rem',
  PX: 'px',
  PERCENT: '%',
};

/**
 * Math operations accepting units value and return
 * @type {{addition: math.addition, substract: math.substract, multiply: math.multiply, divide: math.divide}}
 */
export const math = {
  addition(a, b) {
    const unit = detectUnit(a) || detectUnit(b);
    return (rmUnit(a) + rmUnit(b)) + unit;
  },
  substract(a, b) {
    const unit = detectUnit(a) || detectUnit(b);
    return (rmUnit(a) - rmUnit(b)) + unit;
  },
  multiply(a, b) {
    const unit = detectUnit(a) || detectUnit(b);
    return (rmUnit(a) * rmUnit(b)) + unit;
  },
  divide(a, b) {
    const unit = detectUnit(a) || detectUnit(b);
    return (rmUnit(a) / rmUnit(b)) + unit;
  },
};

/**
 * detectUnit :
 * return the unit from a string by priority : px/rem/em/percent
 * @param value
 * @throw {Error} if unit can't be detected
 * @returns {*}
 */
export function detectUnit(value) {
  let ext;
  const valueStr = value.toString();
  if (valueStr.match(UNIT.PX)) {
    ext = UNIT.PX;
  } else if (valueStr.match(UNIT.REM)) {
    ext = UNIT.REM;
  } else if (valueStr.match(UNIT.EM)) {
    ext = UNIT.EM;
  } else if (valueStr.match(UNIT.PERCENT)) {
    ext = UNIT.PERCENT;
  } else if (!isNaN(value)) {
    return null;
  } else {
    throw new Error(`detectUnit can't find unit for ${value}`);
  }
  return ext;
}

/**
 * rmUnit :
 * Convert a value string to float
 * If unit is undefined, it will try to guess it's value using {detectUnit}
 *
 * @param value
 * @param unit
 * @returns {Number} without it's unit
 */
export function rmUnit(value, unit) {
  const valueStr = value.toString();
  const ext = unit || detectUnit(valueStr);
  const number = valueStr.replace(ext, '');
  return parseFloat(number);
}

/**
 * toPercent
 * @param value
 * @param total (default: 100)
 * @param decimal (default: 2)
 * @returns {string} percentage value
 */
export function toPercent(value, total = 100, decimal = 2) {
  return `${Math.floor((value / total * 100) * (10 ** decimal)) / (10 ** decimal)}${UNIT.PERCENT}`; // eslint-disable-line no-mixed-operators
}

export default {
  UNIT,
  math,
  detectUnit,
  rmUnit,
  toPercent,
};
