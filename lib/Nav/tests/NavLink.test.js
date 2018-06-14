'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _NavLink = require('../NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavLink component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _NavLink2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _NavLink2.default,
      props,
      props.children
    )
  ));
};

describe('<NavLink />', function () {
  it('should render an <NavLink> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('a').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavLink> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('NavLink').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should handle onClick prop with a theme', function () {
    var functionTest = jest.fn();

    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: functionTest
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).toHaveBeenCalled();
  });
  it('should handle onClick events with a theme', function () {
    var functionTest = jest.fn();
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: functionTest,
      disabled: true
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).not.toHaveBeenCalled();
  });
});