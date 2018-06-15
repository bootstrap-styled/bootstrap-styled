/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import DropdownMenu from '../DropdownMenu';
import NavDropdown from '../../Navbar/NavDropdown';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = () => mount(
  <BootstrapProvider>
    <NavDropdown isOpen={false} toggle={jest.fn()}>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </NavDropdown>
  </BootstrapProvider>
);

describe('<DropdownMenu />', () => {
  it('should render an <DropdownMenu> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownMenu').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
