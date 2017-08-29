'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Flips components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Flip;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('flip', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Flip> tag', function () {
    var renderedComponent = renderComponent(_index.Flip, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FlipX> tag', function () {
    var renderedComponent = renderComponent(_index.FlipX, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FlipY> tag', function () {
    var renderedComponent = renderComponent(_index.FlipY, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});