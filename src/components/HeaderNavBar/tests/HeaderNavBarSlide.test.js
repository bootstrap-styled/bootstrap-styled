/**
 * Testing our HeaderNavBarSlide HoC component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import HeaderNavBar, { composeSlide } from '../index';

const menu = (
  <ul>
    <li className="nav-item active">
      <a className="nav-item nav-link">a</a>
    </li>
    <li className="nav-item">
      <a className="nav-item nav-link">b</a>
    </li>
    <li className="nav-item">
      <a className="nav-item nav-link">c</a>
    </li>
  </ul>
);

const HeaderNavBarSlide = composeSlide(HeaderNavBar);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarSlide
      menu={props.menu}
      className={props.className}
    />
  </ThemeProvider>
);

describe('<HeaderNavBarSlide />', () => {
  it('should simulate a click', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
    });
    expect(renderedComponent.find('HeaderNavBar').props().composeSlide.isHidden).toBe(true);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('HeaderNavBar').props().composeSlide.isHidden).toBe(false);
  });
});
