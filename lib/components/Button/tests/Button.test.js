'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Button component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('span', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Button2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_Button2.default, props)));
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