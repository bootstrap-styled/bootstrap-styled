'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var _ref = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(_DropdownToggle2.default, {}, void 0, children));

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  return (0, _enzyme.mount)(_ref);
};

var _ref2 = _jsx(_DropdownToggle2.default, {
  'aria-label': 'Dropup Toggle'
});

describe('<DropdownToggle />', function () {
  var isOpen = void 0;
  var toggle = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = function toggle() {
      isOpen = !isOpen;
    };
  });

  it('should render an <DropdownToggle> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should add default sr-only content', function () {
    var renderedComponent = renderComponentUsingTheme();
    console.log(renderedComponent.debug());
    expect(renderedComponent.text()).toBe('Toggle Dropdown');
    expect(renderedComponent.find('.sr-only').length).toBe(1);
  });
  it('should add default sr-only content', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref2, {
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });

    expect(renderedComponent.text()).toBe('Dropup Toggle');
    expect(renderedComponent.find('.sr-only').length).toBe(1);
  });
  it('should render a caret', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', function () {
    it('should call props.onClick if it exists', function () {
      var functionTest = jest.fn();
      var renderedComponent = renderComponentUsingTheme();
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', function () {
      var functionTest = jest.fn();
      var renderedComponent = renderComponentUsingTheme();
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
  });

  describe('nav', function () {
    it('should add .nav-link class', function () {
      var renderedComponent = renderComponentUsingTheme();
      expect(renderedComponent.find('a').length).toBe(1);
      expect(renderedComponent.find('.nav-link').length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', function () {
      var renderedComponent = renderComponentUsingTheme();
      expect(renderedComponent.find('[aria-haspopup="true"]').prop('tag')).toBe(undefined);
    });
  });
});