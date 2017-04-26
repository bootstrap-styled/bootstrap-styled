'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our H1 component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Headings = require('../Headings');

var _Headings2 = _interopRequireDefault(_Headings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('p', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Headings2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_Headings2.default, props)));
};

describe('<Headings />', function () {
  it('should render an <Headings> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      tag: 'h1'
    });
    expect(renderedComponent.find('[tag="h1"]').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      tag: 'h1'
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Headings> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      tag: 'h1'
    });
    expect(renderedComponent.find('h1').length).toBe(1);
  });
  it('should have an attribute color', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'test-color',
      tag: 'h1'
    });
    expect(renderedComponent.find('h1').hasClass('test-color'));
  });
  it('should have a classname lead', function () {
    var renderedComponent = renderComponentUsingTheme({
      lead: true,
      tag: 'h1'
    });
    expect(renderedComponent.find('h1').hasClass('lead'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      tag: 'h1'
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});