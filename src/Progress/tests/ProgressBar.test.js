/**
 * Testing our ProgressBar component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import Progress from '../index';
import ProgressBar from '../ProgressBar';

const renderComponent = (props = {}) => mount(
  <Progress>
    <ProgressBar {...props}>
      {props.children}
    </ProgressBar>
  </Progress>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Progress>
      <ProgressBar {...props}>
        {props.children}
      </ProgressBar>
    </Progress>
  </BootstrapProvider>
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
  it('should have class .progress-bar-animated with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      animated: true,
    });
    expect(renderedComponent.find('.progress-bar-animated').length).toEqual(1);
  });
  it('should have class bg-info with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      color: 'info',
    });
    expect(renderedComponent.find('.bg-info').length).toEqual(1);
  });
  it('should have class .progress-bar-striped with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      striped: true,
    });
    expect(renderedComponent.find('.progress-bar-striped').length).toEqual(1);
  });
  it('should render a <Progress> tag with children and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children: <span>hello</span>,
    });
    expect(renderedComponent.find('ProgressBar').children().length).toBe(1);
  });
});
