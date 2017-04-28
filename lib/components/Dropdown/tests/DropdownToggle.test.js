'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Dropdown component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _DropdownItem = require('../DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownToggle = require('../DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = require('../DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var isOpen = void 0;
var toggle = void 0;
var onClick = void 0;

var _ref = _jsx(_DropdownMenu2.default, {}, void 0, _jsx(_DropdownItem2.default, {}, void 0, children));

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _jsx(_Dropdown2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, _react2.default.createElement(
    _DropdownToggle2.default,
    _extends({ onClick: onClick }, props),
    children
  ), _ref)));
};

describe('<DropdownToggle />', function () {
  beforeEach(function () {
    isOpen = false;
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render an <DropdownToggle> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a caret', function () {
    var renderedComponent = renderComponentUsingTheme({
      caret: true
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });
  it('should be a component A if nav and not tag specified', function () {
    var renderedComponent = renderComponentUsingTheme({
      nav: true
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('a').props().href).toBe('#');
  });
  it('should be a component Button if no tag specified', function () {
    var renderedComponent = renderComponentUsingTheme({
      nav: true
    });
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should be have a tag li', function () {
    var renderedComponent = renderComponentUsingTheme({
      tag: 'li'
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should render a split', function () {
    var renderedComponent = renderComponentUsingTheme({
      split: true
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });
  it('should call a function onClick', function () {
    var renderedComponent = renderComponentUsingTheme({
      onClick: onClick
    });
    renderedComponent.find('DropdownToggle').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should call a function onClick with preventDefault if props nav', function () {
    var renderedComponent = renderComponentUsingTheme({
      onClick: onClick,
      nav: true
    });
    renderedComponent.find('DropdownToggle').simulate('click', {
      preventDefault: function preventDefault() {}
    });
    expect(onClick).toHaveBeenCalled();
  });
});