import { fromJS } from 'immutable';
import { defaultProps, makeGridColumns, getMediaBreakpointUp, getGridColumn, getColumnGridColumn } from '../grid-framework';

describe('bootstrap grid-framework mixins', () => {
  it('makeGridColumns should return an empty css', () => {
    const css = makeGridColumns(
      !defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-widths'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(788434458);
  });
  it('makeGridColumns should return a css', () => {
    const css = makeGridColumns(
      defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-widths'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(975098536);
  });
  it('makeGridColumns should have arguments', () => {
    const css = makeGridColumns();
    expect(fromJS({ css }).hashCode()).toEqual(975098536);
  });
  it('getGridColumn should return a css', () => {
    const css = getGridColumn(
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-widths'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-453207705);
  });
  it('getGridColumn should have arguments', () => {
    const css = getGridColumn();
    expect(fromJS({ css }).hashCode()).toEqual(-453207705);
  });
  it('getColumnGridColumn should return a css', () => {
    const css = getColumnGridColumn(
      defaultProps['$grid-columns'],
      defaultProps['$grid-breakpoints'],
      defaultProps['$grid-gutter-widths'],
      'md',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(977074775);
  });
  it('getColumnGridColumn should have arguments', () => {
    const css = getColumnGridColumn();
    expect(fromJS({ css }).hashCode()).toEqual(-29779587);
  });
  it('getMediaBreakpointUp should return a css', () => {
    const css = getMediaBreakpointUp(
      defaultProps['$grid-columns'],
      defaultProps['$grid-breakpoints'],
      defaultProps['$grid-gutter-widths'],
      'md',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(954224586);
  });
  it('getMediaBreakpointUp should have arguments', () => {
    const css = getMediaBreakpointUp();
    expect(fromJS({ css }).hashCode()).toEqual(954224586);
  });
});
