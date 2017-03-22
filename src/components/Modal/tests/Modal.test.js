/**
 * Testing our Modal component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Modal from '../Modal';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Modal {...props}>
      {children}
    </Modal>
  </BootstrapProvider>
);

describe('<Modal />', () => {
  it('should render an <Modal> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Modal').length).toBe(1);
  });

  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });
  it('should render with the class "modal-dialog"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" by default', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdrop={false}>
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should render with class "modal-dialog" and have custom class name if provided', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} className="my-custom-modal">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal" and have custom class name if provided with modalClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} modalClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with custom class name if provided with wrapClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} wrapClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-content" and have custom class name if provided with contentClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} contentClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-content.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} backdropClassName="my-custom-modal">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.querySelectorAll('.modal-backdrop.my-custom-modal').length).toBe(1);
    wrapper.unmount();
  });

  it('should render with the class modal-md when size is passed', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle} size="md">
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal-dialog').length).toBe(1);
    expect(document.getElementsByClassName('modal-md').length).toBe(1);
    wrapper.unmount();
  });


  it('should render modal when isOpen is true', () => {
    isOpen = true;
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });

  it('should not render modal when isOpen is false', () => {
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(wrapper.children().length).toBe(0);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);
    wrapper.unmount();
  });

  it('should toggle modal', () => {
    const wrapper = mount(
      <Modal isOpen={isOpen} toggle={toggle}>
        Yo!
      </Modal>
    );

    expect(isOpen).toBe(false);
    expect(document.getElementsByClassName('modal').length).toBe(0);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(0);

    toggle();
    wrapper.setProps({
      isOpen,
    });

    expect(isOpen).toBe(true);
    expect(document.getElementsByClassName('modal').length).toBe(1);
    expect(document.getElementsByClassName('modal-backdrop').length).toBe(1);
    wrapper.unmount();
  });
});
