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
  'option',
  null,
  'test'
); /**
    * Testing our Select component
    */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
    {
      autoFocus: props.autoFocus,
      disabled: props.disabled,
      form: props.form,
      multiple: props.multiple,
      name: props.name,
      required: props.required,
      size: props.size,
      className: props.className
    },
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      _index2.default,
      {
        autoFocus: props.autoFocus,
        disabled: props.disabled,
        form: props.form,
        multiple: props.multiple,
        name: props.name,
        required: props.required,
        size: props.size,
        className: props.className
      },
      children
    )
  ));
};

describe('<Select />', function () {
  it('should render an <Select> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('SelectUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Select> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Select').length).toBe(1);
    expect(renderedComponent.find('select').length).toBe(1);
  });
  it('should have a class .select bu default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('select').hasClass('select')).toBe(true);
  });
  it('should have an attribute autoFocus with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      autoFocus: true
    });
    expect(renderedComponent.find('select').props().autoFocus).toBe(true);
  });
  it('should have a class .disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('select').props().disabled).toBe(true);
  });
  it('should have an attribute form with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      form: 'test-form'
    });
    expect(renderedComponent.find('select').props().form).toBe('test-form');
  });
  it('should have an attribute multiple with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      multiple: true
    });
    expect(renderedComponent.find('select').props().multiple).toBe(true);
  });
  it('should have an attribute name with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      name: 'test-name'
    });
    expect(renderedComponent.find('select').props().name).toBe('test-name');
  });
  it('should have an attribute required with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      required: true
    });
    expect(renderedComponent.find('select').props().required).toBe(true);
  });
  it('should have an attribute size with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      size: 'test-size'
    });
    expect(renderedComponent.find('select').props().size).toBe('test-size');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should not apply android fix', function () {
    var renderedComponent = renderComponentUsingTheme({
      className: 'form-control',
      children: children
    });
    expect(renderedComponent.find('select').props().className.indexOf('form-control') > -1).toBe(true);
  });
  it('should apply android fix', function () {
    /* eslint-disable no-restricted-properties, no-underscore-dangle */
    navigator.__defineGetter__('userAgent', function () {
      return 'Mozilla/5.0 Android AppleWebKit';
    }); // customized user agent
    /* eslint-enable no-restricted-properties, no-underscore-dangle */
    var renderedComponent = renderComponentUsingTheme({
      className: 'form-control',
      children: children
    });
    expect(renderedComponent.find('select').props().className.indexOf('form-control')).toBe(-1);
  });
});