'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _FormText = require('../FormText');

var _FormText2 = _interopRequireDefault(_FormText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _FormText2.default,
    props,
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _FormText2.default,
      props,
      children
    )
  ));
};

describe('<FormText />', function () {
  it('should render an <FormText> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('small').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormText> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormText').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class text-info', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'info'
    });
    expect(renderedComponent.find('small').hasClass('text-info')).toBe(true);
  });
  it('should NOT have a class form-text', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('small').hasClass('form-text')).toBe(false);
  });
});