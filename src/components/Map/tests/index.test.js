/**
 * Testing our Map component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Map from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Map
    className={props.className}
  >
    {props.children}
  </Map>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Map
      className={props.className}
    >
      {props.children}
    </Map>
  </ThemeProvider>
);


describe('<Map />', () => {
  it('should render an <Map> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Map').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <map> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('map').length).toBe(1);
    expect(renderedComponent.find('Map').length).toBe(1);
  });
  it('should have class .map by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('map').hasClass('map')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
