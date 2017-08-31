'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Col component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
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
      _index2.default,
      props,
      children
    )
  ));
};

describe('<Col />', function () {
  it('should render an <Col> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('ColUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Col').length).toBe(1);
  });
  it('getColumnSizeClass should return empty string', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', '')).toEqual('');
  });
  it('getColumnSizeClass should return col-auto', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', 'auto')).toEqual('col-auto');
  });
  it('getColumnSizeClass should return col-lg-auto', function () {
    expect((0, _index.getColumnSizeClass)('', 'lg', 'auto')).toEqual('col-lg-auto');
  });
  it('getColumnSizeClass should return col-8', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', '8')).toEqual('col-8');
  });
  it('getColumnSizeClass should return col-lg-8', function () {
    expect((0, _index.getColumnSizeClass)('', 'lg', '8')).toEqual('col-lg-8');
  });
  it('should have a class col-6', function () {
    var renderedComponent = renderComponentUsingTheme({
      xs: '6'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-6')).toEqual(true);
  });
  it('should have a class col-md-6', function () {
    var renderedComponent = renderComponentUsingTheme({
      md: '6'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-6')).toEqual(true);
  });
  it('should have a class col-auto', function () {
    var renderedComponent = renderComponentUsingTheme({
      xs: 'auto'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-auto')).toEqual(true);
  });
  it('should have a class col-md-auto', function () {
    var renderedComponent = renderComponentUsingTheme({
      md: 'auto'
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-auto')).toEqual(true);
  });
  it('should have a classes .col .col-sm-6 .sm-push-2 .sm-pull-2 .sm-offset-2', function () {
    var renderedComponent = renderComponentUsingTheme({
      sm: { size: 6, push: 2, pull: 2, offset: 1 }
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-sm-6')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('push-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('pull-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('offset-sm-1')).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});