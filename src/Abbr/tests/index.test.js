/**
 * Testing our Abbr component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import Abbr from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Abbr {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Abbr {...props} />
  </BootstrapProvider>
);


describe('<Abbr />', () => {
  it('should render an <Abbr> tag without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('AbbrUnstyled').length).toBe(1);
  });
  it('should have an attribute title without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.props().title).toEqual('abbr title');
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('abbr').length).toBe(1);
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('abbr').props().title).toEqual('abbr title');
  });
  it('should have an attribute initialism with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      initialism: true,
      children,
    });
    expect(renderedComponent.find('Abbr').props().initialism).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
