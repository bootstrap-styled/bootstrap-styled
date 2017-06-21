'use strict';

var _immutable = require('immutable');

var _transition = require('../transition');

describe('bootstrap transition mixins', function () {
  describe('getTransitionUtils', function () {
    it('should return a css utility', function () {
      var enableTransitions = true;
      var css = (0, _transition.getTransitionUtilities)(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(6006592);
    });
    it('should have parameters', function () {
      var css = (0, _transition.getTransitionUtilities)();
      expect(css).not.toContain('undefined');
      expect(css).not.toContain('null');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(419397045);
    });
  });
  describe('fade', function () {
    it('should return a css with defaultProps', function () {
      var css = (0, _transition.fade)();
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-297507179);
    });
    it('should return a css with transition', function () {
      var enableTransitions = true;
      var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-297507179);
    });
    it('should return a css without transition', function () {
      var enableTransitions = false;
      var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1046095170);
    });
  });
  describe('collapse', function () {
    it('should return a css with defaultProps', function () {
      var css = (0, _transition.collapse)();
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(330977907);
    });
    it('should return a css with transition', function () {
      var enableTransitions = true;
      var css = (0, _transition.collapse)(enableTransitions, 'height .35s ease');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(330977907);
    });
    it('should return a css without transition', function () {
      var enableTransitions = false;
      var css = (0, _transition.collapse)(enableTransitions, 'height .35s ease');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1058176073);
    });
  });
  describe('getReactTransition', function () {
    it('should return a css with transition', function () {
      var enableTransitions = true;
      var css = (0, _transition.getReactTransition)(enableTransitions, 'height .35s ease');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-627217750);
    });
    it('should return a css without transition', function () {
      var enableTransitions = false;
      var css = (0, _transition.getReactTransition)(enableTransitions, 'height .35s ease');
      expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(788434458);
    });
  });
});