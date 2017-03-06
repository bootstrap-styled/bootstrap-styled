'use strict';

var _immutable = require('immutable');

var _transition = require('../transition');

describe('bootstrap transition mixins', function () {
  it('getTransitionUtils should return a css utility', function () {
    var enableTransitions = true;
    var css = (0, _transition.getTransitionUtilities)(enableTransitions, 'all .2s ease-in-out', 'height .35s ease');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-798931882);
  });
  it('fade should return a css with defaultProps', function () {
    var css = (0, _transition.fade)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css with transition', function () {
    var enableTransitions = true;
    var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(15137366);
  });
  it('fade should return a css without transition', function () {
    var enableTransitions = false;
    var css = (0, _transition.fade)(enableTransitions, 'opacity .15s linear');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-490171608);
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
});