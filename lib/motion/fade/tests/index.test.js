'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../../../BootstrapProvider/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Fades components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index3.FadeIn;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
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
    var renderedComponent = renderComponent(_index3.FadeIn, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInDown> tag', function () {
    var renderedComponent = renderComponent(_index3.FadeInDown, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInUp> tag', function () {
    var renderedComponent = renderComponent(_index3.FadeInUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInLeft> tag', function () {
    var renderedComponent = renderComponent(_index3.FadeInLeft, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInRight> tag', function () {
    var renderedComponent = renderComponent(_index3.FadeInRight, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});