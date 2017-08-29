'use strict';

var _immutable = require('immutable');

var _cards = require('../cards');

describe('bootstrap cards mixins', function () {
  it('cardVariant should return a css', function () {
    var css = (0, _cards.cardVariant)('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-667338980);
  });
  it('cardVariant should return a css by default', function () {
    var css = (0, _cards.cardVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-29949046);
  });
  it('cardOutlineVariant should return a css', function () {
    var css = (0, _cards.cardOutlineVariant)('#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(712604835);
  });
  it('cardOutlineVariant should return a css by default', function () {
    var css = (0, _cards.cardOutlineVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1027644489);
  });
  it('cardInverse should return a css without media query', function () {
    var css = (0, _cards.cardInverse)(_cards.defaultProps['$enable-hover-media-query'], _cards.defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(588066515);
  });
  it('cardInverse should return a css with media query', function () {
    var css = (0, _cards.cardInverse)(!_cards.defaultProps['$enable-hover-media-query'], _cards.defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(514109294);
  });
  it('cardInverse should return a css by default', function () {
    var css = (0, _cards.cardInverse)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(588066515);
  });
  it('card should return a css with media query', function () {
    var css = (0, _cards.card)(_cards.defaultProps['$enable-rounded'], _cards.defaultProps['$enable-hover-media-query'], _cards.defaultProps['$card-spacer-y'], _cards.defaultProps['$card-spacer-x'], _cards.defaultProps['$card-bg'], _cards.defaultProps['$card-border-width'], _cards.defaultProps['$card-border-color'], _cards.defaultProps['$card-border-radius'], _cards.defaultProps['$card-margin-y-halved'], _cards.defaultProps['$card-margin-x-halved'], _cards.defaultProps['$card-cap-bg'], _cards.defaultProps['$card-border-radius-inner'], _cards.defaultProps['$brand-primary'], _cards.defaultProps['$brand-success'], _cards.defaultProps['$brand-info'], _cards.defaultProps['$brand-warning'], _cards.defaultProps['$brand-danger'], _cards.defaultProps['$btn-primary-bg'], _cards.defaultProps['$btn-secondary-border'], _cards.defaultProps['$btn-info-bg'], _cards.defaultProps['$btn-success-bg'], _cards.defaultProps['$btn-warning-bg'], _cards.defaultProps['$btn-danger-bg'], _cards.defaultProps['$card-link-hover-color'], _cards.defaultProps['$card-img-overlay-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(279735614);
  });
  it('card should return a css by default', function () {
    var css = (0, _cards.card)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(1013963828);
  });
});