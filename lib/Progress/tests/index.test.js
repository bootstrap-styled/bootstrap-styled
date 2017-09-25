'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('export Progress', function () {
  it('should export <Progress />', function () {
    expect(_index2.default).toBeDefined();
  });
  it('should export <ProgressBar />', function () {
    expect(_index.ProgressBar).toBeDefined();
  });
});