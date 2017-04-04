'use strict';

var _immutable = require('immutable');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _reboot = require('../reboot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('bootstrap reboot utility', function () {
  it('getGlobalStyles should return a set of global styles', function () {
    var css = (0, _reboot.getGlobalStyles)(_theme2.default['$font-family-base'], _theme2.default['$font-size-base'], _theme2.default['$font-weight-base'], _theme2.default['$line-height-base'], _theme2.default['$body-color'], _theme2.default['$body-bg']);
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(338048398);
  });
  it('getGlobalStyles should return a set of global styles without params', function () {
    var css = (0, _reboot.getGlobalStyles)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(338048398);
  });
  it('body should return a css with default values', function () {
    var css = (0, _reboot.body)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-830622298);
  });
  it('body should return a css with custom values', function () {
    var css = (0, _reboot.body)('arial', '1.2rem', 'bold', '1.5rem', 'red', 'blue');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-308159639);
  });
  it('bodyUtils should return a css with default values', function () {
    var css = (0, _reboot.bodyUtils)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-539439755);
  });
  it('boxSizing should return a css', function () {
    var css = (0, _reboot.boxSizing)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(680872989);
  });
  it('html should return a css', function () {
    var css = (0, _reboot.html)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-401909997);
  });
  it('ie10FixHidden should return a css', function () {
    var css = (0, _reboot.ie10FixHidden)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1008903539);
  });
  it('ie10FixViewport should return a css', function () {
    var css = (0, _reboot.ie10FixViewport)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-966787180);
  });
  it('svg should return a css', function () {
    var css = (0, _reboot.svg)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(15932031);
  });
  it('tabIndex should return a css', function () {
    var css = (0, _reboot.tabIndex)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(972266682);
  });
  it('webkitFileUploadButton should return a css', function () {
    var css = (0, _reboot.webkitFileUploadButton)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(764020772);
  });
});