/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import DropdownToggle from '../DropdownToggle';
import Dropdown from '../Dropdown';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => {
  const { isOpen, toggle, ...rest } = props;
  return mount(
    <BootstrapProvider>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle {...rest} />
      </Dropdown>
    </BootstrapProvider>
  );
};

describe('<DropdownToggle />', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = jest.fn();
  });

  it('should render an <DropdownToggle> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen,
      toggle,
    });
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen,
      toggle,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should add default sr-only content', () => {
    const renderedComponent = mount(
      <DropdownToggle />,
      {
        context: {
          isOpen,
          toggle,
        },
      }
    );

    expect(renderedComponent.text()).toBe('Toggle Dropdown');
    expect(renderedComponent.find('.sr-only').length).toBe(1);
  });
  it('should add default sr-only content', () => {
    const renderedComponent = mount(
      <DropdownToggle aria-label="Dropup Toggle" />,
      {
        context: {
          isOpen,
          toggle,
        },
      }
    );

    expect(renderedComponent.text()).toBe('Dropup Toggle');
    expect(renderedComponent.find('.sr-only').length).toBe(1);
  });
  it('should render a caret', () => {
    const renderedComponent = mount(
      <DropdownToggle caret>Hello world</DropdownToggle>,
      {
        context: {
          isOpen,
          toggle,
        },
      }
    );

    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', () => {
    const renderedComponent = mount(
      <DropdownToggle split>Hello world</DropdownToggle>,
      {
        context: {
          isOpen,
          toggle,
        },
      }
    );

    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });

  describe('onClick', () => {
    it('should call props.onClick if it exists', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(
        <DropdownToggle>Hello world</DropdownToggle>,
        {
          context: {
            isOpen,
            toggle: functionTest,
          },
        }
      );
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });

    it('should call context.toggle when present ', () => {
      const functionTest = jest.fn();
      const renderedComponent = mount(
        <DropdownToggle>Hello world</DropdownToggle>,
        {
          context: {
            isOpen,
            toggle: functionTest,
          },
        }
      );
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
  });

  describe('nav', () => {
    it('should add .nav-link class', () => {
      const renderedComponent = mount(
        <DropdownToggle nav>Hello world</DropdownToggle>,
        {
          context: {
            isOpen,
            toggle,
          },
        }
      );

      expect(renderedComponent.find('a').length).toBe(1);
      expect(renderedComponent.find('.nav-link').length).toBe(1);
    });

    it('should not set the tag prop when the tag is defined', () => {
      const renderedComponent = mount(
        <DropdownToggle nav tag="span">Hello world</DropdownToggle>,
        {
          context: {
            isOpen,
            toggle,
          },
        }
      );

      expect(renderedComponent.find('[aria-haspopup="true"]').prop('tag')).toBe(undefined);
    });
  });
});
