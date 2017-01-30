/**
 * Testing our Option component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Option from '../index';

const children = <h1>test</h1>;

const renderComponent = () => shallow(
  <Option>
    {children}
  </Option>
);


const renderComponentUsingTheme = () => mount(
  <ThemeProvider theme={theme}>
    <Option>
      {children}
    </Option>
  </ThemeProvider>
);


describe('<Option />', () => {
  it('should render an <Option> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Option').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Option> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Option').length).toBe(1);
    expect(renderedComponent.find('option').length).toBe(1);
  });
  // it('should have an attribute selected with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     selected: true,
  //   });
  //   expect(renderedComponent.find('option').props().selected).toBe(true);
  // });
  // it('should have a class .disabled with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     disabled: true,
  //   });
  //   expect(renderedComponent.find('option').hasClass('disabled')).toBe(true);
  // });
  // it('should have an attribute label with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     label: 'test-label',
  //   });
  //   expect(renderedComponent.find('option').props().label).toBe('test-label');
  // });
  // it('should have an attribute value with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     value: 'test-value',
  //   });
  //   expect(renderedComponent.find('option').props().value).toBe('test-value');
  // });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
