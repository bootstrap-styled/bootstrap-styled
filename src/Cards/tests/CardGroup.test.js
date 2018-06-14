/**
 * Testing our CardGroup component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import CardGroup from '../CardGroup';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardGroup {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardGroup {...props} />
  </BootstrapProvider>
);


describe('<CardGroup />', () => {
  it('should render an <CardGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('CardGroupUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardGroup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardGroup').length).toBe(1);
  });
  it('should have a class .card-group by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').at(1).hasClass('card-group')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
