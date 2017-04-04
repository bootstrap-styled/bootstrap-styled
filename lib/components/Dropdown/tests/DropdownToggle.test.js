'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Dropdown component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _DropdownToggle = require('../DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isOpen = props.isOpen,
      toggle = props.toggle,
      rest = _objectWithoutProperties(props, ['isOpen', 'toggle']);

  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _jsx(_Dropdown2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, _react2.default.createElement(_DropdownToggle2.default, rest))));
};

var _ref = _jsx(_DropdownToggle2.default, {});

var _ref2 = _jsx(_DropdownToggle2.default, {
  'aria-label': 'Dropup Toggle'
});

var _ref3 = _jsx(_DropdownToggle2.default, {
  caret: true
}, void 0, 'Hello world');

var _ref4 = _jsx(_DropdownToggle2.default, {
  split: true
}, void 0, 'Hello world');

var _ref5 = _jsx(_DropdownToggle2.default, {}, void 0, 'Hello world');

var _ref6 = _jsx(_DropdownToggle2.default, {}, void 0, 'Hello world');

var _ref7 = _jsx(_DropdownToggle2.default, {
  nav: true
}, void 0, 'Hello world');

var _ref8 = _jsx(_DropdownToggle2.default, {
  nav: true,
  tag: 'span'
}, void 0, 'Hello world');

describe('<DropdownToggle />', function () {
  var isOpen = void 0;
  var toggle = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = jest.fn();
  });

  it('should render an <DropdownToggle> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpen: isOpen,
      toggle: toggle
    });
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpen: isOpen,
      toggle: toggle
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should add default sr-only content', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref, {
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });

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
    var renderedComponent = (0, _enzyme.mount)(_ref3, {
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });

    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref4, {
      context: {
        isOpen: isOpen,
        toggle: toggle
      }
    });

    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', function () {
    it('should call props.onClick if it exists', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref5, {
        context: {
          isOpen: isOpen,
          toggle: functionTest
        }
      });
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref6, {
        context: {
          isOpen: isOpen,
          toggle: functionTest
        }
      });
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
  });

  describe('nav', function () {
    it('should add .nav-link class', function () {
      var renderedComponent = (0, _enzyme.mount)(_ref7, {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      });

      expect(renderedComponent.find('a').length).toBe(1);
      expect(renderedComponent.find('.nav-link').length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', function () {
      var renderedComponent = (0, _enzyme.mount)(_ref8, {
        context: {
          isOpen: isOpen,
          toggle: toggle
        }
      });

      expect(renderedComponent.find('[aria-haspopup="true"]').prop('tag')).toBe(undefined);
    });
  });
});