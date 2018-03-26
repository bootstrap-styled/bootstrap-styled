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

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our Alert component
    */


var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<Alert />', function () {
  var onClick = void 0;
  var toggle = void 0;

  beforeAll(function () {
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render an <Alert> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('AlertUnstyled').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a className .alert by default and with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('div').hasClass('alert')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a Close button that closes Alert without a function', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      uncontrolled: true,
      toggle: toggle
    });
    expect(renderedComponent.find('Fade').props().in).toEqual(true);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('Fade').props().in).toEqual(false);
  });
  it('should have a autoHideDuration props', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      autoHideDuration: 500
    });
    expect(renderedComponent.find('Alert').props().autoHideDuration).toEqual(500);
  });
  it('should send a warninng', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      autoHideDuration: 500,
      onClick: function onClick() {}
    });
    expect(renderedComponent.find('Alert').props().autoHideDuration).toEqual(500);
  });
  it('should have a toggle function', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: onClick
    });
    expect(renderedComponent.find('Close').length).toEqual(1);
    renderedComponent.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});