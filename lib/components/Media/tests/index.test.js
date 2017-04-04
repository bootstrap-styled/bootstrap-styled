'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Media component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('div', {}, void 0, _jsx(_index2.default, {
  left: true,
  href: '#'
}, void 0, _jsx(_index2.default, {
  object: true,
  src: 'holder.js/64x64',
  alt: 'Generic placeholder image'
})), _jsx(_index2.default, {
  body: true
}, void 0, _jsx(_index2.default, {
  heading: true
}, void 0, 'Media heading'), 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.', _jsx(_index2.default, {}, void 0, _jsx(_index2.default, {
  left: true,
  href: '#'
}, void 0, _jsx(_index2.default, {
  object: true,
  src: 'holder.js/64x64',
  alt: 'Generic placeholder image'
})), _jsx(_index2.default, {
  body: true
}, void 0, _jsx(_index2.default, {
  heading: true
}, void 0, 'Nested media heading'), 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'))));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_index2.default, props)));
};

var _ref = _jsx('h1', {}, void 0, 'toto');

describe('<Media />', function () {
  it('should render a <Media> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Media> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Media> tag with an H4 and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      heading: true
    });
    expect(renderedComponent.find('H4').length).toBe(3);
  });
  it('should render a <Media> tag with an A and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('A').length).toBe(2);
  });
  it('should render a <Media> tag with an A and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('A').length).toBe(2);
  });
  it('should render a <Media> tag with an Img and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      object: true,
      src: 'http://foobar',
      alt: 'image test'
    });
    expect(renderedComponent.find('Img').length).toBe(1);
  });
  it('should render a <Media> tag with an Ul and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      list: true
    });
    expect(renderedComponent.find('Ul').length).toBe(1);
  });
  it('should have a class media-body', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      body: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-body')).toBe(true);
  });
  it('should have a class media-heading', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('h4').at(0).hasClass('media-heading')).toBe(true);
  });
  it('should have a class media-left', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('a').at(0).hasClass('media-left')).toBe(true);
  });
  it('should have a class media-right', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: _ref,
      right: true
    });
    expect(renderedComponent.find('a.media-right').hasClass('media-right')).toBe(true);
  });
  it('should have a class media-top', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      top: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-top')).toBe(true);
  });
  it('should have a class media-bottom', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      bottom: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-bottom')).toBe(true);
  });
  it('should have a class media-middle', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      middle: true
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-middle')).toBe(true);
  });
  it('should have a class media-object', function () {
    var renderedComponent = renderComponentUsingTheme({
      object: true,
      src: 'http://foobar',
      alt: 'image test'
    });
    expect(renderedComponent.find('img').at(0).hasClass('media-object')).toBe(true);
  });
  it('should have a class media-list', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      list: true
    });
    expect(renderedComponent.find('ul').hasClass('media-list')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});