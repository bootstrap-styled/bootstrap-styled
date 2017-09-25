'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../../../BootstrapProvider/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Filters components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index3.Blur;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('filters', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Blur> tag', function () {
    var renderedComponent = renderComponent(_index3.Blur, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Contrast> tag', function () {
    var renderedComponent = renderComponent(_index3.Contrast, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Brightness> tag', function () {
    var renderedComponent = renderComponent(_index3.Brightness, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Grayscale> tag', function () {
    var renderedComponent = renderComponent(_index3.Grayscale, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <HueRotate> tag', function () {
    var renderedComponent = renderComponent(_index3.HueRotate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Invert> tag', function () {
    var renderedComponent = renderComponent(_index3.Invert, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Opacity> tag', function () {
    var renderedComponent = renderComponent(_index3.Opacity, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Saturate> tag', function () {
    var renderedComponent = renderComponent(_index3.Saturate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Sepia> tag', function () {
    var renderedComponent = renderComponent(_index3.Sepia, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Dropshadow> tag', function () {
    var renderedComponent = renderComponent(_index3.Dropshadow, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});