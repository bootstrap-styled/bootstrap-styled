/**
 * Testing our Nav component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Overlay from '../Overlay';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Overlay {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Overlay {...props} />
  </BootstrapProvider>
);

describe('<Overlay />', () => {
  it('should render an <Overlay> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Overlay').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Overlay> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Overlay').length).toBe(1);
  });
  it('should render an <Overlay> with a props active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('Overlay').props().active).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
