'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Fa component
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
describe('<Fa />', function () {
  it('should render an <Fa> tag without a theme', function () {
    var renderedComponent = renderComponent({
      trash: true
    });
    expect(renderedComponent.find('FaUnstyled').length).toEqual(1);
  });
  it('should have class .fa-trash', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('i').hasClass('fa-trash')).toBe(true);
  });
  it('should not have attribute trash', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('i').find('[trash]').length).toBe(0);
  });
  it('should render an <Fa> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      trash: true
    });
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a className fa-lgwith a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('i').hasClass('fa-lg')).toBe(true);
  });
});