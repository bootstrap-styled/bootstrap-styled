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
 * Testing our Input component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<Input />', function () {
  it('should render an <Input> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('InputUnstyled').length).toBe(1);
  });
  it('should have an attribute type without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'button'
    });
    expect(renderedComponent.props().type).toEqual('button');
  });
  it('should have an attribute placeholder without a theme', function () {
    var renderedComponent = renderComponent({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.props().placeholder).toEqual('Enter your input here');
  });
  it('should render a <input> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('input').length).toBe(1);
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'button'
    });
    expect(renderedComponent.find('input').props().type).toEqual('button');
  });
  it('should have an attribute placeholder with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.find('input').props().placeholder).toEqual('Enter your input here');
  });
  it('should have a class form-control-static if static: true with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      static: true
    });
    expect(renderedComponent.find('Input').hasClass('form-control-static'));
  });
  it('should have a class form-control-file if type: file with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'file'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-file'));
  });
  it('should have a class form-check-input if addon: true with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      addon: false
    });
    expect(renderedComponent.find('Input').hasClass('form-check-input'));
  });
  it('should have a class form-control-state-success with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      state: 'success'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-state-success'));
  });
  it('should have a class form-control-size-sm with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'sm'
    });
    expect(renderedComponent.find('Input').hasClass('form-control-size-sm'));
  });
  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { addon: true, type: 'checkbox' }));

    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { addon: true, type: 'radio' }));

    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });
});