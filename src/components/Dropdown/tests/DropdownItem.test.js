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
});
