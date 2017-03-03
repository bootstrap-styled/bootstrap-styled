/**
 * Testing our ButtonGroup component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import ButtonGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ButtonGroup
    className={props.className}
    btn-toolbar={props['btn-toolbar']}
  >
    {props.children}
  </ButtonGroup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <ButtonGroup
      className={props.className}
      btn-toolbar={props['btn-toolbar']}
    >
      {props.children}
    </ButtonGroup>
  </ThemeProvider>
);


describe('<ButtonGroup />', () => {
  it('should render an <ButtonGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ButtonGroup').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('ButtonGroup').length).toBe(1);
  });
  it('should render an <A> tag without a theme and have class .btn-toolbar', () => {
    const renderedComponent = renderComponentUsingTheme({
      'btn-toolbar': true,
      children,
    });
    console.log(renderedComponent.debug());
    expect(renderedComponent.find('div').hasClass('btn-toolbar')).toEqual(true);
    expect(renderedComponent.find('div').hasClass('btn-group')).toEqual(false);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
