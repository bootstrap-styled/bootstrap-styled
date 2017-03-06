'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our HeaderNavBarCollapse HoC component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = _jsx('ul', {}, void 0, _jsx('li', {
  className: 'nav-item active'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'a')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'b')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'c')));

var menuCollapsed = {
  menu: menu,
  isCollapsed: false
};

var clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index.HeaderNavBarCollapse, {
    className: props.className,
    brandTitle: props.brandTitle,
    menuCollapsed: menuCollapsed,
    onClick: props.onClick
  })));
};

describe('<HeaderNavBarCollapse />', function () {
  it('should simulate a click', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      brandTitle: 'testing brand'
    });
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(true);
  });
  it('should have brandTitle props', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      brandTitle: 'testing brand'
    });
    expect(renderedComponent.find('Collapse').props().brandTitle).toEqual('testing brand');
  });
  it('should add to the  onCLick function if props onClick is set', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      brandTitle: 'testing brand',
      onClick: clickTest
    });
    expect(renderedComponent.find('Collapse').props().onClick).toBeDefined();
    renderedComponent.find('button').simulate('click');
    expect(clickTest()).toBe('test-click-additional');
  });
});