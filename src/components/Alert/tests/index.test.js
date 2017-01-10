/**
 * Testing our Alert component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import Alert from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props) => mount(
  <Alert
    onDismiss={props.onDismiss}
    className={props.className}
  >
    {children}
  </Alert>
);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <Alert
      onDismiss={props.onDismiss}
      className={props.className}
    >
      {children}
    </Alert>
  </ThemeProvider>
);

describe('<Alert />', () => {
  it('should render an <Alert> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Alert').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a className .alert by default and without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').hasClass('alert')).toBe(true);
  });
  // it.only('should have a onDismiss attribute without a theme', () => {
  //   const renderedComponent = renderComponent({
  //     children,
  //     store,
  //     onDismiss: this.hideError,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('div').hasClass('alert-dismissible')).toBe(true);
  // });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
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
  // it.only('should have a onDismiss attribute without a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     store,
  //     onDismiss: this.hideError,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('div').hasClass('alert-dismissible')).toBe(true);
  // });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
