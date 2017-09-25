'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Thead = require('../Thead');

var _Thead2 = _interopRequireDefault(_Thead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'span',
  null,
  ' test '
); /**
    * Testing our Thead component
    */

var renderComponent = function renderComponent() {
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Thead2.default,
    null,
    children
  ));
};

describe('<Thead />', function () {
  it('should render a <Thead> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('thead').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});