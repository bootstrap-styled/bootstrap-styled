/**
 * Testing our Progress component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';
import { shallow, mount } from 'enzyme';
import React from 'react';

import Progress from '../index';

const renderComponent = (props = {}) => shallow(
  <Progress
    value={props.value}
    max={props.max}
    className={props.className}
  />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Progress
      value={props.value}
      max={props.max}
      className={props.className}
    />
  </ThemeProvider>
);

describe('<Progress />', () => {
  it('should render an <Progress> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have an attribute value without a theme', () => {
    const renderedComponent = renderComponent({
      value: '42',
    });
    expect(renderedComponent.props().value).toEqual('42');
  });
  it('should have an attribute max without a theme', () => {
    const renderedComponent = renderComponent({
      max: '420',
    });
    expect(renderedComponent.props().max).toEqual('420');
  });
  it('should render a <progress> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('progress').length).toBe(1);
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
  it('should have class .pagination by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('progress').hasClass('progress')).toBe(true);
  });
  it('should have an attribute value with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: '42',
    });
    expect(renderedComponent.find('progress').props().value).toEqual('42');
  });
  it('should have an attribute max with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      max: '420',
    });
    expect(renderedComponent.find('progress').props().max).toEqual('420');
  });
});
