/**
 * Testing our Address component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Address from '../index';
import theme from '../../../config';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Address
    className={props.className}
  >
    {props.children}
  </Address>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Address
      className={props.className}
    >
      {props.children}
    </Address>
  </ThemeProvider>
);


describe('<Address />', () => {
  it('should render an <Address> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Address').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <address> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('address').length).toBe(1);
    expect(renderedComponent.find('Address').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
