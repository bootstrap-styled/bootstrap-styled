'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../../../BootstrapProvider/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Specials components
 */
var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index3.Flash;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
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
    var renderedComponent = renderComponent(_index3.Flash, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollOut> tag', function () {
    var renderedComponent = renderComponent(_index3.RollOut, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <RollIn> tag', function () {
    var renderedComponent = renderComponent(_index3.RollIn, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Rubber> tag', function () {
    var renderedComponent = renderComponent(_index3.Rubber, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Swing> tag', function () {
    var renderedComponent = renderComponent(_index3.Swing, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Zoom> tag', function () {
    var renderedComponent = renderComponent(_index3.Zoom, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hinge> tag', function () {
    var renderedComponent = renderComponent(_index3.Hinge, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Pulse> tag', function () {
    var renderedComponent = renderComponent(_index3.Pulse, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <ExpandUp> tag', function () {
    var renderedComponent = renderComponent(_index3.ExpandUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Entrance> tag', function () {
    var renderedComponent = renderComponent(_index3.Entrance, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Hatch> tag', function () {
    var renderedComponent = renderComponent(_index3.Hatch, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});