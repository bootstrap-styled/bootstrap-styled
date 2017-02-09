/**
 * Testing our ProgressBar component
 */
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Progress, { ProgressBar } from '../index';

const renderComponent = (props = {}) => mount(
  <Progress>
    <ProgressBar
      valueMin={props.valueMin}
      valueNow={props.valueNow}
      valueMax={props.valueMax}
    >
      {props.children}
    </ProgressBar>
  </Progress>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Progress>
      <ProgressBar
        valueMin={props.valueMin}
        valueNow={props.valueNow}
        valueMax={props.valueMax}
        striped={props.striped}
        animated={props.animated}
      >
        {props.children}
      </ProgressBar>
    </Progress>
  </ThemeProvider>
);

describe('<ProgressBar />', () => {
  it('should render an <ProgressBar> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have an attribute value without a theme', () => {
    const renderedComponent = renderComponent({
      valueNow: 42,
    });
    expect(renderedComponent.find('ProgressBar').props().valueNow).toEqual(42);
  });
  it('should have an attribute max without a theme', () => {
    const renderedComponent = renderComponent({
      valueMax: 420,
    });
    expect(renderedComponent.find('ProgressBar').props().valueMax).toEqual(420);
  });
  it('should render a <Progress> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have class .progress-bar by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('.progress-bar').length).toEqual(1);
  });
  it('should render a <Progress> tag with children and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children: <span>hello</span>,
    });
    expect(renderedComponent.find('ProgressBar').children().length).toBe(1);
  });
});
