'use strict';

var _immutable = require('immutable');

var _visibility = require('../visibility');

describe('bootstrap visibility mixins', function () {
  it('invisible should return a css', function () {
    var css = (0, _visibility.invisible)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(281334414);
  });
  it('hiddenBpUp should return a css', function () {
    var css = (0, _visibility.hiddenBpUp)({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    });
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-56064415);
  });
  it('hiddenBpUp should have arguments', function () {
    var css = (0, _visibility.hiddenBpUp)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-56064415);
  });
  it('visiblePrintBlock should return a css', function () {
    var css = (0, _visibility.visiblePrintBlock)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(191163055);
  });
  it('visiblePrintInline should return a css', function () {
    var css = (0, _visibility.visiblePrintInline)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-288551081);
  });
  it('visiblePrintInlineBlock should return a css', function () {
    var css = (0, _visibility.visiblePrintInlineBlock)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-795079173);
  });
  it('hiddenPrint should return a css', function () {
    var css = (0, _visibility.hiddenPrint)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-790624097);
  });
});