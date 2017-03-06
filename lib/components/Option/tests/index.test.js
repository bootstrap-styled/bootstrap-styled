'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Option component
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

var children = 'test';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx('select', {}, void 0, _jsx(_index2.default, {}, void 0, props.children)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx('select', {}, void 0, _jsx(_index2.default, {}, void 0, props.children))));
};

describe('<Option />', function () {
  it('should render an <Option> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  });
  it('should have text node without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
  it('should render an <Option> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  });
  // it('should have an attribute selected with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     selected: true,
  //   });
  //   expect(renderedComponent.find('option').props().selected).toBe(true);
  // });
  // it('should have a class .disabled with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     disabled: true,
  //   });
  //   expect(renderedComponent.find('option').hasClass('disabled')).toBe(true);
  // });
  // it('should have an attribute label with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     label: 'test-label',
  //   });
  //   expect(renderedComponent.find('option').props().label).toBe('test-label');
  // });
  // it('should have an attribute value with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     value: 'test-value',
  //   });
  //   expect(renderedComponent.find('option').props().value).toBe('test-value');
  // });
  it('should have text node with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
});