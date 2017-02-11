/**
 * Testing our Strong component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from 'theme';
import Strong from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Strong>
    {props.children}
  </Strong>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Strong>
      {props.children}
    </Strong>
  </ThemeProvider>
);


describe('<Strong />', () => {
  it('should render an <Strong> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Strong').length).toBe(1);
  });
  it('should render a <strong> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('strong').length).toBe(1);
    expect(renderedComponent.find('Strong').length).toBe(1);
  });
});
