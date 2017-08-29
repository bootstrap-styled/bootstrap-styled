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
 * Testing our Img component
 */
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

describe('<Img />', function () {
  it('should render an <Img> tag without a theme', function () {
    var renderedComponent = renderComponent({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('Img').length).toBe(1);
  });
  it('should render a <Img> tag with a theme', function () {
    var renderedComponentTheme = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponentTheme.find('Img').length).toBe(1);
  });
  it('should have an attribute alt without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('Img').props().alt).toEqual('test-alt');
  });
  it('should have an attribute src without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test'
    });
    expect(renderedComponent.find('Img').props().src).toEqual('src-test');
  });
  it('should have an attribute fluid without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      fluid: true
    });
    expect(renderedComponent.find('img').hasClass('img-fluid'));
  });
  it('should have an attribute thumbnail without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      thumbnail: true
    });
    expect(renderedComponent.find('img').hasClass('img-thumbnail'));
  });
  it('should have an attribute figure without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      figure: true
    });
    expect(renderedComponent.find('img').hasClass('figure-img'));
  });
});