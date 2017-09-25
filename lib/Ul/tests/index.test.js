'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Li = require('../../Li');

var _Li2 = _interopRequireDefault(_Li);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  _Li2.default,
  null,
  'Test'
); /**
    * Testing our Unordered List component
    */

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
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
      _index2.default,
      props,
      props.children
    )
  ));
};

describe('<Ul />', function () {
  it('should render an <Ul> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('UlUnstyled').length).toBe(1);
  });

  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render an <Ul> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('ul').length).toBe(1);
    expect(renderedComponent.find('Ul').length).toBe(1);
  });
  it('should have a classname list-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      inline: true,
      children: children
    });
    expect(renderedComponent.find('ul').hasClass('list-inline'));
  });
  it('should have a classname list-unstyled', function () {
    var renderedComponent = renderComponentUsingTheme({
      unstyled: true,
      children: children
    });
    expect(renderedComponent.find('ul').hasClass('list-unstyled'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});