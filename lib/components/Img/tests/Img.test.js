'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Img component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_index2.default, props)));
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