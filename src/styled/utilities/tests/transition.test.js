import { fromJS } from 'immutable';
import { getTransitionUtilities, fade, collapse, swapFade, makeReactTransition } from '../transition';

describe('bootstrap transition mixins', () => {
  describe('getTransitionUtils', () => {
    it('should return a css utility', () => {
      const enableTransitions = true;
      const css = getTransitionUtilities(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect(fromJS({ css }).hashCode()).toEqual(-407098760);
    });
    it('should have parameters', () => {
      const css = getTransitionUtilities();
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect(fromJS({ css }).hashCode()).toEqual(-303544800);
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
  describe('swapFade', () => {
    it('should return a css with defaultProps', () => {
      const css = swapFade();
      expect(fromJS({ css }).hashCode()).toEqual(1010683774);
    });
    it('should return a css with transition', () => {
      const enableTransitions = true;
      const css = swapFade(enableTransitions, 'opacity 500ms ease');
      expect(fromJS({ css }).hashCode()).toEqual(-575218961);
    });
    it('should return a css without transition', () => {
      const enableTransitions = false;
      const css = swapFade(enableTransitions, 'opacity 500ms ease');
      expect(fromJS({ css }).hashCode()).toEqual(-454224996);
    });
  });
  describe('makeReactTransition', () => {
    it('should return a css with defaultProps', () => {
      const css = makeReactTransition();
      expect(fromJS({ css }).hashCode()).toEqual(457648712);
    });
    it('should return a css adapted to react css transition group ', () => {
      const css = makeReactTransition('opacity: 0;', 'opacity: 1;', 'transition: opacity .15s linear;', 'opacity: 1;', 'opacity: 0;', 'transition: opacity .15s linear;');
      expect(fromJS({ css }).hashCode()).toEqual(147846138);
    });
  });
});
