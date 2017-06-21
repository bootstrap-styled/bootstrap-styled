'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Lightspeeds components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.LightIn;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('lightspeed', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <LightIn> tag', function () {
    var renderedComponent = renderComponent(_index.LightIn, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <LightOut> tag', function () {
    var renderedComponent = renderComponent(_index.LightOut, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});