import {
  allowFalseValue,
  assertAscending,
  comparable,
  assertStartAtZero,
  negativifyMap,
} from '../utils';

describe('utils', () => {
  it('allowFalseValue should return false', () => {
    expect(allowFalseValue(false, true)).toBe(false);
  });
  it('allowFalseValue should return true', () => {
    expect(allowFalseValue(true, true)).toBe(true);
  });
  it('assertAscending true', () => {
    const asserted = assertAscending({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    });
    expect(asserted).toEqual(true);
  });
  it('assertAscending false', () => {
    const asserted = assertAscending({
      xs: '0',
      sm: '768px',
      md: '576px',
      lg: '992px',
      xl: '1200px',
    });
    expect(asserted).toEqual(false);
  });
  it('comparable true', () => {
    const res = comparable(1, 1);
    expect(res).toEqual(true);
  });
  it('comparable false', () => {
    const res = comparable(1, 'a');
    expect(res).toEqual(false);
  });
  it('assertStartAtZero true', () => {
    const res = assertStartAtZero({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    });
    expect(res).toEqual(true);
  });
  it('assertStartAtZero false', () => {
    const res = assertStartAtZero({
      sm: '576px',
      xs: '0',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    });
    expect(res).toEqual(false);
  });
  it('negativifyMap should return object', () => {
    const spacers = {
      0: 0,
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '3rem',
    };
    const res = negativifyMap(spacers);
    expect(res).toEqual({
      n1: '-0.25rem',
      n2: '-0.5rem',
      n3: '-1rem',
      n4: '-1.5rem',
      n5: '-3rem',
    });
  });

  it('negativifyMap should return map', () => {
    const spacers = new Map([
      [0, 0],
      [1, '0.25rem'],
      [2, '0.5rem'],
      [3, '1rem'],
      [4, '1.5rem'],
      [5, '3rem'],
    ]);
    const res = negativifyMap(spacers);
    expect(res).toEqual(new Map([
      ['n1', '-0.25rem'],
      ['n2', '-0.5rem'],
      ['n3', '-1rem'],
      ['n4', '-1.5rem'],
      ['n5', '-3rem'],
    ]));
  });
});
