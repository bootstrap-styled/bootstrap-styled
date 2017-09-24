/**
 * Testing our Samp component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../theme';
import Samp from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Samp>
    {props.children}
  </Samp>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Samp>
      {props.children}
    </Samp>
  </ThemeProvider>
);


describe('<Samp />', () => {
  it('should render an <Samp> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
});
