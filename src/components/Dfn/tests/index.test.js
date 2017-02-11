/**
 * Testing our Dfn component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from 'theme';
import Dfn from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Dfn>
    {props.children}
  </Dfn>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Dfn>
      {props.children}
    </Dfn>
  </ThemeProvider>
);


describe('<Dfn />', () => {
  it('should render an <Dfn> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Dfn').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('dfn').length).toBe(1);
    expect(renderedComponent.find('Dfn').length).toBe(1);
  });
});
