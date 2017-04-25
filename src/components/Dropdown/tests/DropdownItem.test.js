/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import DropdownItem from '../DropdownItem';
import Dropdown from '../Dropdown';
import DropdownToggle from '../DropdownToggle';
import DropdownMenu from '../DropdownMenu';

const children = (<h1>Test</h1>);

let dropdownOpen;
let toggle;
let onClick;

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem {...props}>
          {children}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </BootstrapProvider>
);

describe('<DropdownItem />', () => {
  beforeEach(() => {
    dropdownOpen = false;
    toggle = jest.fn();
    onClick = jest.fn();
  });
  it('should render an <DropdownItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      const renderedComponent = mount(<DropdownItem header>Heading</DropdownItem>);

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  describe('header', () => {
    it('should render h6 tag heading', () => {
      const renderedComponent = mount(<DropdownItem header>Heading</DropdownItem>);

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  describe('divider', () => {
    it('should render a divider element', () => {
      const renderedComponent = mount(<DropdownItem divider />);
      expect(renderedComponent.find('.dropdown-divider').length).toBe(1);
    });
  });
  describe('onClick', () => {
    it('should not be called when disabled', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(<DropdownItem disabled>Item</DropdownItem>);
      renderedComponent.find('button').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when divider is set', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(<DropdownItem divider />);
      renderedComponent.find('div').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when header item', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(<DropdownItem header>Header</DropdownItem>);
      renderedComponent.find('h6').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should call toggle', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(
        <DropdownItem>Click me</DropdownItem>,
        {
          context: {
            toggle: functionTest,
          },
        }
      );
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
    it('should call onClick', () => {
      const renderedComponent = renderComponentUsingTheme({
        children,
        onClick,
      });
      renderedComponent.find('button').at(1).simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
