/**
 * Testing our Tag component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Tag from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Tag {...props}>
    {children}
  </Tag>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Tag {...props}>
      {children}
    </Tag>
  </ThemeProvider>
);

describe('<Tag />', () => {
  it('should render an <Tag> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Tag').length).toBe(1);
  });

  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render an <Tag> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Tag').length).toBe(1);
  });

  it('should render a classList attribute of <tag> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').hasClass('tag')).toEqual(true);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
