/**
 * Testing our Caption component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Caption from '../index';

const children = <span>Test</span>;

const renderComponent = (props = {}) => mount(
  <table>
    <Caption
      className={props.className}
    >
      {props.children}
    </Caption>
  </table>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <table>
      <Caption
        className={props.className}
      >
        {props.children}
      </Caption>
    </table>
  </ThemeProvider>
);


describe('<Caption />', () => {
  it('should render an <Caption> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Caption').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <caption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('caption').length).toBe(1);
    expect(renderedComponent.find('Caption').length).toBe(1);
  });
  it('should have class .caption by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('caption').hasClass('caption')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
