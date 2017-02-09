/**
 * Testing our CardDeck component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import CardDeck from '../CardDeck';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardDeck
    className={props.className}
  >
    {children}
  </CardDeck>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <CardDeck
      className={props.className}
    >
      {children}
    </CardDeck>
  </ThemeProvider>
);


describe('<CardDeck />', () => {
  it('should render an <CardDeck> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('CardDeck').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardDeck> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('CardDeck').length).toBe(1);
  });
  it('should have a class .card-deck by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('card-deck')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
