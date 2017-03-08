/**
 * Testing our CardTitle component
 */


import { mount } from 'enzyme';
import React from 'react';
import CardTitle from '../CardTitle';
import BootstrapProvider from '../../BootstrapProvider';

const children = <p> test </p>;


const renderComponent = (props = {}) => mount(
  <CardTitle
    className={props.className}
  >
    {children}
  </CardTitle>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardTitle
      className={props.className}
    >
      {children}
    </CardTitle>
  </BootstrapProvider>
);


describe('<CardTitle />', () => {
  it('should render an <CardTitle> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('h4').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardTitle> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardTitle').length).toBe(1);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
