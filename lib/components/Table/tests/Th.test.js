'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Th = require('../Th');

var _Th2 = _interopRequireDefault(_Th);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'span',
  null,
  ' test '
); /**
    * Testing our Th component
    */

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Th2.default,
    props,
    children
  ));
};

describe('<Th />', function () {
  it('should render a <Th> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('th').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponent({
      children: children,
      color: 'active'
    });
    expect(renderedComponent.find('th').hasClass('table-active')).toBe(true);
  });
});