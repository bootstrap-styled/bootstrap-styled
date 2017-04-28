'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable */
/**
 * Testing our Collapse component
 */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _theme = require('../../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {
    theme: props.theme
  }, void 0, _react2.default.createElement(_index2.default, props)));
};

var _ref = _jsx(_index2.default, {}, void 0, _jsx('p', {}, void 0, 'hello'));

var _ref2 = _jsx(_index2.default, {});

var _ref3 = _jsx(_index2.default, {});

var _ref4 = _jsx(_index2.default, {
  navbar: true
});

var _ref5 = _jsx(_index2.default, {
  isOpen: true
});

describe('<Collapse />', function () {
  var isOpen = void 0;
  var toggle = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = function toggle() {
      isOpen = !isOpen;
    };
  });

  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpen: true,
      theme: (0, _theme.makeTheme)({
        '$enable-transitions': false
      })
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpen: false,
      theme: (0, _theme.makeTheme)({
        '$enable-transitions': true
      })
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('if state is SHOW should have className collapsing', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({ collapse: 'SHOW' });
    expect(renderedComponent.find('div').hasClass('collapsing')).toBe(true);
  });
  it('if state is SHOWN should have className collapse show', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({ collapse: 'SHOWN' });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true);
    expect(renderedComponent.find('div').hasClass('show')).toBe(true);
  });
  it('if state is HIDE should have className collapsing', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({ collapse: 'HIDE' });
    expect(renderedComponent.find('div').hasClass('collapsing')).toBe(true);
  });
  it('if state is HIDDEN should have className collapse', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({ collapse: 'HIDDEN' });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true);
  });
  it('should have className collapse by default', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true);
  });
  it('should have className navbar-collapse', function () {
    var renderedComponent = renderComponent({
      children: children,
      navbar: true
    });
    expect(renderedComponent.find('div').hasClass('navbar-collapse')).toBe(true);
  });
  it('should have height to be 0', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setProps({ isOpen: true });
    renderedComponent.setState({ collapse: 'HIDDEN' });
    expect(renderedComponent.state().height).toBe(0);
  });
  it('should render children', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref).find('p');
    expect(renderedComponent.text()).toBe('hello');
  });

  it('should have default isOpen value', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref2);
    expect(renderedComponent.instance().props.isOpen).toEqual(false);
  });

  it('should render with class "collapse"', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref3);
    expect(renderedComponent.hasClass('collapse')).toEqual(true);
  });

  it('should render with class "navbar"', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref4);
    expect(renderedComponent.hasClass('navbar-collapse')).toEqual(true);
  });

  it('should render with class "show" when isOpen is true', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref5);
    expect(renderedComponent.hasClass('show')).toEqual(true);
  });

  var _ref6 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should set height to null when isOpen is true', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.shallow)(_ref6);
    expect(renderedComponent.state('height')).toBe(null);
  });

  var _ref7 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should not set height when isOpen is false', function () {
    var renderedComponent = (0, _enzyme.shallow)(_ref7);
    expect(renderedComponent.state('height')).toBe(null);
  });

  var _ref8 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should change state with { collapse: ${State} } when isOpen change to true before transition', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref8);
    toggle();
    renderedComponent.setProps({ isOpen: isOpen });
    expect(renderedComponent.state('collapse')).toEqual('SHOW');
    renderedComponent.unmount();
  });

  var _ref9 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should change state with { collapse: ${State} } when isOpen change to false before transition', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_ref9);
    toggle();
    renderedComponent.setProps({ isOpen: isOpen });
    expect(renderedComponent.state('collapse')).toEqual('HIDE');
    renderedComponent.unmount();
  });

  var _ref10 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should set inline style to 0 when isOpen change to false', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_ref10);
    toggle();
    renderedComponent.setProps({ isOpen: isOpen });
    renderedComponent.unmount();
  });

  var _ref11 = _jsx(_index2.default, {
    isOpen: isOpen
  });

  it('should remove timeout tag after unmount', function () {
    spyOn(_index2.default.prototype, 'componentWillUnmount').and.callThrough();
    var renderedComponent = (0, _enzyme.mount)(_ref11);
    renderedComponent.unmount();
    expect(_index2.default.prototype.componentWillUnmount).toHaveBeenCalled();
  });
});