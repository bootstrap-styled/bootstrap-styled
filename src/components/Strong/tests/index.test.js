/**
 * Testing our Small component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';

import Strong from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Strong {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Strong {...props} />
  </BootstrapProvider>
);


describe('<Strong />', () => {
  it('should render an <Strong> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Strong').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Strong> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('strong').length).toBe(1);
    expect(renderedComponent.find('Strong').length).toBe(1);
  });
  it('should have a class text-info with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'info',
    });
    expect(renderedComponent.find('strong').hasClass('text-info')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
