'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBarToggler = require('../NavBarToggler');

var _NavBarToggler2 = _interopRequireDefault(_NavBarToggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_NavBarToggler2.default, props));
}; /**
    * Testing our NavBarToggler component
    */


describe('<NavBarToggler />', function () {
  it('should render a <NavBarToggler> with class .navbar-toggler-left', function () {
    var renderedComponent = renderComponent({
      left: true
    });
    expect(renderedComponent.find('.navbar-toggler-left').length).toBe(1);
  });
  it('should render a <NavBarToggler> with class .navbar-toggler-right', function () {
    var renderedComponent = renderComponent({
      right: true
    });
    expect(renderedComponent.find('.navbar-toggler-right').length).toBe(1);
  });
});