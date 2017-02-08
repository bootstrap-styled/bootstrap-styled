/**
 * Testing our Progress component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Progress from '../index';

const renderComponent = (props = {}) => shallow(
  <Progress
    valueMin={props.valueMin}
    valueNow={props.valueNow}
    valueMax={props.valueMax}
  >
    {props.children}
  </Progress>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Progress
      valueMin={props.valueMin}
      valueNow={props.valueNow}
      valueMax={props.valueMax}
      striped={props.striped}
      animated={props.animated}
    >
      {props.children}
    </Progress>
  </ThemeProvider>
);

describe('<Progress />', () => {
  it('should render an <Progress> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have an attribute value without a theme', () => {
    const renderedComponent = renderComponent({
      valueNow: 42,
    });
    expect(renderedComponent.props().valueNow).toEqual(42);
  });
  it('should have an attribute max without a theme', () => {
    const renderedComponent = renderComponent({
      valueMax: 420,
    });
    expect(renderedComponent.props().valueMax).toEqual(420);
  });
  it('should render a <progress> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have class .progress-bar by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('.progress-bar').length).toEqual(1);
  });
});
