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

let isOpen;
let toggle;
let onClick;

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle onClick={onClick} {...props}>
        {children}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          {children}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </BootstrapProvider>
);

describe('<DropdownToggle />', () => {
  beforeEach(() => {
    isOpen = false;
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render an <DropdownToggle> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownToggle').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  // it('should add default sr-only content', () => {
  //   const renderedComponent = renderComponentUsingTheme();
  //   expect(renderedComponent.text()).toBe('Toggle Dropdown');
  //   expect(renderedComponent.find('.sr-only').length).toBe(1);
  // });
  // it('should add default sr-only content', () => {
  //   const renderedComponent = renderComponentUsingTheme();
  //   expect(renderedComponent.text()).toBe('Dropup Toggle');
  //   expect(renderedComponent.find('.sr-only').length).toBe(1);
  // });
  it('should render a caret', () => {
    const renderedComponent = renderComponentUsingTheme({
      caret: true,
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });

  it('should render a split', () => {
    const renderedComponent = renderComponentUsingTheme({
      split: true,
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });

  // describe('onClick', () => {
  //   it('should call props.onClick if it exists', () => {
  //     onClick = jest.fn();
  //     const renderedComponent = renderComponentUsingTheme({
  //       onClick: onClick,
  //     });
  //     renderedComponent.find('button').at(0).simulate('click');
  //     expect(onClick).toHaveBeenCalled();
  //   });
  //
  //   it('should call context.toggle when present ', () => {
  //     toggle = jest.fn();
  //     const renderedComponent = renderComponentUsingTheme({
  //       toggle: toggle,
  //     });
  //     renderedComponent.find('button').at(0).simulate('click');
  //     expect(toggle).toHaveBeenCalled();
  //   });
  // });

  // describe('nav', () => {
  //   it('should add .nav-link class', () => {
  //     const renderedComponent = renderComponentUsingTheme();
  //     expect(renderedComponent.find('a').length).toBe(1);
  //     expect(renderedComponent.find('.nav-link').length).toBe(1);
  //   });

  it('should not set the tag prop when the tag is defined', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('[aria-haspopup="true"]').prop('tag')).toBe(undefined);
  });
});
