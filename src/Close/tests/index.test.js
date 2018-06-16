/**
 * Testing our Close component
 */

import { mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import Close from '../index';

const renderComponent = (props) => mount(
  <Close {...props} />
);

const renderComponentUsingTheme = (props) => mount(
  <BootstrapProvider>
    <Close {...props} />
  </BootstrapProvider>
);

describe('<Close />', () => {
  let onDismiss;

  beforeEach(() => {
    onDismiss = jest.fn();
  });

  it('should render an <Close> tag without a theme', () => {
    const renderedComponent = renderComponent({
      onDismiss,
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', () => {
    const renderedComponent = renderComponent({
      onDismiss,
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', () => {
    const renderedComponent = renderComponent({
      onDismiss,
      'sr-only': true,
      closeLabel: 'Close',
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });

  it('should render an <Close> tag without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      onDismiss,
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      onDismiss,
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      onDismiss,
      'sr-only': true,
      closeLabel: 'Close',
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
});
