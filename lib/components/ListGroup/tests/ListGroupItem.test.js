'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our ListGroupItem component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _ListGroupItem = require('../ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _ListGroupItem2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _ListGroupItem2.default,
    props,
    props.children
  )));
};

describe('<ListGroupItem />', function () {
  it('should render an <ListGroupItem> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ListGroupItem> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('li').length).toBe(1);
    expect(renderedComponent.find('ListGroupItem').length).toBe(1);
  });
  it('should have a class active with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      active: true
    });
    expect(renderedComponent.find('li').hasClass('active'));
  });
  it('should have a class disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('li').hasClass('disabled'));
  });
  it('should have a class list-group-item-action with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      action: true
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-action'));
  });
  it('should have a class list-group-item-primary with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'primary'
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-primary'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should prevent click event when disabled is passed', function () {
    var onDisableClick = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_jsx(_ListGroupItem2.default, {
      disabled: true,
      onClick: onDisableClick
    }, void 0, 'Yo!'));
    renderedComponent.find('li').simulate('click');
    expect(onDisableClick).not.toHaveBeenCalled();
  });
});