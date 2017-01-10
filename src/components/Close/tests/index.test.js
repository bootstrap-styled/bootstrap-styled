/**
 * Testing our Close component
 */

import { mount } from 'enzyme';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import Close from '../index';

const renderComponent = (props) => mount(
  <Close
    onDismiss={(e) => e.preventDefault()}
    sr-only={props['sr-only']}
    className={props.className}
    closeLabel={props.closeLabel}
  />
);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <Close
      onDismiss={(e) => e.preventDefault()}
      sr-only={props['sr-only']}
      className={props.className}
      closeLabel={props.closeLabel}
    />
  </ThemeProvider>
);

describe('<Close />', () => {
  it('should render an <Close> tag without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', () => {
    const renderedComponent = renderComponent({
      'sr-only': true,
      closeLabel: 'Close',
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });

  it('should render an <Close> tag without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      'sr-only': true,
      closeLabel: 'Close',
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
});
