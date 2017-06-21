'use strict';

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
); /**
    * Testing our Dropdown component
    */


var dropdownOpen = void 0;
var toggle = void 0;
var onClick = void 0;

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _Dropdown2.default,
      { isOpen: dropdownOpen, toggle: toggle },
      _react2.default.createElement(
        _DropdownToggle2.default,
        { caret: true },
        'Dropdown'
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        _react2.default.createElement(
          _DropdownItem2.default,
          props,
          children
        )
      )
    )
  ));
};

describe('<DropdownItem />', function () {
  beforeEach(function () {
    dropdownOpen = false;
    toggle = jest.fn();
    onClick = jest.fn();
  });
  it('should render an <DropdownItem> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _DropdownItem2.default,
        { header: true },
        'Heading'
      ));

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _DropdownItem2.default,
        { header: true },
        'Heading'
      ));

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  describe('divider', function () {
    it('should render a divider element', function () {
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(_DropdownItem2.default, { divider: true }));
      expect(renderedComponent.find('.dropdown-divider').length).toBe(1);
    });
  });
  describe('onClick', function () {
    it('should not be called when disabled', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _DropdownItem2.default,
        { disabled: true },
        'Item'
      ));
      renderedComponent.find('button').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when divider is set', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(_DropdownItem2.default, { divider: true }));
      renderedComponent.find('div').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when header item', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _DropdownItem2.default,
        { header: true },
        'Header'
      ));
      renderedComponent.find('h6').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should call toggle', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _DropdownItem2.default,
        null,
        'Click me'
      ), {
        context: {
          toggle: functionTest
        }
      });
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
    it('should call onClick', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        onClick: onClick
      });
      renderedComponent.find('button').at(1).simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});