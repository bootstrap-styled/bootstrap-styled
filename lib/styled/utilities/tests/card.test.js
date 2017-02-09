import { fromJS } from 'immutable';
import { defaultProps, card } from '../card';

describe('bootstrap card utility', function () {
  it('card should return a css for card', function () {
    var css = card(defaultProps['$enable-rounded'], defaultProps['$enable-hover-media-query'], defaultProps['$card-spacer-y'], defaultProps['$card-spacer-x'], defaultProps['$card-bg'], defaultProps['$card-border-width'], defaultProps['$card-border-color'], defaultProps['$card-border-radius'], defaultProps['$card-margin-y-halved'], defaultProps['$card-margin-x-halved'], defaultProps['$card-cap-bg'], defaultProps['$card-border-radius-inner'], defaultProps['$brand-primary'], defaultProps['$brand-success'], defaultProps['$brand-info'], defaultProps['$brand-warning'], defaultProps['$brand-danger'], defaultProps['$btn-primary-bg'], defaultProps['$btn-secondary-border'], defaultProps['$btn-info-bg'], defaultProps['$btn-success-bg'], defaultProps['$btn-warning-bg'], defaultProps['$btn-danger-bg'], defaultProps['$card-link-hover-color'], defaultProps['$card-img-overlay-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(589354714);
  });
  it('card should have arguments', function () {
    var css = card();
    expect(fromJS({ css: css }).hashCode()).toEqual(589354714);
  });
});