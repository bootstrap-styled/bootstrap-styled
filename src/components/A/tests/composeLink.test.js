/**
 * Testing our composeList HoC component constructor
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'config';
import { shallow, mount } from 'enzyme';

import A, { composeLink } from '../index';

const Link = composeLink(A);

const renderComponent = (props) => shallow(
  <Link {...props}>test</Link>
);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <Link {...props}>test</Link>
  </ThemeProvider>
);

describe('composeLink', () => {
  it('should render a Link', () => {
    const renderedComponent = renderComponent({
      href: 'http://test.com',
      to: 'http://test.com',
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
  it('should render a Link using ThemeProvider', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://test.com',
      to: 'http://test.com',
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
});
