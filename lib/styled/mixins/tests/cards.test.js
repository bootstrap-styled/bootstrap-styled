import { fromJS } from 'immutable';
import { defaultProps, cardVariant, cardOutlineVariant, cardInverse, card } from '../cards';

describe('bootstrap cards mixins', function () {
  it('cardVariant should return a css', function () {
    var css = cardVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-667338980);
  });
  it('cardVariant should return a css by default', function () {
    var css = cardVariant();
    expect(fromJS({ css: css }).hashCode()).toEqual(-29949046);
  });
  it('cardOutlineVariant should return a css', function () {
    var css = cardOutlineVariant('#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(712604835);
  });
  it('cardOutlineVariant should return a css by default', function () {
    var css = cardOutlineVariant();
    expect(fromJS({ css: css }).hashCode()).toEqual(1027644489);
  });
  it('cardInverse should return a css without media query', function () {
    var css = cardInverse(defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(588066515);
  });
  it('cardInverse should return a css with media query', function () {
    var css = cardInverse(!defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(514109294);
  });
  it('cardInverse should return a css by default', function () {
    var css = cardInverse();
    expect(fromJS({ css: css }).hashCode()).toEqual(588066515);
  });
  it('card should return a css with media query', function () {
    var css = card(defaultProps['$enable-rounded'], defaultProps['$enable-hover-media-query'], defaultProps['$card-spacer-y'], defaultProps['$card-spacer-x'], defaultProps['$card-bg'], defaultProps['$card-border-width'], defaultProps['$card-border-color'], defaultProps['$card-border-radius'], defaultProps['$card-margin-y-halved'], defaultProps['$card-margin-x-halved'], defaultProps['$card-cap-bg'], defaultProps['$card-border-radius-inner'], defaultProps['$brand-primary'], defaultProps['$brand-success'], defaultProps['$brand-info'], defaultProps['$brand-warning'], defaultProps['$brand-danger'], defaultProps['$btn-primary-bg'], defaultProps['$btn-secondary-border'], defaultProps['$btn-info-bg'], defaultProps['$btn-success-bg'], defaultProps['$btn-warning-bg'], defaultProps['$btn-danger-bg'], defaultProps['$card-link-hover-color'], defaultProps['$card-img-overlay-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-200514915);
  });
  it('card should return a css by default', function () {
    var css = card();
    expect(fromJS({ css: css }).hashCode()).toEqual(551864327);
  });
});