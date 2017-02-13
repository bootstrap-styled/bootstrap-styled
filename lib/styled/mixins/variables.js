import { unitUtils } from 'math-utils';

export function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
      // do nothing
    } else if (!comparable(unitUtils.rmUnit(prevNum), unitUtils.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !'); // eslint-disable-line no-console
      }
      asserted = false;
    } else if (unitUtils.rmUnit(prevNum) >= unitUtils.rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !'); // eslint-disable-line no-console
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}

export function assertStartAtZero(map) {
  var values = Object.values(map);
  var firstValue = unitUtils.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.'); // eslint-disable-line no-console
    }
    asserted = false;
  }
  return asserted;
}

export function comparable(a, b) {
  return !isNaN(a + b);
}

export default {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};