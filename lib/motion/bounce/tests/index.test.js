'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../../../BootstrapProvider/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Bounces components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index3.Bounce;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('bounce', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Bounce> tag', function () {
    var renderedComponent = renderComponent(_index3.Bounce, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceDown> tag', function () {
    var renderedComponent = renderComponent(_index3.BounceDown, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceUp> tag', function () {
    var renderedComponent = renderComponent(_index3.BounceUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceLeft> tag', function () {
    var renderedComponent = renderComponent(_index3.BounceLeft, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceRight> tag', function () {
    var renderedComponent = renderComponent(_index3.BounceRight, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});