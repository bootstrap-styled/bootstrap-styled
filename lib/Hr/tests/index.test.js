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

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
    className: props.className
  }));
}; /**
    * Testing our Hr component
    */


var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(_index2.default, {
      className: props.className
    })
  ));
};

describe('<Hr />', function () {
  it('should render an <Hr> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('hr').length).toBe(1);
  });
  it('should render a <hr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('hr').length).toBe(1);
  });
});