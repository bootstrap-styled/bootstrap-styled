/**
 * Testing our ListGroupItemHeading component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import ListGroupItemHeading from '../ListGroupItemHeading';

const children = (<p>Test</p>);

const renderComponent = (props = {}) => mount(
  <ListGroupItemHeading {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ListGroupItemHeading {...props} />
  </BootstrapProvider>
);


describe('<ListGroupItemHeading />', () => {
  it('should render an <ListGroupItemHeading> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ListGroupItemHeading').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ListGroupItemHeading> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('h5').length).toBe(1);
    expect(renderedComponent.find('ListGroupItemHeading').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
