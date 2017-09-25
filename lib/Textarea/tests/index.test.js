'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
}; /**
    * Testing our Textarea component
    */

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<Textarea />', function () {
  var onChange = void 0;

  beforeEach(function () {
    onChange = jest.fn();
  });

  it('should render an <Textarea> tag without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });

  it('should have a value attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.props().value).toEqual('Insert text here');
  });

  it('should adopt a wrap attribute without a theme', function () {
    var renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.props().wrap).toEqual('wrapString');
  });
  it('should render one <Textarea> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should render a value attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').props().value).toEqual('Insert text here');
  });
  it('should render an wrap attribute of <Textarea> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange: onChange
    });
    expect(renderedComponent.find('textarea').props().wrap).toEqual('wrapString');
  });
  it('should have content with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      onChange: onChange
    });
    expect(renderedComponent.text()).toEqual('Insert text here');
  });
});