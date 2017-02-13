import { fromJS } from 'immutable';
import { defaultProps, cardVariant, cardOutlineVariant, cardInverse } from '../cards';

describe('bootstrap cards mixins', function () {
  it('cardVariant should return a css', function () {
    var css = cardVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(-424202874);
  });
  it('cardVariant should return a css by default', function () {
    var css = cardVariant();
    expect(fromJS({ css: css }).hashCode()).toEqual(-500713559);
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
    expect(fromJS({ css: css }).hashCode()).toEqual(-1030211806);
  });
  it('cardInverse should return a css with media query', function () {
    var css = cardInverse(!defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(1067391143);
  });
  it('cardInverse should return a css by default', function () {
    var css = cardInverse();
    expect(fromJS({ css: css }).hashCode()).toEqual(-1030211806);
  });
});