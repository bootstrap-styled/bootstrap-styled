import { fromJS } from 'immutable';
import bsTheme from 'theme';
import { body, boxSizing, getGlobalStyles, html, ie10FixHidden, ie10FixViewport, svg, tabIndex, webkitFileUploadButton } from '../reboot';

describe('bootstrap reboot utility', function () {
  it('body should return a body global style', function () {
    var css = body(bsTheme['$font-family-base'], bsTheme['$font-size-base'], bsTheme['$font-weight-base'], bsTheme['$line-height-base'], bsTheme['$body-color'], bsTheme['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(202960930);
  });
  it('body should return a body global style without params', function () {
    var css = body();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(202960930);
  });
  it('boxSizing should return a fix', function () {
    var css = boxSizing();
    expect(fromJS({ css: css }).hashCode()).toEqual(849919480);
  });
  it('getGlobalStyles should return a set of global styles', function () {
    var css = getGlobalStyles(bsTheme['$font-family-base'], bsTheme['$font-size-base'], bsTheme['$font-weight-base'], bsTheme['$line-height-base'], bsTheme['$body-color'], bsTheme['$body-bg']);
    expect(fromJS({ css: css }).hashCode()).toEqual(-904022236);
  });
  it('getGlobalStyles should return a set of global styles without params', function () {
    var css = getGlobalStyles();
    expect(fromJS({ css: css }).hashCode()).toEqual(-904022236);
  });
  it('html should return a reset', function () {
    var css = html();
    expect(fromJS({ css: css }).hashCode()).toEqual(-177371224);
  });
  it('ie10FixHidden should return a fix', function () {
    var css = ie10FixHidden();
    expect(fromJS({ css: css }).hashCode()).toEqual(-81669626);
  });
  it('ie10FixViewport should return a fix', function () {
    var css = ie10FixViewport();
    expect(fromJS({ css: css }).hashCode()).toEqual(-223171500);
  });
  it('svg should return a fix', function () {
    var css = svg();
    expect(fromJS({ css: css }).hashCode()).toEqual(45357565);
  });
  it('tabIndex should return a fix', function () {
    var css = tabIndex();
    expect(fromJS({ css: css }).hashCode()).toEqual(647290882);
  });
  it('webkitFileUploadButton should return a fix', function () {
    var css = webkitFileUploadButton();
    expect(fromJS({ css: css }).hashCode()).toEqual(-306877417);
  });
});