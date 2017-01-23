import { math, rmUnit, toPercent, detectUnit, UNIT } from '../unit';

describe('kopax unit mixins', function () {
  it('UNIT.PX should be equal to "px"', function () {
    expect(UNIT.PX).toEqual('px');
  });
  it('UNIT.EM should be equal to "em"', function () {
    expect(UNIT.EM).toEqual('em');
  });
  it('UNIT.REM should be equal to "rem"', function () {
    expect(UNIT.REM).toEqual('rem');
  });
  it('rmUnit should return a value without it\'s px unit', function () {
    var value = rmUnit('12px', UNIT.PX);
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s em unit', function () {
    var value = rmUnit('0.1em', UNIT.EM);
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s rem unit', function () {
    var value = rmUnit('0.7rem', UNIT.REM);
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected px unit', function () {
    var value = rmUnit('12px');
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s auto detected em unit', function () {
    var value = rmUnit('0.1em');
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s auto detected rem unit', function () {
    var value = rmUnit('0.7rem');
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected percent unit', function () {
    var value = rmUnit('10%');
    expect(value).toEqual(10);
  });
  it('detectUnit should return a px unit', function () {
    var value = detectUnit('12px');
    expect(value).toEqual(UNIT.PX);
  });
  it('detectUnit should return a em unit', function () {
    var value = detectUnit('0.7em');
    expect(value).toEqual(UNIT.EM);
  });
  it('detectUnit should return a rem unit', function () {
    var value = detectUnit('1rem');
    expect(value).toEqual(UNIT.REM);
  });
  it('detectUnit should return a percent unit', function () {
    var value = detectUnit('10%');
    expect(value).toEqual(UNIT.PERCENT);
  });
  it('toPercent should render a percentage', function () {
    var value = 5;
    var total = 20;
    var decimal = 3;
    expect(toPercent(value, total, decimal)).toEqual('25%');
  });
  it('math should addition units', function () {
    var value = math.addition('10%', '15%');
    expect(value).toEqual('25%');
  });
  it('math should substract units', function () {
    var value = math.substract('17px', '18px');
    expect(value).toEqual('-1px');
  });
  it('math should multiply units', function () {
    var value = math.multiply('15rem', '2');
    expect(value).toEqual('30rem');
  });
  it('math should divide units', function () {
    var value = math.divide('0.1em', -2);
    expect(value).toEqual('-0.05em');
  });
  it('should throw error if wrong arguments are passed', function () {
    expect(function test() {
      // eslint-disable-line  prefer-arrow-callback
      detectUnit('test-function');
    }).toThrowError("detectUnit can't find unit for test-function");
  });
});