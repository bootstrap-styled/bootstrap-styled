/**
 * Testing our HeaderNavBarCollapse HoC component
 */

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { mount } from 'enzyme';
import React from 'react';

import HeaderNavBar, { compCollapse } from '../index';

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

const menuCollapsed = {
  menu,
  isCollapsed: false,
};

const HeaderNavBarCollapse = compCollapse(HeaderNavBar);
const clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBarCollapse
      className={props.className}
      brandTitle={props.brandTitle}
      menuCollapsed={menuCollapsed}
      onClick={props.onClick}
    />
  </ThemeProvider>
);

describe('<HeaderNavBarCollapse />', () => {
  it('should simulate a click', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      brandTitle: 'testing brand',
    });
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(true);
  });
  it('should have brandTitle props', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      brandTitle: 'testing brand',
    });
    expect(renderedComponent.find('Collapse').props().brandTitle).toEqual('testing brand');
  });
  it('should add to the  onCLick function if props onClick is set', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      brandTitle: 'testing brand',
      onClick: clickTest,
    });
    expect(renderedComponent.find('Collapse').props().onClick).toBeDefined();
    renderedComponent.find('button').simulate('click');
    expect(clickTest()).toBe('test-click-additional');
  });
});
