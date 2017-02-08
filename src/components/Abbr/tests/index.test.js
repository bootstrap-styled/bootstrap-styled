/**
 * Testing our Abbr component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from 'theme';
import Abbr from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Abbr
    title={props.title}
    className={props.className}
  >
    {props.children}
  </Abbr>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Abbr
      title={props.title}
      className={props.className}
    >
      {props.children}
    </Abbr>
  </ThemeProvider>
);


describe('<Abbr />', () => {
  it('should render an <Abbr> tag without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.props().title).toEqual('abbr title');
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('abbr').length).toBe(1);
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.find('abbr').props().title).toEqual('abbr title');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
