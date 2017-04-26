/**
 * Testing our Nav component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import OffsetNav from '../OffsetNav';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <OffsetNav {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <OffsetNav {...props} />
  </BootstrapProvider>
);


describe('<OffsetNav />', () => {
  it('should render an <OffsetNav> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <OffsetNav> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should render an <OffsetNav> with a props active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an <OffsetNav> with a props animationPush with a theme', () => {
    const dismiss = jest.fn();
    const renderedComponent = renderComponentUsingTheme({
      children,
      menuClose: true,
      dismiss,
    });
    expect(renderedComponent.find('Close').length).toBe(1);
  });
  it('should render an <OffsetNav> with a props menu-right with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('OffsetNav').props()['menu-right']).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
