'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _CardImg = require('../CardImg');

var _CardImg2 = _interopRequireDefault(_CardImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our CardImg component
 */
var renderComponent = function renderComponent(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_CardImg2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_CardImg2.default, props)
  ));
};

describe('<CardImg />', function () {
  it('should render an <CardImg> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should render an <CardImg> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('CardImg').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should have an attribute top without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      top: true
    });
    expect(renderedComponent.find('CardImg').props().top).toBe(true);
  });
  it('should have an attribute bottom without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      bottom: true
    });
    expect(renderedComponent.find('CardImg').props().bottom).toBe(true);
  });
  it('should have a class .card-img by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img').hasClass('card-img')).toBe(true);
  });
});