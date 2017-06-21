'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Button component
 */
var children = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Button2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_Button2.default, props)
  ));
};

describe('<Button />', function () {
  var onClick = void 0;

  beforeAll(function () {
    onClick = jest.fn();
  });

  it('should render an <Button> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Button').length).toBe(1);
  });
  it('should have an attribute outline without a theme', function () {
    var renderedComponent = renderComponent({
      outline: true
    });
    expect(renderedComponent.find('Button').props().outline).toBe(true);
  });
  it('should have an attribute size without a theme', function () {
    var renderedComponent = renderComponent({
      size: 'sm'
    });
    expect(renderedComponent.find('Button').props().size).toBe('sm');
  });
  it('should have an attribute block without a theme', function () {
    var renderedComponent = renderComponent({
      block: true
    });
    expect(renderedComponent.find('Button').props().block).toBe(true);
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
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Button').length).toBe(1);
  });
  it('should have an attribute outline with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      outline: true
    });
    expect(renderedComponent.find('Button').props().outline).toBe(true);
  });
  it('should have an attribute size with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'sm'
    });
    expect(renderedComponent.find('Button').hasClass('btn-sm')).toBe(true);
    expect(renderedComponent.find('Button').props().size).toBe('sm');
  });
  it('should have an attribute block with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      block: true
    });
    expect(renderedComponent.find('Button').props().block).toBe(true);
  });
  it('should have a function onClick', function () {
    var renderedComponent = renderComponentUsingTheme({
      onClick: onClick,
      disabled: true
    });
    renderedComponent.find('Button').simulate('click', {
      preventDefault: function preventDefault() {}
    });
    expect(onClick).not.toHaveBeenCalled();
  });
  it('should have a function onClick', function () {
    var renderedComponent = renderComponentUsingTheme({
      onClick: onClick
    });
    renderedComponent.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should have a type=button', function () {
    var renderedComponent = renderComponentUsingTheme({
      onClick: onClick
    });
    expect(renderedComponent.find('button').props().type).toEqual('button');
  });
  it('should have a type=undefined', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: '#'
    });
    expect(renderedComponent.find('a').length).toEqual(1);
    expect(renderedComponent.find('a').props().type).toEqual(undefined);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});