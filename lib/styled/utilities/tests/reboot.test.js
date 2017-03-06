'use strict';

var _immutable = require('immutable');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _reboot = require('../reboot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bootstrap reboot utility', function () {
  it('body should return a body global style', function () {
    var css = (0, _reboot.body)(_theme2.default['$font-family-base'], _theme2.default['$font-size-base'], _theme2.default['$font-weight-base'], _theme2.default['$line-height-base'], _theme2.default['$body-color'], _theme2.default['$body-bg']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(202960930);
  });
  it('body should return a body global style without params', function () {
    var css = (0, _reboot.body)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(202960930);
  });
  it('boxSizing should return a fix', function () {
    var css = (0, _reboot.boxSizing)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(849919480);
  });
  it('getGlobalStyles should return a set of global styles', function () {
    var css = (0, _reboot.getGlobalStyles)(_theme2.default['$font-family-base'], _theme2.default['$font-size-base'], _theme2.default['$font-weight-base'], _theme2.default['$line-height-base'], _theme2.default['$body-color'], _theme2.default['$body-bg']);
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-904022236);
  });
  it('getGlobalStyles should return a set of global styles without params', function () {
    var css = (0, _reboot.getGlobalStyles)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-904022236);
  });
  it('html should return a reset', function () {
    var css = (0, _reboot.html)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-177371224);
  });
  it('ie10FixHidden should return a fix', function () {
    var css = (0, _reboot.ie10FixHidden)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-81669626);
  });
  it('ie10FixViewport should return a fix', function () {
    var css = (0, _reboot.ie10FixViewport)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-223171500);
  });
  it('svg should return a fix', function () {
    var css = (0, _reboot.svg)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(45357565);
  });
  it('tabIndex should return a fix', function () {
    var css = (0, _reboot.tabIndex)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(647290882);
  });
  it('webkitFileUploadButton should return a fix', function () {
    var css = (0, _reboot.webkitFileUploadButton)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-306877417);
  });
});