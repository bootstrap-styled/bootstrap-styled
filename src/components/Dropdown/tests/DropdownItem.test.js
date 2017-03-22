/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import DropdownItem from '../DropdownItem';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = () => mount(
  <BootstrapProvider>
    <DropdownItem>
      {children}
    </DropdownItem>
  </BootstrapProvider>
);

describe('<DropdownItem />', () => {
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

  let isOpen; // eslint-disable-line no-unused-vars

  beforeEach(() => {
    isOpen = false;
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
  });
});
