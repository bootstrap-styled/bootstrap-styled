'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our link component
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

describe('<A />', function () {
  it('should render an <A> tag without a theme', function () {
    var active = true;
    var renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank',
      active: active
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have an href attribute without a theme', function () {
    var renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().href).toEqual('http://mxstbr.com/');
  });
  it('should adopt a target attribute without a theme', function () {
    var renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should adopt a type attribute without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'text/html',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().type).toEqual('text/html');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <a> tag with a theme', function () {
    var active = true;
    var renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children,
      active: active
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render a href attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().href).toEqual('http://mxstbr.com/');
  });
  it('should render an type attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().type).toEqual('text/html');
  });
  it('should render a target attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().target).toEqual('_blank');
  });
  it('should render an <A> tag without a theme and props active', function () {
    var active = true;
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      active: active
    });
    expect(renderedComponent.find('a').hasClass('active')).toEqual(true);
  });
  it('should render an <A> tag without a theme and props disabled', function () {
    var disabled = true;
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      disabled: disabled
    });
    expect(renderedComponent.find('a').hasClass('disabled')).toEqual(true);
  });
  it('should have an attribute color', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      color: 'test-color'
    });
    expect(renderedComponent.find('a').hasClass('text-test-color')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('className should set a class', function () {
    var renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    console.log(renderedComponent.find('a').debug());
    expect(renderedComponent.find('a').hasClass('btn')).toBe(true);
  });
  it('active should set a class', function () {
    var renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children,
      active: true
    });
    expect(renderedComponent.find('a').hasClass('active')).toBe(true);
  });
  it('disabled should set a class', function () {
    var renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('a').hasClass('disabled')).toBe(true);
  });
  it('color should set a class', function () {
    var renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children,
      color: 'primary'
    });
    expect(renderedComponent.find('a').hasClass('text-primary')).toBe(true);
  });
});