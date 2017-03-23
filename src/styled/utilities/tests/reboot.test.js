import { fromJS } from 'immutable';
import bsTheme from 'theme';
import { body, boxSizing, getGlobalStyles, getRebootUtils, html, ie10FixHidden, ie10FixViewport, svg, tabIndex, webkitFileUploadButton } from '../reboot';

describe('bootstrap reboot utility', () => {
  it('getRebootUtils should return a set of global styles', () => {
    const css = getRebootUtils(
      bsTheme['$font-family-base'],
      bsTheme['$font-size-base'],
      bsTheme['$font-weight-base'],
      bsTheme['$line-height-base'],
      bsTheme['$body-color'],
      bsTheme['$body-bg'],
    );
    expect(fromJS({ css }).hashCode()).toEqual(-478980935);
  });
  it('getRebootUtils should return a set of global styles without params', () => {
    const css = getRebootUtils();
    expect(fromJS({ css }).hashCode()).toEqual(-478980935);
  });
  it('getGlobalStyles should return a set of global styles', () => {
    const css = getGlobalStyles(
      bsTheme['$font-family-base'],
      bsTheme['$font-size-base'],
      bsTheme['$font-weight-base'],
      bsTheme['$line-height-base'],
      bsTheme['$body-color'],
      bsTheme['$body-bg'],
    );
    expect(fromJS({ css }).hashCode()).toEqual(-663578906);
  });
  it('getGlobalStyles should return a set of global styles without params', () => {
    const css = getGlobalStyles();
    expect(fromJS({ css }).hashCode()).toEqual(-663578906);
  });
  it('body should return a css with default values', () => {
    const css = body();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-830622298);
  });
  it('body should return a css with custom values', () => {
    const css = body(
      'arial',
      '1.2rem',
      'bold',
      '1.5rem',
      'red',
      'blue',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-308159639);
  });
  it('boxSizing should return a css', () => {
    const css = boxSizing();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(680872989);
  });
  it('html should return a css', () => {
    const css = html();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-401909997);
  });
  it('ie10FixHidden should return a css', () => {
    const css = ie10FixHidden();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-1008903539);
  });
  it('ie10FixViewport should return a css', () => {
    const css = ie10FixViewport();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-966787180);
  });
  it('svg should return a css', () => {
    const css = svg();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(15932031);
  });
  it('tabIndex should return a css', () => {
    const css = tabIndex();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(972266682);
  });
  it('webkitFileUploadButton should return a css', () => {
    const css = webkitFileUploadButton();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(764020772);
  });
});
