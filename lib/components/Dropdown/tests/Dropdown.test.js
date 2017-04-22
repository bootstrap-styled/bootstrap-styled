'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Dropdown component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


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

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_Dropdown2.default, props)));
};

var _ref3 = _jsx(_DropdownToggle2.default, {}, void 0, 'Toggle');

var _ref4 = _jsx(_DropdownMenu2.default, {}, void 0, _jsx(_DropdownItem2.default, {}, void 0, 'Test'));

var _ref6 = _jsx(_DropdownToggle2.default, {}, void 0, 'Toggle');

var _ref7 = _jsx(_DropdownMenu2.default, {}, void 0, _jsx(_DropdownItem2.default, {}, void 0, 'Test'));

var _ref8 = _jsx(_DropdownToggle2.default, {}, void 0, 'Toggle');

var _ref9 = _jsx(_DropdownMenu2.default, {
  right: true
}, void 0, _jsx(_DropdownItem2.default, {}, void 0, 'Test'));

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

  var _ref = _jsx(_Dropdown2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Ello world');

  it('should render a single child', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref);

    expect(renderedComponent.text()).toBe('Ello world');
    expect(renderedComponent.find('.dropdown').length).toBe(1);
  });

  var _ref2 = _jsx(_Dropdown2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, _ref6, _ref7);

  it('should render multiple children when isOpen is true', function () {
    isOpen = true;
    var renderedComponent = (0, _enzyme.mount)(_ref2);

    expect(renderedComponent.find('.btn').text()).toBe('Toggle');
    expect(renderedComponent.find('.dropdown').length).toBe(1);
    expect(renderedComponent.find('.dropdown-item').length).toBe(1);
    expect(renderedComponent.children().length).toBe(2);
  });

  it('should not call props.toggle when disabled ', function () {
    isOpen = true;
    var toggleTest = jest.fn();
    var renderedComponent = (0, _enzyme.mount)(_jsx(_Dropdown2.default, {
      isOpen: isOpen,
      toggle: toggleTest,
      disabled: true
    }, void 0, _ref3, _ref4));
    renderedComponent.find('Dropdown').simulate('click');
    expect(toggleTest).not.toHaveBeenCalled();
  });

  var _ref5 = _jsx(_Dropdown2.default, {
    isOpen: isOpen,
    toggle: toggle,
    tether: true,
    dropup: true
  }, void 0, _ref8, _ref9);

  describe('getTetherConfig', function () {
    it('should apply dropup tether values', function () {
      isOpen = true;
      var renderedComponent = (0, _enzyme.mount)(_ref5);
      expect(renderedComponent.find(_TetherContent2.default).props().tether.attachment).toBe('bottom right');
      expect(renderedComponent.find(_TetherContent2.default).props().tether.targetAttachment).toBe('top right');
      renderedComponent.unmount();
    });
  });
});