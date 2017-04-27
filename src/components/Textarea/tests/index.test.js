/**
 * Testing our Textarea component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import Textarea from '../index';

const onChange = jest.fn();
const renderComponent = (props = {}) => shallow(
  <Textarea
    value={props.value}
    wrap={props.wrap}
    className={props.className}
    onChange={onChange}
  />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Textarea
      value={props.value}
      wrap={props.wrap}
      className={props.className}
      onChange={onChange}
    />
  </ThemeProvider>
);

describe('<Textarea />', () => {
  it('should render an <Textarea> tag without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });

  it('should have a value attribute without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.props().value).toEqual('Insert text here');
  });

  it('should adopt a wrap attribute without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.props().wrap).toEqual('wrapString');
  });
  it('should render one <Textarea> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should render a value attribute of <Textarea> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.find('textarea').props().value).toEqual('Insert text here');
  });
  it('should render an wrap attribute of <Textarea> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
    });
    expect(renderedComponent.find('textarea').props().wrap).toEqual('wrapString');
  });
  it('should have content with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
    });
    expect(renderedComponent.text()).toEqual('Insert text here');
  });
});
