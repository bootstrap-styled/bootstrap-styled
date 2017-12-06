'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Form = require('../Form');

var _Form2 = _interopRequireDefault(_Form);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _theme.makeTheme)();

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Form2.default,
    _extends({ theme: theme }, props),
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _Form2.default,
      props,
      children
    )
  ));
};

describe('<Form />', function () {
  it('should render an <Form /> tag without a <BootstrapProvider />', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('FormUnstyled').length).toBe(1);
  });
  it('should have children without a <BootstrapProvider />', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Form /> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have a classname form-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      inline: true
    });
    expect(renderedComponent.find('form').hasClass('form-inline'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});