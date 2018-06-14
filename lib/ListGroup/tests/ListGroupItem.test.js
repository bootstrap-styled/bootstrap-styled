'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _ListGroupItem = require('../ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our ListGroupItem component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

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
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _ListGroupItem2.default,
      props,
      props.children
    )
  ));
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
  it('should have a class list-group-item-success with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'success'
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-success'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should prevent click event when disabled is passed', function () {
    var onDisableClick = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _ListGroupItem2.default,
      { disabled: true, onClick: onDisableClick },
      'Yo!'
    ));
    renderedComponent.find('li').simulate('click');
    expect(onDisableClick).not.toHaveBeenCalled();
  });
});