'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our FaStacked component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FaStacked = require('../FaStacked');

var _FaStacked2 = _interopRequireDefault(_FaStacked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _FaStacked2.default,
    props,
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _FaStacked2.default,
    props,
    children
  ));
};

describe('<FaStacked />', function () {
  it('should render an <FaStacked> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a class fa-stacked by defaultwithout a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').hasClass('fa-stack')).toBe(true);
  });
  it('should render an <FaStacked> with children', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FaStacked> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a className fa-lgwith a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('span').hasClass('fa-lg')).toBe(true);
  });
  it('should render an <FaStacked> with children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});