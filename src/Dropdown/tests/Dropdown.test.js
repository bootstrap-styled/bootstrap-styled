/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Dropdown from '../index';
import DropdownItem from '../DropdownItem';
import DropdownMenu from '../DropdownMenu';
import DropdownToggle from '../DropdownToggle';
import TetherContent from '../../TetherContent';
const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Dropdown {...props} />
  </BootstrapProvider>
);

describe('Dropdown', () => {
  let isOpen;
  let toggle;
  let element;

  beforeEach(() => {
    isOpen = false;
    toggle = jest.fn();
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });


  describe('<Dropdown />', () => {
    it('should render an <Dropdown> tag with a theme', () => {
      const renderedComponent = renderComponentUsingTheme({
        children,
        isOpen,
        toggle,
      });
      expect(renderedComponent.find('Dropdown').length).toBe(1);
    });
    it('should have children with a theme', () => {
      const renderedComponent = renderComponentUsingTheme({
        children,
        isOpen,
        toggle,
      });
      expect(renderedComponent.contains(children)).toEqual(true);
    });
  });

  it('should render a single child', () => {
    const renderedComponent = mount(<Dropdown isOpen={isOpen} toggle={toggle}>Ello world</Dropdown>);

    expect(renderedComponent.text()).toBe('Ello world');
    expect(renderedComponent.find('.dropdown').length).toBe(1);
  });

  it('should render children when isOpen is true', () => {
    isOpen = true;
    const renderedComponent = mount(
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    expect(renderedComponent.find('.btn').text()).toBe('Toggle');
    expect(renderedComponent.find('Dropdown').length).toBe(1);
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
    expect(renderedComponent.children().length).toBe(1);
  });

  it('should not call props.toggle when disabled ', () => {
    isOpen = true;
    const toggleTest = jest.fn();
    const renderedComponent = mount(
      <Dropdown isOpen={isOpen} toggle={toggleTest} disabled>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    renderedComponent.find('Dropdown').simulate('click');
    expect(toggleTest).not.toHaveBeenCalled();
  });

  describe('getTetherConfig', () => {
    it('should apply dropup tether values', () => {
      isOpen = true;
      const renderedComponent = mount(
        <Dropdown isOpen={isOpen} toggle={toggle} tether dropup>
          <DropdownToggle>Toggle</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Test</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
      expect(renderedComponent.find(TetherContent).props().tether.attachment).toBe('bottom right');
      expect(renderedComponent.find(TetherContent).props().tether.targetAttachment).toBe('top right');
      renderedComponent.unmount();
    });
  });
});
