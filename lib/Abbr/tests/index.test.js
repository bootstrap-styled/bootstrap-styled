'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Abbr component
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

describe('<Abbr />', function () {
  it('should render an <Abbr> tag without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('AbbrUnstyled').length).toBe(1);
  });
  it('should have an attribute title without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.props().title).toEqual('abbr title');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <abbr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').length).toBe(1);
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').props().title).toEqual('abbr title');
  });
  it('should have an attribute initialism with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      initialism: true,
      children: children
    });
    expect(renderedComponent.find('Abbr').props().initialism).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});