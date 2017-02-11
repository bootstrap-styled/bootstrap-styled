/**
 * Testing our B component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from 'theme';
import B from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <B>
    {props.children}
  </B>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <B>
      {props.children}
    </B>
  </ThemeProvider>
);


describe('<B />', () => {
  it('should render an <B> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('B').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('b').length).toBe(1);
    expect(renderedComponent.find('B').length).toBe(1);
  });
});
