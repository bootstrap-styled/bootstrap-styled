'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _FigCaption = require('../FigCaption');

var _FigCaption2 = _interopRequireDefault(_FigCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = 'Test'; /**
                        * Testing our FigCaption component
                        */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _FigCaption2.default,
    props,
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      _FigCaption2.default,
      props,
      children
    )
  ));
};

describe('<FigCaption />', function () {
  it('should render an <FigCaption> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('FigCaptionUnstyled').length).toBe(1);
  });
  it('should contain children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figcaption> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('figcaption').length).toBe(1);
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should render a <figcaption> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      right: true
    });
    expect(renderedComponent.find('FigCaption').props().right).toBe(true);
  });
});