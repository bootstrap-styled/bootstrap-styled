import { fromJS } from 'immutable';
import { getTransitionUtilities, fade, collapse, getReactTransition } from '../transition';

describe('bootstrap transition mixins', () => {
  describe('getTransitionUtils', () => {
    it('should return a css utility', () => {
      const enableTransitions = true;
      const css = getTransitionUtilities(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect(fromJS({ css }).hashCode()).toEqual(6006592);
    });
    it('should have parameters', () => {
      const css = getTransitionUtilities();
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect(fromJS({ css }).hashCode()).toEqual(419397045);
    });
  });
  describe('fade', () => {
    it('should return a css with defaultProps', () => {
      const css = fade();
      expect(fromJS({ css }).hashCode()).toEqual(-297507179);
    });
    it('should return a css with transition', () => {
      const enableTransitions = true;
      const css = fade(enableTransitions, 'opacity .15s linear');
      expect(fromJS({ css }).hashCode()).toEqual(-297507179);
    });
    it('should return a css without transition', () => {
      const enableTransitions = false;
      const css = fade(enableTransitions, 'opacity .15s linear');
      expect(fromJS({ css }).hashCode()).toEqual(-1046095170);
    });
  });
  describe('collapse', () => {
    it('should return a css with defaultProps', () => {
      const css = collapse();
      expect(fromJS({ css }).hashCode()).toEqual(330977907);
    });
    it('should return a css with transition', () => {
      const enableTransitions = true;
      const css = collapse(enableTransitions, 'height .35s ease');
      expect(fromJS({ css }).hashCode()).toEqual(330977907);
    });
    it('should return a css without transition', () => {
      const enableTransitions = false;
      const css = collapse(enableTransitions, 'height .35s ease');
      expect(fromJS({ css }).hashCode()).toEqual(1058176073);
    });
  });
  describe('getReactTransition', () => {
    it('should return a css with transition', () => {
      const enableTransitions = true;
      const css = getReactTransition(enableTransitions, 'height .35s ease');
      expect(fromJS({ css }).hashCode()).toEqual(-627217750);
    });
    it('should return a css without transition', () => {
      const enableTransitions = false;
      const css = getReactTransition(enableTransitions, 'height .35s ease');
      expect(fromJS({ css }).hashCode()).toEqual(788434458);
    });
  });
});
