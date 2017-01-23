import { assertAscending, comparable, assertStartAtZero } from '../variables';

describe('bootstrap variables mixins', function () {
  it('assertAscending true', function () {
    var asserted = assertAscending({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(asserted).toEqual(true);
  });
  it('assertAscending false', function () {
    var asserted = assertAscending({
      xs: '0',
      sm: '768px',
      md: '576px',
      lg: '992px',
      xl: '1200px'
    });
    expect(asserted).toEqual(false);
  });
  it('comparable true', function () {
    var res = comparable(1, 1);
    expect(res).toEqual(true);
  });
  it('comparable false', function () {
    var res = comparable(1, 'a');
    expect(res).toEqual(false);
  });
  it('assertStartAtZero true', function () {
    var res = assertStartAtZero({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(res).toEqual(true);
  });
  it('assertStartAtZero false', function () {
    var res = assertStartAtZero({
      sm: '576px',
      xs: '0',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(res).toEqual(false);
  });
});