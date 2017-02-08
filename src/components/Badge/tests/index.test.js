/**
 * Testing our Badge component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Badge from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Badge {...props}>
    {children}
  </Badge>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Badge {...props}>
      {children}
    </Badge>
  </ThemeProvider>
);

describe('<Badge />', () => {
  it('should render an <Badge> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Badge').length).toBe(1);
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
    expect(renderedComponent.find('Badge').length).toBe(1);
  });

  it('should render a classList attribute of <tag> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').hasClass('badge')).toEqual(true);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
