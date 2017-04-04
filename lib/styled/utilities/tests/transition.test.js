'use strict';

var _immutable = require('immutable');

var _transition = require('../transition');

describe('bootstrap transition mixins', function () {
  it('getTransitionUtils should return a css utility', function () {
    var enableTransitions = true;
    var css = (0, _transition.getTransitionUtilities)(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(6006592);
  });
  it('getTransitionUtils should have parameters', function () {
    var css = (0, _transition.getTransitionUtilities)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(419397045);
  });
  it('fade should return a css with defaultProps', function () {
    var css = (0, _transition.fade)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-297507179);
  });
  it('fade should return a css with transition', function () {
    var enableTransitions = true;
    var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-297507179);
  });
  it('fade should return a css without transition', function () {
    var enableTransitions = false;
    var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1046095170);
  });
  it('collapse should return a css with defaultProps', function () {
    var css = (0, _transition.collapse)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css with transition', function () {
    var enableTransitions = true;
    var css = (0, _transition.collapse)(enableTransitions, 'height .35s ease');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(330977907);
  });
  it('collapse should return a css without transition', function () {
    var enableTransitions = false;
    var css = (0, _transition.collapse)(enableTransitions, 'height .35s ease');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1058176073);
  });
  it('parseTransition should return an object', function () {
    var enableTransitions = true;
    var objectTest = {
      property: 'height',
      duration: 350,
      functionTiming: 'ease',
      delay: null
    };
    var css = (0, _transition.parseTransition)(enableTransitions, 'height .35s ease');
    expect(css).toMatchObject(objectTest);
  });
  it('parseTransition should return an object', function () {
    var enableTransitions = true;
    var objectTest = {
      property: 'height',
      duration: 350,
      functionTiming: 'ease',
      delay: 350
    };
    var css = (0, _transition.parseTransition)(enableTransitions, 'height .35s ease .35s');
    expect(css).toMatchObject(objectTest);
  });
  it('parseTransition should return an object', function () {
    var enableTransitions = false;
    var css = (0, _transition.parseTransition)(enableTransitions, 'height .35s ease');
    expect(css.duration).toEqual(1);
  });
});