import { fromJS } from 'immutable';
import theme from 'theme';
import { body, boxSizing, getGlobalStyles, html, ie10FixHidden, ie10FixViewport, svg, tabIndex, webkitFileUploadButton } from '../reboot';

describe('bootstrap reboot utility', () => {
  it('body should return a body global style', () => {
    const css = body(theme);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(202960930);
  });
  it('boxSizing should return a fix', () => {
    const css = boxSizing();
    expect(fromJS({ css }).hashCode()).toEqual(320598430);
  });
  it('getGlobalStyles should return a set of global styles', () => {
    const css = getGlobalStyles(theme);
    expect(fromJS({ css }).hashCode()).toEqual(-1011399451);
  });
  it('html should return a reset', () => {
    const css = html();
    expect(fromJS({ css }).hashCode()).toEqual(-177371224);
  });
  it('ie10FixHidden should return a fix', () => {
    const css = ie10FixHidden();
    expect(fromJS({ css }).hashCode()).toEqual(-81669626);
  });
  it('ie10FixViewport should return a fix', () => {
    const css = ie10FixViewport();
    expect(fromJS({ css }).hashCode()).toEqual(-223171500);
  });
  it('svg should return a fix', () => {
    const css = svg();
    expect(fromJS({ css }).hashCode()).toEqual(45357565);
  });
  it('tabIndex should return a fix', () => {
    const css = tabIndex();
    expect(fromJS({ css }).hashCode()).toEqual(647290882);
  });
  it('webkitFileUploadButton should return a fix', () => {
    const css = webkitFileUploadButton();
    expect(fromJS({ css }).hashCode()).toEqual(-306877417);
  });
});
