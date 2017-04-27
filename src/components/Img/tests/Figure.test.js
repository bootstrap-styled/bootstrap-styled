/**
 * Testing our Figure component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Figure from '../Figure';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Figure {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Figure {...props} />
  </BootstrapProvider>
);


describe('<Figure />', () => {
  it('should render an <Figure> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Figure').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figure> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('figure').length).toBe(1);
    expect(renderedComponent.find('Figure').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
