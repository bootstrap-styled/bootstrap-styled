'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<IssueIcon />', function () {
  it('should render a SVG', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});