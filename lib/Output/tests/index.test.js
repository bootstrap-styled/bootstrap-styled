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
    className: props.className,
    htmlFor: props.htmlFor,
    form: props.form,
    name: props.name
  }));
}; /**
    * Testing our Output component
    */


var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(_index2.default, {
      className: props.className,
      htmlFor: props.htmlFor,
      form: props.form,
      name: props.name
    })
  ));
};

describe('<Output />', function () {
  it('should render an <Output> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('OutputUnstyled').length).toBe(1);
  });
  it('should render an <Output> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('output').length).toBe(1);
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should have an attribute htmlFor with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      htmlFor: 'a b'
    });
    expect(renderedComponent.find('output').props().htmlFor).toBe('a b');
  });
  it('should have an attribute form with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      form: 'form-test'
    });
    expect(renderedComponent.find('output').props().form).toBe('form-test');
  });
  it('should have an attribute name with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      name: 'name-test'
    });
    expect(renderedComponent.find('output').props().name).toBe('name-test');
  });
});