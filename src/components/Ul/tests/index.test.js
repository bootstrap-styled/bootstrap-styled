/**
 * Testing our Unordered List component
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Ul from '../index';
import Li from '../../Li';


const children = (<Li>Test</Li>);

const renderComponent = (props = {}) => shallow(
  <Ul
    className={props.className}
  >
    {props.children}
  </Ul>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Ul
      className={props.className}
    >
      {props.children}
    </Ul>
  </ThemeProvider>
);

describe('<Ul />', () => {
  it('should render an <Ul> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Ul').length).toBe(1);
  });

  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render an <Ul> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').length).toBe(1);
    expect(renderedComponent.find('Ul').length).toBe(1);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
