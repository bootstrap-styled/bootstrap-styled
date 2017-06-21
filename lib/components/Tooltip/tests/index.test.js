'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findDOMNode = require('react-dom/lib/findDOMNode');

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

var _enzyme = require('enzyme');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
describe('Tooltip', function () {
  var isOpen = void 0;
  var toggle = void 0;
  var toggleSpy = void 0;
  var element = void 0;
  var container = void 0;
  var target = void 0;
  var innerTarget = void 0;

  beforeEach(function () {
    isOpen = false;
    toggle = function toggle() {
      isOpen = !isOpen;
    };
    toggleSpy = jest.fn();
    element = document.createElement('div');
    container = document.createElement('div');
    element.innerHTML = '<p id="target">This is the tooltip <span id="innerTarget">target</span>.</p>';
    element.setAttribute('id', 'testContainer');
    container.setAttribute('id', 'container');
    element.appendChild(container);
    document.body.appendChild(element);
    target = document.getElementById('target');
    innerTarget = document.getElementById('innerTarget');

    jasmine.clock().install();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
    document.body.removeChild(element);
    element = null;
    container = null;
    target = null;
    innerTarget = null;
  });

  it('should not render children if isOpen is false', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();
    var tooltips = document.getElementsByClassName('tooltip');

    expect((0, _findDOMNode2.default)(instance)).toBe(null);
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(0);
    expect(target.className).toBe('');
    expect(tooltips.length).toBe(0);
    wrapper.detach();
  });

  it('should render if isOpen is true', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();
    var tooltips = document.getElementsByClassName('tooltip');

    expect((0, _findDOMNode2.default)(instance)).toBe(null);
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(1);
    expect(target.className.indexOf('bs-tether-target') > -1).toBe(true);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should render with target object', function () {
    isOpen = true;
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: document.getElementById('target'), isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();
    var tooltips = document.getElementsByClassName('tooltip');

    expect((0, _findDOMNode2.default)(instance)).toBe(null);
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(1);
    expect(target.className.indexOf('bs-tether-target') > -1).toBe(true);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should toggle isOpen', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });

    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.setProps({ isOpen: true });
    expect(document.getElementsByClassName('tooltip').length).toBe(1);
    wrapper.setProps({ isOpen: false });
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should handle target clicks', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should handle inner target clicks', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    expect(isOpen).toBe(true);
    wrapper.detach();
  });

  it('should not do anything when document click outside of target', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear hide timeout if it exists on target click', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', isOpen: isOpen, toggle: toggle, delay: 200 },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();

    instance.onMouseLeaveTooltip();
    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: target });
    jasmine.clock().tick(200);
    expect(isOpen).toBe(true);
    wrapper.setProps({ isOpen: isOpen });
    instance.handleDocumentClick({ target: target });
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should not call props.toggle when disabled ', function () {
    var props = jasmine.createSpyObj('props', ['toggle']);
    var event = jasmine.createSpyObj('event', ['preventDefault']);

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index.TooltipUnstyled,
      { target: 'target', disabled: true, isOpen: isOpen, toggle: props.toggle },
      'Tooltip Content'
    ), { attachTo: container });
    var instance = wrapper.instance();

    instance.toggle(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.toggle).not.toHaveBeenCalled();

    wrapper.detach();
  });

  // it('should not throw when props.toggle is not provided ', () => {
  //   const event = jasmine.createSpyObj('event', ['preventDefault']);
  //
  //   const wrapper = mount(
  //     <Tooltip target="target" isOpen={isOpen}>
  //       Tooltip Content
  //     </Tooltip>,
  //     { attachTo: container }
  //   );
  //   const instance = wrapper.instance();
  //
  //   instance.toggle(event);
  //
  //   wrapper.detach();
  // });

  describe('delay', function () {
    it('should accept a number', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggle, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(200);
      expect(isOpen).toBe(false);
    });

    it('should accept an object', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggle, delay: { show: 200, hide: 200 } },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(200);
      expect(isOpen).toBe(false);
    });

    it('should use default value if value is missing from object', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggle, delay: { show: 0 } },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(250); // Default hide value: 250
      expect(isOpen).toBe(false);
    });
  });

  describe('hide', function () {
    it('should call toggle when isOpen', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.hide();

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.hide();

      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('show', function () {
    it('should call toggle when isOpen is false', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.show();

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggle },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.show();

      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseOverTooltip', function () {
    it('should clear timeout if it exists on target click', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseLeaveTooltip();

      expect(isOpen).toBe(false);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseOverTooltip();
      jasmine.clock().tick(200);

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy, delay: 0 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseOverTooltip();
      jasmine.clock().tick(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseLeaveTooltip', function () {
    it('should clear timeout if it exists on target click', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseOverTooltip();

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltip();
      jasmine.clock().tick(200);

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen is false', function () {
      isOpen = false;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', isOpen: isOpen, toggle: toggleSpy, delay: 0 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      jasmine.clock().tick(0); // delay: 0 toggle is still async

      expect(isOpen).toBe(false);
      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('autohide', function () {
    it('should keep tooltip around when false and onmouseleave from tooltip content', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', autohide: false, isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltipContent();
      jasmine.clock().tick(100);
      expect(toggleSpy).not.toHaveBeenCalled();
      jasmine.clock().tick(200);
      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('clears showTimeout in onMouseLeaveTooltipContent', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', autohide: false, isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      instance.onMouseOverTooltip();
      expect(instance.showTimeout).toBeTruthy();
      instance.onMouseLeaveTooltipContent();
      jasmine.clock().tick(300);
      expect(instance.showTimeout).toBeFalsy();
      wrapper.detach();
    });

    it('clears hide timeout in onMouseOverTooltipContent', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', autohide: false, isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent();
      jasmine.clock().tick(100);
      expect(instance.hideTimeout).toBeTruthy();
      instance.onMouseOverTooltipContent();
      expect(instance.hideTimeout).toBeFalsy();
      instance.onMouseOverTooltipContent();
      wrapper.detach();
    });

    it('should not keep tooltip around when autohide is true and tooltip content is hovered over', function () {
      isOpen = true;
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index.TooltipUnstyled,
        { target: 'target', autohide: true, isOpen: isOpen, toggle: toggleSpy, delay: 200 },
        'Tooltip Content'
      ), { attachTo: container });
      var instance = wrapper.instance();
      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();
      instance.onMouseLeaveTooltip();
      jasmine.clock().tick(100);
      instance.onMouseOverTooltipContent();
      jasmine.clock().tick(200);
      expect(toggleSpy).toHaveBeenCalled();
      instance.onMouseLeaveTooltipContent();
      expect(instance.hideTimeout).toBeFalsy();
      wrapper.detach();
    });
  });
});