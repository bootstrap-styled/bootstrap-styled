'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Modal component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'test');

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _Modal2.default,
    props,
    children
  )));
};

describe('<Modal />', function () {
  it('should render an <Modal> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Modal').length).toBe(1);
  });

  var isOpen = void 0;
  var toggle = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = function toggle() {
      isOpen = !isOpen;
    };
  });

  var _ref = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Yo!');

  it('should render with the class "modal-dialog"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    wrapper.unmount();
  });

  var _ref2 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Yo!');

  it('should render with the backdrop with the class "modal-backdrop" by default', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref2);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  var _ref3 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    backdrop: 'static'
  }, void 0, 'Yo!');

  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref3);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  var _ref4 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    backdrop: false
  }, void 0, 'Yo!');

  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref4);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  var _ref5 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    className: 'my-custom-modal'
  }, void 0, 'Yo!');

  it('should render with class "modal-dialog" and have custom class name if provided', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref5);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  var _ref6 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    modalClassName: 'my-custom-modal'
  }, void 0, 'Yo!');

  it('should render with class "modal" and have custom class name if provided with modalClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref6);

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  var _ref7 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    wrapClassName: 'my-custom-modal'
  }, void 0, 'Yo!');

  it('should render with custom class name if provided with wrapClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref7);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  var _ref8 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    contentClassName: 'my-custom-modal'
  }, void 0, 'Yo!');

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref8);

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-content.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  var _ref9 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    backdropClassName: 'my-custom-modal'
  }, void 0, 'Yo!');

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref9);

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-backdrop.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  var _ref10 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle,
    size: 'md'
  }, void 0, 'Yo!');

  it('should render with the class modal-md when size is passed', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref10);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-md').length).toBe(1);
    wrapper.unmount();
  });

  var _ref11 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Yo!');

  it('should render modal when isOpen is true', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_ref11);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  var _ref12 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Yo!');

  it('should not render modal when isOpen is false', function () {
    var wrapper = (0, _enzyme.mount)(_ref12);

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  var _ref13 = _jsx(_Modal2.default, {
    isOpen: isOpen,
    toggle: toggle
  }, void 0, 'Yo!');

  it('should toggle modal', function () {
    var wrapper = (0, _enzyme.mount)(_ref13);

    expect(isOpen).toBe(false);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen: isOpen
    });

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });
});