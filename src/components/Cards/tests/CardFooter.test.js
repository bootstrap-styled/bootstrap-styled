/**
 * Testing our CardFooter component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import CardFooter from '../CardFooter';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardFooter {...props}>
    {children}
  </CardFooter>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardFooter {...props}>
      {children}
    </CardFooter>
  </BootstrapProvider>
);


describe('<CardFooter />', () => {
  it('should render an <CardFooter> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardFooter> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardFooter').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a class .card-footer by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('card-footer')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
