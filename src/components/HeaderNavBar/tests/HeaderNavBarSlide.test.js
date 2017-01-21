/**
 * Testing our HeaderNavBarSlide HoC component
 */

import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import HeaderNavBar, { compSlide } from '../index';

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


const HeaderNavBarSlide = compSlide(HeaderNavBar);

const clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarSlide
      className={props.className}
      menuTop={menuTop}
      menuOffset={menuOffset}
      onClick={props.onClick}
    />
  </ThemeProvider>
);

describe('<HeaderNavBarSlide />', () => {
  it('should simulate a click', () => {
    const renderedComponent = renderComponentUsingTheme({
      menuAccount,
      menu,
    });
    expect(renderedComponent.find('MenuSlide').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuSlide').props().active).toBe(true);
  });
  it('should add to the  onCLick function if props onClick is set', () => {
    const renderedComponent = renderComponentUsingTheme({
      menuAccount,
      menu,
      onClick: clickTest,
    });
    expect(renderedComponent.find('Slide').props().onClick).toBeDefined();
    renderedComponent.find('button').simulate('click');
    expect(clickTest()).toBe('test-click-additional');
  });
});
