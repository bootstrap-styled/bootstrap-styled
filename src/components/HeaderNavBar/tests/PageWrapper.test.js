/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import PageWrapper from '../PageWrapper';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <PageWrapper {...props}>
    {props.children}
  </PageWrapper>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <PageWrapper {...props}>
      {props.children}
    </PageWrapper>
  </ThemeProvider>
);


describe('<PageWrapper />', () => {
  it('should render an <PageWrapper> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('PageWrapper').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <PageWrapper> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('PageWrapper').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
