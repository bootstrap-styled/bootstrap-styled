/**
 * Testing our HeaderNavBarCollapse HoC component
 */

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import HeaderNavBar, { compPush } from '../index';

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


const HeaderNavBarPush = compPush(HeaderNavBar);

const clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarPush
      className={props.className}
      isMini={props.isMini}
      menuTop={menuTop}
      menuOffset={menuOffset}
      onClick={props.onClick}
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
  it('should override default onCLick function is props onClick is set', () => {
    const renderedComponent = renderComponentUsingTheme({
      menuAccount,
      menu,
      onClick: clickTest,
    });
    expect(renderedComponent.find('Push').props().onClick).toBeDefined();
    renderedComponent.find('button').simulate('click');
    expect(clickTest()).toBe('test-click-additional');
  });
  it('should have isMini props', () => {
    const renderedComponent = renderComponentUsingTheme({
      menuAccount,
      menu,
      isMini: true,
    });
    expect(renderedComponent.find('HeaderNavBar').props().isMini).toBe(true);
  });
});
