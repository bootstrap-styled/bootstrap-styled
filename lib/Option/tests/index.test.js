'use strict';

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = 'test'; /**
                        * Testing our Option component
                        */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    'select',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      props.children
    )
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      'select',
      null,
      _react2.default.createElement(
        _index2.default,
        null,
        props.children
      )
    )
  ));
};

describe('<Option />', function () {
  it('should render an <Option> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  });
  it('should have text node without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
  it('should render an <Option> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').length).toBe(1);
  });
  // it('should have an attribute selected with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     selected: true,
  //   });
  //   expect(renderedComponent.find('option').props().selected).toBe(true);
  // });
  // it('should have a class .disabled with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     disabled: true,
  //   });
  //   expect(renderedComponent.find('option').hasClass('disabled')).toBe(true);
  // });
  // it('should have an attribute label with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     label: 'test-label',
  //   });
  //   expect(renderedComponent.find('option').props().label).toBe('test-label');
  // });
  // it('should have an attribute value with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     value: 'test-value',
  //   });
  //   expect(renderedComponent.find('option').props().value).toBe('test-value');
  // });
  it('should have text node with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('option').text()).toEqual(children);
  });
});