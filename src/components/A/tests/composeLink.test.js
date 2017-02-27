/**
 * Testing our composeList HoC component constructor
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import A, { composeLink } from '../index';

const Link = composeLink(A);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={props.theme}>
    <Link {...props}>test</Link>
  </ThemeProvider>
);

describe('composeLink', () => {
  it('should render a Link', () => {
    const renderedComponent = renderComponentUsingTheme({
      theme: {
        '$enable-dynamic-links': true,
      },
      href: 'http://test.com',
      to: 'http://test.com',
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
  it('should render a Link using <A>', () => {
    const renderedComponent = renderComponentUsingTheme({
      theme: {
        '$enable-dynamic-links': false,
      },
      href: 'http://test.com',
      to: 'http://test.com',
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
});
