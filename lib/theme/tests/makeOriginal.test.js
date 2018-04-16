'use strict';

var _immutable = require('immutable/');

var _makeOriginal = require('../makeOriginal');

var _makeOriginal2 = _interopRequireDefault(_makeOriginal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeOriginal', function () {
  var FINAL_CHECKSUM_THEME_ORIGINAL = 848081144; // DO NOT change this value UNLESS you have added a new variable COMING, i did say COMING from bootstrap
  it('should have makeOriginal defined', function () {
    expect(_makeOriginal2.default).toBeDefined();
  });
  it('should have makeOriginal unmodified', function () {
    expect((0, _immutable.fromJS)((0, _makeOriginal2.default)()).hashCode()).toEqual(FINAL_CHECKSUM_THEME_ORIGINAL);
  });
});