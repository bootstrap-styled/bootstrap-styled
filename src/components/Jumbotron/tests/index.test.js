/**
 * Testing our Jumbotron component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Jumbotron from '../index';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <Jumbotron
    className={props.className}
  >
    {children}
  </Jumbotron>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Jumbotron
      className={props.className}
    >
      {children}
    </Jumbotron>
  </ThemeProvider>
);


describe('<Jumbotron />', () => {
  it('should render an <Jumbotron> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Jumbotron').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
