import { fromJS } from 'immutable';
import { assertAscending, comparable, assertStartAtZero } from '../variables';

describe('bootstrap variables mixins', () => {
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
  it('comparable should have arguments', () => {
    const css = comparable();
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
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
});
