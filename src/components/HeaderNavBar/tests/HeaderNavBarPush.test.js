/**
 * Testing our HeaderNavBarCollapse HoC component
 */

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import HeaderNavBar, { composePush } from '../index';

const menuAccount = (
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

const menuTop = {
  menuAccount,
};

const menuOffset = {
  menu,
  isHidden: true,
};


const HeaderNavBarPush = composePush(HeaderNavBar);

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarPush
      className={props.className}
      menuTop={menuTop}
      menuOffset={menuOffset}
    />
  </ThemeProvider>
);

describe('<HeaderNavBarPush />', () => {
  it('should simulate a click', () => {
    const renderedComponent = renderComponentUsingTheme({
      menuAccount,
      menu,
    });

    expect(renderedComponent.find('MenuPush').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuPush').props().active).toBe(true);
  });
});
