'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fa = require('../Fa');

var _Fa2 = _interopRequireDefault(_Fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Fa2.default, props));
}; /**
    * Testing our Fa component
    */

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Fa2.default, props));
};

describe('<Fa />', function () {
  it('should render an <Fa> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a props user with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      user: true
    });
    expect(renderedComponent.find('Fa').props().user).toEqual(true);
  });
  it('should render an <i class="fa fa-user"> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      size: 'lg'
    });
    expect(renderedComponent.find('Fa').props().size).toEqual('lg');
  });
});