'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Col component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

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
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _index2.default,
    props,
    children
  )));
};

describe('<Col />', function () {
  it('should render an <Col> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Col').length).toBe(1);
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
  it('getColumnSizeClass should return col', function () {
    expect((0, _index.getColumnSizeClass)('xs', '', '')).toEqual('col');
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