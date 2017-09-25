'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _FormGroup = require('../FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _FormGroup2.default,
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
      _FormGroup2.default,
      props,
      children
    )
  ));
};

describe('<FormGroup />', function () {
  it('should render an <FormGroup> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormGroup> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormGroup').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class has-info', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'info'
    });
    expect(renderedComponent.find('div').at(1).hasClass('has-info')).toBe(true);
  });
  it('should have a class row', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      row: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('row')).toBe(true);
  });
  it('should have a class form-check', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check')).toBe(true);
  });
  it('should have a class form-check-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check-inline')).toBe(true);
  });
  it('should have a class disabled', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true,
      disabled: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('disabled')).toBe(true);
  });
});