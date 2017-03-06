'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Area component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_jsx(_index2.default, {
    shape: props.shape,
    coords: props.coords,
    alt: props.alt,
    href: props.href,
    download: props.download,
    media: props.media,
    rel: props.rel,
    target: props.target,
    type: props.type,
    className: props.className
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {
    shape: props.shape,
    coords: props.coords,
    alt: props.alt,
    href: props.href,
    download: props.download,
    media: props.media,
    rel: props.rel,
    target: props.target,
    type: props.type,
    className: props.className
  })));
};

describe('<Area />', function () {
  it('should render an <Area> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('area').length).toBe(1);
  });
  it('should have an shape attribute without a theme', function () {
    var renderedComponent = renderComponent({
      shape: 'rect'
    });
    expect(renderedComponent.props().shape).toEqual('rect');
  });
  it('should have an coords attribute without a theme', function () {
    var renderedComponent = renderComponent({
      coords: '0,0,82,126'
    });
    expect(renderedComponent.props().coords).toEqual('0,0,82,126');
  });
  it('should have an alt attribute without a theme', function () {
    var renderedComponent = renderComponent({
      alt: 'Sun'
    });
    expect(renderedComponent.props().alt).toEqual('Sun');
  });
  it('should have an href attribute without a theme', function () {
    var renderedComponent = renderComponent({
      href: 'sun.htm'
    });
    expect(renderedComponent.props().href).toEqual('sun.htm');
  });
  it('should have an download attribute without a theme', function () {
    var renderedComponent = renderComponent({
      download: 'sun'
    });
    expect(renderedComponent.props().download).toEqual('sun');
  });
  it('should have an media attribute without a theme', function () {
    var renderedComponent = renderComponent({
      media: 'screen and (min-color-index:256)'
    });
    expect(renderedComponent.props().media).toEqual('screen and (min-color-index:256)');
  });
  it('should have an rel attribute without a theme', function () {
    var renderedComponent = renderComponent({
      rel: 'alternate'
    });
    expect(renderedComponent.props().rel).toEqual('alternate');
  });
  it('should have an target attribute without a theme', function () {
    var renderedComponent = renderComponent({
      target: '_blank'
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should have an type attribute without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'image/gif'
    });
    expect(renderedComponent.props().type).toEqual('image/gif');
  });
  it('should render an <area> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('area').length).toBe(1);
  });
  it('should have an shape attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      shape: 'rect'
    });
    expect(renderedComponent.find('area').props().shape).toEqual('rect');
  });
  it('should have an coords attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      coords: '0,0,82,126'
    });
    expect(renderedComponent.find('area').props().coords).toEqual('0,0,82,126');
  });
  it('should have an alt attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'Sun'
    });
    expect(renderedComponent.find('area').props().alt).toEqual('Sun');
  });
  it('should have an href attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'sun.htm'
    });
    expect(renderedComponent.find('area').props().href).toEqual('sun.htm');
  });
  it('should have an download attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      download: 'sun'
    });
    expect(renderedComponent.find('area').props().download).toEqual('sun');
  });
  it('should have an media attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      media: 'screen and (min-color-index:256)'
    });
    expect(renderedComponent.find('area').props().media).toEqual('screen and (min-color-index:256)');
  });
  it('should have an rel attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      rel: 'alternate'
    });
    expect(renderedComponent.find('area').props().rel).toEqual('alternate');
  });
  it('should have an target attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      target: '_blank'
    });
    expect(renderedComponent.find('area').props().target).toEqual('_blank');
  });
  it('should have an type attribute without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'image/gif'
    });
    expect(renderedComponent.find('area').props().type).toEqual('image/gif');
  });
});