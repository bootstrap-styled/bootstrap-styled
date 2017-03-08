/**
 * Testing our CardSubtitle component
 */

import { mount } from 'enzyme';
import React from 'react';
import CardSubtitle from '../CardSubtitle';
import BootstrapProvider from '../../BootstrapProvider';

const children = <p> test </p>;


const renderComponent = (props = {}) => mount(
  <CardSubtitle
    className={props.className}
  >
    {children}
  </CardSubtitle>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardSubtitle
      className={props.className}
    >
      {children}
    </CardSubtitle>
  </BootstrapProvider>
);


describe('<CardSubtitle />', () => {
  it('should render an <CardSubtitle> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('h6').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardSubtitle> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardSubtitle').length).toBe(1);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
