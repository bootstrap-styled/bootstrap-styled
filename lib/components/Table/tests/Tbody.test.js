'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tbody = require('../Tbody');

var _Tbody2 = _interopRequireDefault(_Tbody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'span',
  null,
  ' test '
); /**
    * Testing our Tbody component
    */

var renderComponent = function renderComponent() {
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Tbody2.default,
    null,
    children
  ));
};

describe('<Tbody />', function () {
  it('should render a <Tbody> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});