'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _PaginationLink = require('../PaginationLink');

var _PaginationLink2 = _interopRequireDefault(_PaginationLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our PaginationLink component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _PaginationLink2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _PaginationLink2.default,
      props,
      props.children
    )
  ));
};

describe('<PaginationLink />', function () {
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationLink> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render previous', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PaginationLink2.default, { previous: true }));

    expect(wrapper.prop('aria-label')).toBe('Previous');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\xAB');
    expect(wrapper.find('.sr-only').text()).toBe('Previous');
  });

  it('should render next', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_PaginationLink2.default, { next: true }));

    expect(wrapper.prop('aria-label')).toBe('Next');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\xBB');
    expect(wrapper.find('.sr-only').text()).toBe('Next');
  });
  it('should render custom caret', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _PaginationLink2.default,
      { next: true },
      'Yo'
    ));

    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('Yo');
  });
});