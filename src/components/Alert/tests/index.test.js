/**
 * Testing our Alert component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Alert from '../index';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <Alert
      dismissed={props.dismissed}
      close={props.close}
      className={props.className}
    >
      {children}
    </Alert>
  </ThemeProvider>
);

describe('<Alert />', () => {
  it('should render an <Alert> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Alert').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a className .alert by default and with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('alert')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
