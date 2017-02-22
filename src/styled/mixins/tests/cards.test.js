import { fromJS } from 'immutable';
import { defaultProps, cardVariant, cardOutlineVariant, cardInverse, card } from '../cards';

describe('bootstrap cards mixins', () => {
  it('cardVariant should return a css', () => {
    const css = cardVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-667338980);
  });
  it('cardVariant should return a css by default', () => {
    const css = cardVariant();
    expect(fromJS({ css }).hashCode()).toEqual(-29949046);
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
    expect(fromJS({ css }).hashCode()).toEqual(588066515);
  });
  it('cardInverse should return a css with media query', () => {
    const css = cardInverse(!defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(514109294);
  });
  it('cardInverse should return a css by default', () => {
    const css = cardInverse();
    expect(fromJS({ css }).hashCode()).toEqual(588066515);
  });
  it('card should return a css with media query', () => {
    const css = card(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$card-spacer-y'],
      defaultProps['$card-spacer-x'],
      defaultProps['$card-bg'],
      defaultProps['$card-border-width'],
      defaultProps['$card-border-color'],
      defaultProps['$card-border-radius'],
      defaultProps['$card-margin-y-halved'],
      defaultProps['$card-margin-x-halved'],
      defaultProps['$card-cap-bg'],
      defaultProps['$card-border-radius-inner'],
      defaultProps['$brand-primary'],
      defaultProps['$brand-success'],
      defaultProps['$brand-info'],
      defaultProps['$brand-warning'],
      defaultProps['$brand-danger'],
      defaultProps['$btn-primary-bg'],
      defaultProps['$btn-secondary-border'],
      defaultProps['$btn-info-bg'],
      defaultProps['$btn-success-bg'],
      defaultProps['$btn-warning-bg'],
      defaultProps['$btn-danger-bg'],
      defaultProps['$card-link-hover-color'],
      defaultProps['$card-img-overlay-padding'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-200514915);
  });
  it('card should return a css by default', () => {
    const css = card();
    expect(fromJS({ css }).hashCode()).toEqual(551864327);
  });
});
