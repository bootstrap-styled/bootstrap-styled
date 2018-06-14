/**
 * Testing our Details component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import Details from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Details {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Details {...props} />
  </BootstrapProvider>
);


describe('<Details />', () => {
  it('should render an <Details> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('details').length).toBe(1);
  });
  it('should have a tag open without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      open: true,
    });
    expect(renderedComponent.props().open).toEqual(true);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <details> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('details').length).toBe(1);
    expect(renderedComponent.find('Details').length).toBe(1);
  });
  it('should have a tag open without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      open: true,
    });
    expect(renderedComponent.find('details').props().open).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
