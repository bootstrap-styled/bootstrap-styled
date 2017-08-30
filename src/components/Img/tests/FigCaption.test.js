/**
 * Testing our FigCaption component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../../theme';
import FigCaption from '../FigCaption';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <FigCaption {...props}>
    {children}
  </FigCaption>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <FigCaption {...props}>
      {children}
    </FigCaption>
  </ThemeProvider>
);


describe('<FigCaption />', () => {
  it('should render an <FigCaption> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('FigCaptionUnstyled').length).toBe(1);
  });
  it('should contain children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('figcaption').length).toBe(1);
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      right: true,
    });
    expect(renderedComponent.find('FigCaption').props().right).toBe(true);
  });
});
