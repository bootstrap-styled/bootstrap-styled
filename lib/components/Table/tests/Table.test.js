'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Table component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Table = require('../Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {}, void 0, 'Th1'), _jsx('th', {}, void 0, 'Th2'), _jsx('th', {}, void 0, 'Th3')));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Table2.default,
    props,
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _Table2.default,
    props,
    children
  )));
};

describe('<Table />', function () {
  it('should render an <Table> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Table> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
    expect(renderedComponent.find('table').length).toBe(1);
  });
  it('should have a class .table by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('table').hasClass('table')).toBe(true);
  });
  it('should have a class .table-sm with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      size: 'sm'
    });
    expect(renderedComponent.find('table').hasClass('table-sm')).toBe(true);
  });
  it('should have a class .table-bordered with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      bordered: true
    });
    expect(renderedComponent.find('table').hasClass('table-bordered')).toBe(true);
  });
  it('should have a class .table-striped with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      striped: true
    });
    expect(renderedComponent.find('table').hasClass('table-striped')).toBe(true);
  });
  it('should have a class .table-inverse with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inverse: true
    });
    expect(renderedComponent.find('table').hasClass('table-inverse')).toBe(true);
  });
  it('should have a class .table-hover with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      hover: true
    });
    expect(renderedComponent.find('table').hasClass('table-hover')).toBe(true);
  });
  it('should have a class .table-reflow with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      reflow: true
    });
    expect(renderedComponent.find('table').hasClass('table-reflow')).toBe(true);
  });
  it('should have render a RepsonsiveTag', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      responsive: true
    });
    expect(renderedComponent.find('.table-responsive').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});