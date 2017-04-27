/**
 * Testing our Mark component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Mark from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Mark {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Mark {...props} />
  </BootstrapProvider>
);


describe('<Mark />', () => {
  it('should render an <Mark> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('mark').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <mark> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('mark').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
