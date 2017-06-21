/**
 * Testing our Sup component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../../theme';
import Sup from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Sup>
    {props.children}
  </Sup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Sup>
      {props.children}
    </Sup>
  </ThemeProvider>
);


describe('<Sup />', () => {
  it('should render an <Sup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
  it('should render a <sup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
});
