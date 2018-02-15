'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tr = require('../Tr');

var _Tr2 = _interopRequireDefault(_Tr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'span',
  null,
  ' test '
); /**
    * Testing our Tr component
    */

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Tr2.default,
    props,
    children
  ));
};

describe('<Tr />', function () {
  it('should render a <Tr> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('tr').length).toBe(1);
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
    expect(renderedComponent.find('tr').hasClass('table-active')).toBe(true);
  });
});