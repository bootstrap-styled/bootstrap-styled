'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavbarToggler = require('../NavbarToggler');

var _NavbarToggler2 = _interopRequireDefault(_NavbarToggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_NavbarToggler2.default, props));
}; /**
    * Testing our NavbarToggler component
    */


describe('<NavbarToggler />', function () {
  it('should render an <NavbarToggler> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('NavbarToggler').length).toBe(0);
  });
  it('should render a <NavbarToggler> with class .navbar-toggler-left', function () {
    var renderedComponent = renderComponent({
      left: true
    });
    expect(renderedComponent.find('.navbar-toggler-left').length).toBe(1);
  });
  it('should render a <NavbarToggler> with class .navbar-toggler-right', function () {
    var renderedComponent = renderComponent({
      right: true
    });
    expect(renderedComponent.find('.navbar-toggler-right').length).toBe(1);
  });
});