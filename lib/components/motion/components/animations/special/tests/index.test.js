'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Specials components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Flash;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(EffectComponent, props)));
};

var _ref = _jsx('h1', {}, void 0, 'Test');

describe('specials', function () {
  var children = void 0;
  beforeAll(function () {
    children = _ref;
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