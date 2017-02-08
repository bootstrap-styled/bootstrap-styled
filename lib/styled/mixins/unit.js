/**
 * Unit
 * @type {{EM: string, REM: string, PX: string, PERCENT: string}}
 */
export var UNIT = {
  EM: 'em',
  REM: 'rem',
  PX: 'px',
  PERCENT: '%'
};

/**
 * Math operations accepting units value and return
 * @type {{addition: math.addition, substract: math.substract, multiply: math.multiply, divide: math.divide}}
 */
export var math = {
  addition: function addition(a, b) {
    var unit = detectUnit(a) || detectUnit(b);
    return rmUnit(a) + rmUnit(b) + unit;
  },
  substract: function substract(a, b) {
    var unit = detectUnit(a) || detectUnit(b);
    return rmUnit(a) - rmUnit(b) + unit;
  },
  multiply: function multiply(a, b) {
    var unit = detectUnit(a) || detectUnit(b);
    return rmUnit(a) * rmUnit(b) + unit;
  },
  divide: function divide(a, b) {
    var unit = detectUnit(a) || detectUnit(b);
    return rmUnit(a) / rmUnit(b) + unit;
  }
};

/**
 * detectUnit :
 * return the unit from a string by priority : px/rem/em/percent
 * @param value
 * @throw {Error} if unit can't be detected
 * @returns {*}
 */
export function detectUnit(value) {
  var ext = void 0;
  var valueStr = value.toString();
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
    throw new Error('detectUnit can\'t find unit for ' + value);
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
  var valueStr = value.toString();
  var ext = unit || detectUnit(valueStr);
  var number = valueStr.replace(ext, '');
  return parseFloat(number);
}

/**
 * toPercent
 * @param value
 * @param total (default: 100)
 * @param decimal (default: 2)
 * @returns {string} percentage value
 */
export function toPercent(value) {
  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + UNIT.PERCENT; // eslint-disable-line no-mixed-operators
}

export default {
  UNIT: UNIT,
  math: math,
  detectUnit: detectUnit,
  rmUnit: rmUnit,
  toPercent: toPercent
};