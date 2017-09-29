'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = require('../DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownMenu = require('../DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = require('../DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _TetherContent = require('../../TetherContent');

var _TetherContent2 = _interopRequireDefault(_TetherContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Dropdown component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_Dropdown2.default, props)
  ));
};

describe('Dropdown', function () {
  var isOpen = void 0;
  var toggle = void 0;
  var element = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = jest.fn();
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(function () {
    document.body.removeChild(element);
    element = null;
  });

  describe('<Dropdown />', function () {
    it('should render an <Dropdown> tag with a theme', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        isOpen: isOpen,
        toggle: toggle
      });
      expect(renderedComponent.find('Dropdown').length).toBe(1);
    });
    it('should have children with a theme', function () {
      var renderedComponent = renderComponentUsingTheme({
        children: children,
        isOpen: isOpen,
        toggle: toggle
      });
      expect(renderedComponent.contains(children)).toEqual(true);
    });
  });

  it('should render a single child', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _Dropdown2.default,
      { isOpen: isOpen, toggle: toggle },
      'Ello world'
    ));

    expect(renderedComponent.text()).toBe('Ello world');
    expect(renderedComponent.find('.dropdown').length).toBe(1);
  });

  it('should render children when isOpen is true', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _Dropdown2.default,
      { isOpen: isOpen, toggle: toggle },
      _react2.default.createElement(
        _DropdownToggle2.default,
        null,
        'Toggle'
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        _react2.default.createElement(
          _DropdownItem2.default,
          null,
          'Test'
        )
      )
    ));

    expect(renderedComponent.find('.btn').text()).toBe('Toggle');
    expect(renderedComponent.find('Dropdown').length).toBe(1);
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
    expect(renderedComponent.children().length).toBe(1);
  });

  it('should not call props.toggle when disabled ', function () {
    isOpen = true;
    var toggleTest = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _Dropdown2.default,
      { isOpen: isOpen, toggle: toggleTest, disabled: true },
      _react2.default.createElement(
        _DropdownToggle2.default,
        null,
        'Toggle'
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        _react2.default.createElement(
          _DropdownItem2.default,
          null,
          'Test'
        )
      )
    ));
    renderedComponent.find('Dropdown').simulate('click');
    expect(toggleTest).not.toHaveBeenCalled();
  });

  describe('getTetherConfig', function () {
    it('should apply dropup tether values', function () {
      isOpen = true;
      var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
        _Dropdown2.default,
        { isOpen: isOpen, toggle: toggle, tether: true, dropup: true },
        _react2.default.createElement(
          _DropdownToggle2.default,
          null,
          'Toggle'
        ),
        _react2.default.createElement(
          _DropdownMenu2.default,
          { right: true },
          _react2.default.createElement(
            _DropdownItem2.default,
            null,
            'Test'
          )
        )
      ));
      expect(renderedComponent.find(_TetherContent2.default).props().tether.attachment).toBe('bottom right');
      expect(renderedComponent.find(_TetherContent2.default).props().tether.targetAttachment).toBe('top right');
      renderedComponent.unmount();
    });
  });
});