'use strict';

var _immutable = require('immutable');

var _resetText = require('../reset-text');

describe('bootstrap reset-text mixins', function () {
  it('resetText should return a css', function () {
    var css = (0, _resetText.resetText)(_resetText.defaultProps['$font-family-base'], _resetText.defaultProps['$font-weight-normal'], _resetText.defaultProps['$line-height-base']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    font-family: true;\n    /* We deliberately do NOT reset font-size or word-wrap. */\n    font-style: normal;\n    font-weight: true;\n    letter-spacing: normal;\n    line-break: auto;\n    line-height: true;\n    text-align: left; /* Fallback for where \'start\' is not supported */\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    white-space: normal;\n    word-break: normal;\n    word-spacing: normal;\n  ');
  });
  it('resetText should have arguments', function () {
    var css = (0, _resetText.resetText)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-552236203);
  });
});