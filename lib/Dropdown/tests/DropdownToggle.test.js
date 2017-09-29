'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Testing our Dropdown component
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _DropdownItem = require('../DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownToggle = require('../DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = require('../DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var isOpen = void 0;
var toggle = void 0;
var onClick = void 0;

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _Dropdown2.default,
      { isOpen: isOpen, toggle: toggle },
      _react2.default.createElement(
        _DropdownToggle2.default,
        _extends({ onClick: onClick }, props),
        children
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        _react2.default.createElement(
          _DropdownItem2.default,
          null,
          children
        )
      )
    )
  ));
};

describe('<DropdownToggle />', function () {
  beforeEach(function () {
    isOpen = false;
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render an <DropdownToggle> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a caret', function () {
    var renderedComponent = renderComponentUsingTheme({
      caret: true
    });
    expect(renderedComponent.find('Button').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', function () {
    var renderedComponent = renderComponentUsingTheme({
      split: true
    });
    expect(renderedComponent.find('Button').hasClass('dropdown-toggle-split')).toBe(true);
  });
});