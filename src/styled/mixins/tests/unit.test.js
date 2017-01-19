import { math, rmUnit, toPercent, detectUnit, UNIT } from '../unit';

describe('kopax unit mixins', () => {
  it('UNIT.PX should be equal to "px"', () => {
    expect(UNIT.PX).toEqual('px');
  });
  it('UNIT.EM should be equal to "em"', () => {
    expect(UNIT.EM).toEqual('em');
  });
  it('UNIT.REM should be equal to "rem"', () => {
    expect(UNIT.REM).toEqual('rem');
  });
  it('rmUnit should return a value without it\'s px unit', () => {
    const value = rmUnit('12px', UNIT.PX);
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s em unit', () => {
    const value = rmUnit('0.1em', UNIT.EM);
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s rem unit', () => {
    const value = rmUnit('0.7rem', UNIT.REM);
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected px unit', () => {
    const value = rmUnit('12px');
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s auto detected em unit', () => {
    const value = rmUnit('0.1em');
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s auto detected rem unit', () => {
    const value = rmUnit('0.7rem');
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected percent unit', () => {
    const value = rmUnit('10%');
    expect(value).toEqual(10);
  });
  it('detectUnit should return a px unit', () => {
    const value = detectUnit('12px');
    expect(value).toEqual(UNIT.PX);
  });
  it('detectUnit should return a em unit', () => {
    const value = detectUnit('0.7em');
    expect(value).toEqual(UNIT.EM);
  });
  it('detectUnit should return a rem unit', () => {
    const value = detectUnit('1rem');
    expect(value).toEqual(UNIT.REM);
  });
  it('detectUnit should return a percent unit', () => {
    const value = detectUnit('10%');
    expect(value).toEqual(UNIT.PERCENT);
  });
  it('toPercent should render a percentage', () => {
    const value = 5;
    const total = 20;
    const decimal = 3;
    expect(toPercent(value, total, decimal)).toEqual('25%');
  });
  it('math should addition units', () => {
    const value = math.addition('10%', '15%');
    expect(value).toEqual('25%');
  });
  it('math should substract units', () => {
    const value = math.substract('17px', '18px');
    expect(value).toEqual('-1px');
  });
  it('math should multiply units', () => {
    const value = math.multiply('15rem', '2');
    expect(value).toEqual('30rem');
  });
  it('math should divide units', () => {
    const value = math.divide('0.1em', -2);
    expect(value).toEqual('-0.05em');
  });
  it('should throw error if wrong arguments are passed', () => {
    expect(function test() {        // eslint-disable-line  prefer-arrow-callback
      detectUnit('test-function');
    }).toThrowError("detectUnit can't find unit for test-function");
  });
});
