'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _ProgressBar = require('../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('export Progress', function () {
  it('should export <Progress />', function () {
    expect(_index2.default).toBeDefined();
  });
  it('should export <ProgressBar />', function () {
    expect(_ProgressBar2.default).toBeDefined();
  });
});