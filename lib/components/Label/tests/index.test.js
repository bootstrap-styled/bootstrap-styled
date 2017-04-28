'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Label component
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
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_index2.default, props)));
};

describe('<Label />', function () {
  it('should render an <Label> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Label').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <label> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('label').length).toBe(1);
  });
  it('should render with col-form-label-lg class when size is provided', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      size: 'lg'
    });
    expect(renderedComponent.find('label').hasClass('col-form-label-lg')).toBe(true);
  });
  it('should pass col size specific classes as Numbers', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      sm: '6'
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
  });
  it('should pass col size specific classes via Objects', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      sm: {
        size: 6,
        push: 2,
        pull: 2,
        offset: 2
      }
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-sm-2')).toBe(true);
  });
  it('should pass multiple col size specific classes via Objects', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      sm: {
        size: 6,
        push: 2,
        pull: 2,
        offset: 2
      },
      md: {
        size: 7,
        push: 1,
        pull: 1,
        offset: 1
      }
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('col-md-7')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-md-1')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-md-1')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-md-1')).toBe(true);
  });
  it('should have a class sr-only with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      hidden: true
    });
    expect(renderedComponent.find('Label').hasClass('sr-only'));
  });
  it('should have a class form-check-inline with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true,
      inline: true
    });
    expect(renderedComponent.find('Label').hasClass('form-check-inline'));
  });
  it('should have a class form-check-label with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true,
      inline: false
    });
    expect(renderedComponent.find('Label').hasClass('form-check-label'));
  });
  it('should have an attribute disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      check: true,
      inline: true,
      disabled: true
    });
    expect(renderedComponent.find('Label').props().disabled).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});