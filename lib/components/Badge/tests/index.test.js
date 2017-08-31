'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Badge component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<Badge />', function () {
  it('should render an <Badge> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('BadgeUnstyled').length).toBe(1);
  });
  it('should have an attribute pill without a theme', function () {
    var renderedComponent = renderComponent({
      pill: true
    });
    expect(renderedComponent.find('BadgeUnstyled').props().pill).toBe(true);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Tag> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Badge').length).toBe(1);
  });
  it('should have an attribute pill with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      pill: true
    });
    expect(renderedComponent.find('Badge').props().pill).toBe(true);
  });
  it('should render a classList attribute of <tag> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').hasClass('badge')).toEqual(true);
  });

  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});