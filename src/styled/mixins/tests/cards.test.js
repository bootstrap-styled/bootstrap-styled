import { fromJS } from 'immutable';
import { defaultProps, cardVariant, cardOutlineVariant, cardInverse } from '../cards';

describe('bootstrap cards mixins', () => {
  it('cardVariant should return a css', () => {
    const css = cardVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-424202874);
  });
  it('cardVariant should return a css by default', () => {
    const css = cardVariant();
    expect(fromJS({ css }).hashCode()).toEqual(-500713559);
  });
  it('cardOutlineVariant should return a css', () => {
    const css = cardOutlineVariant('#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(712604835);
  });
  it('cardOutlineVariant should return a css by default', () => {
    const css = cardOutlineVariant();
    expect(fromJS({ css }).hashCode()).toEqual(1027644489);
  });
  it('cardInverse should return a css without media query', () => {
    const css = cardInverse(defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-1030211806);
  });
  it('cardInverse should return a css with media query', () => {
    const css = cardInverse(!defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(1067391143);
  });
  it('cardInverse should return a css by default', () => {
    const css = cardInverse();
    expect(fromJS({ css }).hashCode()).toEqual(-1030211806);
  });
});
