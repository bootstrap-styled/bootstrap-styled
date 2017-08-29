import React from 'react';
import findDOMNode from 'react-dom/lib/findDOMNode';
import { mount } from 'enzyme';
import { TooltipUnstyled as Tooltip } from '../index';
/* eslint-disable no-undef */
describe('Tooltip', () => {
  let isOpen;
  let toggle;
  let toggleSpy;
  let element;
  let container;
  let target;
  let innerTarget;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
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

  afterEach(() => {
    jasmine.clock().uninstall();
    document.body.removeChild(element);
    element = null;
    container = null;
    target = null;
    innerTarget = null;
  });

  it('should not render children if isOpen is false', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();
    const tooltips = document.getElementsByClassName('tooltip');

    expect(findDOMNode(instance)).toBe(null); // eslint-disable-line react/no-find-dom-node
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(0);
    expect(target.className).toBe('');
    expect(tooltips.length).toBe(0);
    wrapper.detach();
  });

  it('should render if isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();
    const tooltips = document.getElementsByClassName('tooltip');

    expect(findDOMNode(instance)).toBe(null); // eslint-disable-line react/no-find-dom-node
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(1);
    expect(target.className.indexOf('bs-tether-target') > -1).toBe(true);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should render with target object', () => {
    isOpen = true;
    const wrapper = mount(
      <Tooltip target={document.getElementById('target')} isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();
    const tooltips = document.getElementsByClassName('tooltip');

    expect(findDOMNode(instance)).toBe(null); // eslint-disable-line react/no-find-dom-node
    expect(document.body.querySelectorAll('.tooltip.show').length).toBe(1);
    expect(target.className.indexOf('bs-tether-target') > -1).toBe(true);
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].textContent).toBe('Tooltip Content');
    wrapper.detach();
  });

  it('should toggle isOpen', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );

    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.setProps({ isOpen: true });
    expect(document.getElementsByClassName('tooltip').length).toBe(1);
    wrapper.setProps({ isOpen: false });
    expect(document.getElementsByClassName('tooltip').length).toBe(0);
    wrapper.detach();
  });

  it('should handle target clicks', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target });
    expect(isOpen).toBe(true);
    instance.handleDocumentClick({ target });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should handle inner target clicks', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: innerTarget });
    expect(isOpen).toBe(true);
    wrapper.detach();
  });

  it('should not do anything when document click outside of target', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target: container });
    expect(isOpen).toBe(false);

    wrapper.detach();
  });

  it('should clear hide timeout if it exists on target click', () => {
    const wrapper = mount(
      <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

    instance.onMouseLeaveTooltip();
    expect(isOpen).toBe(false);
    instance.handleDocumentClick({ target });
    jasmine.clock().tick(200);
    expect(isOpen).toBe(true);
    wrapper.setProps({ isOpen });
    instance.handleDocumentClick({ target });
    expect(isOpen).toBe(true);

    wrapper.detach();
  });

  it('should not call props.toggle when disabled ', () => {
    const props = jasmine.createSpyObj('props', ['toggle']);
    const event = jasmine.createSpyObj('event', ['preventDefault']);

    const wrapper = mount(
      <Tooltip target="target" disabled isOpen={isOpen} toggle={props.toggle}>
        Tooltip Content
      </Tooltip>,
      { attachTo: container }
    );
    const instance = wrapper.instance();

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

  describe('delay', () => {
    it('should accept a number', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(200);
      expect(isOpen).toBe(false);
    });

    it('should accept an object', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(200);
      expect(isOpen).toBe(false);
    });

    it('should use default value if value is missing from object', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 0 }}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      expect(isOpen).toBe(true);
      jasmine.clock().tick(250);  // Default hide value: 250
      expect(isOpen).toBe(false);
    });
  });

  describe('hide', () => {
    it('should call toggle when isOpen', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.hide();

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen is false', () => {
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.hide();

      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('show', () => {
    it('should call toggle when isOpen is false', () => {
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.show();

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call toggle when isOpen', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(toggleSpy).not.toHaveBeenCalled();

      instance.show();

      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseOverTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();

      expect(isOpen).toBe(false);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseOverTooltip();
      jasmine.clock().tick(200);

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy} delay={0}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();
      jasmine.clock().tick(0);  // delay: 0 toggle is still async

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('onMouseLeaveTooltip', () => {
    it('should clear timeout if it exists on target click', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltip();
      jasmine.clock().tick(200);

      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('should not call .toggle if isOpen is false', () => {
      isOpen = false;
      const wrapper = mount(
        <Tooltip target="target" isOpen={isOpen} toggle={toggleSpy} delay={0}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseLeaveTooltip();
      jasmine.clock().tick(0);  // delay: 0 toggle is still async

      expect(isOpen).toBe(false);
      expect(toggleSpy).not.toHaveBeenCalled();

      wrapper.detach();
    });
  });

  describe('autohide', () => {
    it('should keep tooltip around when false and onmouseleave from tooltip content', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      expect(isOpen).toBe(true);
      expect(toggleSpy).not.toHaveBeenCalled();

      instance.onMouseLeaveTooltipContent();
      jasmine.clock().tick(100);
      expect(toggleSpy).not.toHaveBeenCalled();
      jasmine.clock().tick(200);
      expect(toggleSpy).toHaveBeenCalled();

      wrapper.detach();
    });

    it('clears showTimeout in onMouseLeaveTooltipContent', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

      instance.onMouseOverTooltip();
      expect(instance.showTimeout).toBeTruthy();
      instance.onMouseLeaveTooltipContent();
      jasmine.clock().tick(300);
      expect(instance.showTimeout).toBeFalsy();
      wrapper.detach();
    });

    it('clears hide timeout in onMouseOverTooltipContent', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();

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

    it('should not keep tooltip around when autohide is true and tooltip content is hovered over', () => {
      isOpen = true;
      const wrapper = mount(
        <Tooltip target="target" autohide isOpen={isOpen} toggle={toggleSpy} delay={200}>
          Tooltip Content
        </Tooltip>,
        { attachTo: container }
      );
      const instance = wrapper.instance();
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
