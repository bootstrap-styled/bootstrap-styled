import { rmUnit } from '../mixins/unit';

export function assertAscending(map, mapName) {
  let prevKey;
  let prevNum;
  let asserted = true;
  Object.keys(map).forEach((key) => {
    const num = map[key];
    if (prevNum == null) {
      // do nothing
    } else if (!comparable(rmUnit(prevNum), rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn(`Potentially invalid value for ${mapName}: This map must be in ascending order, but key '${key}' has value ${num} whose unit makes it incomparable to ${prevNum}, the value of the previous key '${prevKey}' !`); // eslint-disable-line no-console
      }
      asserted = false;
    } else if (rmUnit(prevNum) >= rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn(`Invalid value for ${mapName}: This map must be in ascending order, but key '${key}' has value ${num} which isn't greater than ${prevNum}, the value of the previous key '${prevKey}' !`); // eslint-disable-line no-console
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}

export function assertStartAtZero(map) {
  const values = Object.values(map);
  const firstValue = rmUnit(values[0]);
  let asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn(`First breakpoint in $grid-breakpoints must start at 0, but starts at ${firstValue}.`); // eslint-disable-line no-console
    }
    asserted = false;
  }
  return asserted;
}

export function comparable(a, b) {
  return !isNaN(a + b);
}

export default {
  assertAscending,
  assertStartAtZero,
  comparable,
};
