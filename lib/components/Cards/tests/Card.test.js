'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Card component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  ' test '
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Card2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_Card2.default, props)
  ));
};

describe('<Card />', function () {
  it('should render an <Card> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Card').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Card> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Card').length).toBe(1);
  });
  it('should have an attribute inverse with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      inverse: true
    });
    expect(renderedComponent.find('Card').props().inverse).toBe(true);
  });
  it('should have an attribute color with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      color: 'color-test'
    });
    expect(renderedComponent.find('Card').props().color).toBe('color-test');
  });
  it('should have an attribute block with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      block: true
    });
    expect(renderedComponent.find('Card').props().block).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});