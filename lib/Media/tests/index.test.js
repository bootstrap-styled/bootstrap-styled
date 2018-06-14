'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Media component
 */

var children = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _index2.default,
    { left: true, href: '#' },
    _react2.default.createElement(_index2.default, { object: true, src: 'holder.js/64x64', alt: 'Generic placeholder image' })
  ),
  _react2.default.createElement(
    _index2.default,
    { body: true },
    _react2.default.createElement(
      _index2.default,
      { heading: true },
      'Media heading'
    ),
    'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        _index2.default,
        { left: true, href: '#' },
        _react2.default.createElement(_index2.default, { object: true, src: 'holder.js/64x64', alt: 'Generic placeholder image' })
      ),
      _react2.default.createElement(
        _index2.default,
        { body: true },
        _react2.default.createElement(
          _index2.default,
          { heading: true },
          'Nested media heading'
        ),
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      )
    )
  )
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, props)
  ));
};

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
      children: _react2.default.createElement(
        'h1',
        null,
        'toto'
      ),
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