/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';

import React from 'react';
import theme from 'theme';

import Fade from '../Fade';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Fade {...props}>
      {children}
    </Fade>
  </ThemeProvider>
);

describe('<Fade />', () => {
  it('should render an <Fade> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fade').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
