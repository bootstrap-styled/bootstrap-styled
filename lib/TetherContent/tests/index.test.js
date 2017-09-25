'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'p',
  null,
  'Test'
); /**
    * Testing our TetherContent component
    */

var functionTest = jest.fn();
var tetherConfig = {};
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
    {
      className: props.className,
      tether: tetherConfig,
      tetherRef: props.tetherRef,
      isOpen: props.isOpen,
      toggle: functionTest
    },
    children
  ));
};

describe('<TetherContent />', function () {
  it('should render an <Output> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});