/**
 * Testing our CardText component
 */

import { mount } from 'enzyme';
import React from 'react';
import CardText from '../CardText';
import BootstrapProvider from '../../BootstrapProvider';

const children = <span> test </span>;

const renderComponent = (props = {}) => mount(
  <CardText {...props}>
    {children}
  </CardText>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardText {...props}>
      {children}
    </CardText>
  </BootstrapProvider>
);


describe('<CardText />', () => {
  it('should render an <CardText> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('p').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardText> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardText').length).toBe(1);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
