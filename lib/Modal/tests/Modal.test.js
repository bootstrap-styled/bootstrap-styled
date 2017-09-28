'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Modal component
 */

var children = _react2.default.createElement(
  'span',
  null,
  'Yo!'
);

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_Modal2.default, props)
  ));
};

describe('<Modal />', function () {
  it('should render an <Modal> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('ModalUnstyled').length).toBe(1);
  });

  var isOpen = void 0;
  var toggle = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = jest.fn();
  });

  it('should render with the class "modal-dialog"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle }));
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    wrapper.unmount();
  });
  it('should render with the backdrop with the class "modal-backdrop" by default', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle }));
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });
  it('should render with no children', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Modal2.default,
      { isOpen: isOpen, onBackdrop: toggle },
      children
    ));
    expect(wrapper.find('ModalUnstyled').contains(children)).toBe(false);
    wrapper.unmount();
  });
  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, backdrop: 'static' }));
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });
  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, backdrop: false }));
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" and have custom class name if provided', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, className: 'my-custom-modal' }));
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal" and have custom class name if provided with modalClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, modalClassName: 'my-custom-modal' }));
    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with custom class name if provided with wrapClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, wrapClassName: 'my-custom-modal' }));
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, contentClassName: 'my-custom-modal' }));
    expect(document.querySelectorAll('.modal-content.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, backdropClassName: 'my-custom-modal' }));
    expect(document.querySelectorAll('.modal-backdrop.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the class modal-md when size is passed', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle, size: 'md' }));
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-md').length).toBe(1);
    wrapper.unmount();
  });

  it('should render modal when isOpen is true', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle }));
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render modal when isOpen is false', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle }));
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should toggle modal', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('button', { onClick: toggle }),
      _react2.default.createElement(_Modal2.default, { isOpen: isOpen, onBackdrop: toggle })
    ));
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.find('button').simulate('click');
    expect(toggle).toHaveBeenCalled();
  });
});