/**
 * Testing our Fa component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Fa from '../Fa';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Fa {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Fa {...props} />
  </BootstrapProvider>
);
describe('<Fa />', () => {
  it('should render an <Fa> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> with children', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Fa> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a className fa-lgwith a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'lg',
    });
    expect(renderedComponent.find('i').hasClass('fa-lg')).toBe(true);
  });
  it('should render an <Fa> with children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
