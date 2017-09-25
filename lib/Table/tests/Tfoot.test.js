'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tfoot = require('../Tfoot');

var _Tfoot2 = _interopRequireDefault(_Tfoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'span',
  null,
  ' test '
); /**
    * Testing our Tfoot component
    */

var renderComponent = function renderComponent() {
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Tfoot2.default,
    null,
    children
  ));
};

describe('<Tfoot />', function () {
  it('should render a <Tfoot> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tfoot').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});