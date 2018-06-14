'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _FaStacked = require('../FaStacked');

var _FaStacked2 = _interopRequireDefault(_FaStacked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our FaStacked component
 */

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_FaStacked2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_FaStacked2.default, props)
  ));
};

describe('<FaStacked />', function () {
  it('should render an <FaStacked> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a class fa-stacked by defaultwithout a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').hasClass('fa-stack')).toBe(true);
  });
  it('should render an <FaStacked> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FaStacked').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a className fa-lgwith a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('span').hasClass('fa-lg')).toBe(true);
  });
});