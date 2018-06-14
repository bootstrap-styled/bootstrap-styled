'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our ButtonGroup component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<ButtonGroup />', function () {
  it('should render an <ButtonGroup> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').length).toBe(1);
  });
  it('should have an attribute vertical without a theme', function () {
    var renderedComponent = renderComponent({
      vertical: true
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').props().vertical).toBe(true);
  });
  it('should have an attribute size without a theme', function () {
    var renderedComponent = renderComponent({
      size: 'sm'
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').props().size).toBe('sm');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ButtonGroup> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('ButtonGroup').length).toBe(1);
  });
  it('should have an attribute vertical with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      vertical: true
    });
    expect(renderedComponent.find('ButtonGroup').props().vertical).toBe(true);
  });
  it('should have an attribute size with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'sm'
    });
    expect(renderedComponent.find('ButtonGroup').props().size).toBe('sm');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});