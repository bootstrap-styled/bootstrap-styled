'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Fades components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.FadeIn;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('fades', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <FadeIn> tag', function () {
    var renderedComponent = renderComponent(_index.FadeIn, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInDown> tag', function () {
    var renderedComponent = renderComponent(_index.FadeInDown, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInUp> tag', function () {
    var renderedComponent = renderComponent(_index.FadeInUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInLeft> tag', function () {
    var renderedComponent = renderComponent(_index.FadeInLeft, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInRight> tag', function () {
    var renderedComponent = renderComponent(_index.FadeInRight, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});