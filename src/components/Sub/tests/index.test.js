/**
 * Testing our Sub component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../../theme';
import Sub from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Sub>
    {props.children}
  </Sub>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Sub>
      {props.children}
    </Sub>
  </ThemeProvider>
);


describe('<Sub />', () => {
  it('should render an <Sub> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
  it('should render a <Sub> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
});
