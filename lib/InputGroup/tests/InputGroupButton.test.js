'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputGroupButton = require('../InputGroupButton');

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our InputGroupButton component
    */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _InputGroupButton2.default,
    null,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _InputGroupButton2.default,
      null,
      props.children
    )
  ));
};

describe('<InputGroupButton />', function () {
  it('should render an <InputGroupButton> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have class input-group-btn', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('div').at(1).hasClass('input-group-btn')).toBe(true);
  });
  describe('Shorthand usage', function () {
    it('should render a child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        null,
        'Yo!'
      ));
      expect(wrapper.childAt(0).type()).toBe(_Button2.default);
    });

    it('should render the string provided in the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        null,
        'Yo!'
      ));

      expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        { color: 'primary' },
        'Yo!'
      ));

      expect(wrapper.childAt(0).prop('color')).toBe('primary');
    });

    it('should render additional classes on the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        { className: 'yo' },
        'Yo!'
      ));

      expect(wrapper.childAt(0).hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        { groupClassName: 'other' },
        'Yo!'
      ));

      expect(wrapper.hasClass('other')).toBe(true);
      expect(wrapper.hasClass('input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _InputGroupButton2.default,
        { groupAttributes: { style: { textAlign: 'left' } } },
        'Yo!'
      ));

      expect(wrapper.prop('style').textAlign).toBe('left');
    });
  });
});