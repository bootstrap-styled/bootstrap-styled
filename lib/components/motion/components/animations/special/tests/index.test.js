'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Specials components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Flash;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(EffectComponent, props)
  ));
};

describe('specials', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Flash> tag', function () {
    var renderedComponent = renderComponent(_index.Flash, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollOut> tag', function () {
    var renderedComponent = renderComponent(_index.RollOut, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollIn> tag', function () {
    var renderedComponent = renderComponent(_index.RollIn, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Rubber> tag', function () {
    var renderedComponent = renderComponent(_index.Rubber, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Swing> tag', function () {
    var renderedComponent = renderComponent(_index.Swing, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Zoom> tag', function () {
    var renderedComponent = renderComponent(_index.Zoom, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hinge> tag', function () {
    var renderedComponent = renderComponent(_index.Hinge, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Pulse> tag', function () {
    var renderedComponent = renderComponent(_index.Pulse, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <ExpandUp> tag', function () {
    var renderedComponent = renderComponent(_index.ExpandUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Entrance> tag', function () {
    var renderedComponent = renderComponent(_index.Entrance, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hatch> tag', function () {
    var renderedComponent = renderComponent(_index.Hatch, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});