/**
 * Testing our Dropdown component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Dropdown from '../Dropdown';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = () => mount(
  <BootstrapProvider>
    <Dropdown>
      {children}
    </Dropdown>
  </BootstrapProvider>
);

describe('<Dropdown />', () => {
  it('should render an <Dropdown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Dropdown').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
