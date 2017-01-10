/**
 * Testing our ContainerFluid component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import ContainerFluid from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ContainerFluid
    className={props.className}
  >
    {props.children}
  </ContainerFluid>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <ContainerFluid
      className={props.className}
    >
      {props.children}
    </ContainerFluid>
  </ThemeProvider>
);


describe('<ContainerFluid />', () => {
  it('should render an <ContainerFluid> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ContainerFluid').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('ContainerFluid').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
