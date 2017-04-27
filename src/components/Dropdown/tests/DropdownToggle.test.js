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
  it('should render a caret', () => {
    const renderedComponent = renderComponentUsingTheme({
      caret: true,
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle')).toBe(true);
  });
  it('should be a component A if nav and not tag specified', () => {
    const renderedComponent = renderComponentUsingTheme({
      nav: true,
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('a').props().href).toBe('#');
  });
  it('should be a component Button if no tag specified', () => {
    const renderedComponent = renderComponentUsingTheme({
      nav: true,
    });
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should be have a tag li', () => {
    const renderedComponent = renderComponentUsingTheme({
      tag: 'li',
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should render a split', () => {
    const renderedComponent = renderComponentUsingTheme({
      split: true,
    });
    expect(renderedComponent.find('[data-toggle="dropdown"]').hasClass('dropdown-toggle-split')).toBe(true);
  });
  it('should call a function onClick', () => {
    const renderedComponent = renderComponentUsingTheme({
      onClick,
    });
    renderedComponent.find('DropdownToggle').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should call a function onClick with preventDefault if props nav', () => {
    const renderedComponent = renderComponentUsingTheme({
      onClick,
      nav: true,
    });
    renderedComponent.find('DropdownToggle').simulate('click', { preventDefault() {} });
    expect(onClick).toHaveBeenCalled();
  });
});
