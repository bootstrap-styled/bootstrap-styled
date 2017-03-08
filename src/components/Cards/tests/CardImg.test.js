/**
 * Testing our CardImg component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import CardImg from '../CardImg';


const renderComponent = () => shallow(
  <CardImg />
);


const renderComponentUsingTheme = () => mount(
  <ThemeProvider theme={theme}>
    <CardImg />
  </ThemeProvider>
);


describe('<CardImg />', () => {
  it('should render an <CardImg> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toBe(1);
  });

  it('should render an <CardImg> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('CardImg').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should have a class .card-img by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img').hasClass('card-img')).toBe(true);
  });
});
