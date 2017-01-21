/**
 * Testing our ListGroup component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import ListGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ListGroup
    className={props.className}
  >
    {props.children}
  </ListGroup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <ListGroup
      className={props.className}
    >
      {props.children}
    </ListGroup>
  </ThemeProvider>
);


describe('<ListGroup />', () => {
  it('should render an <ListGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ListGroup').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ul> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').length).toBe(1);
    expect(renderedComponent.find('ListGroup').length).toBe(1);
  });
  it('should have class .caption by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').hasClass('list-group')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
