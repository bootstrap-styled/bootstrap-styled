/**
 * Testing our HeaderNavBar component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import HeaderNavBar from '../index';

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

const ButtonTest = (<button><span>&quothello&quot</span></button>);

const clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

const renderComponent = (props) => shallow(
  <HeaderNavBar
    menu={props.menu}
    button={props.button}
    container={props.container}
    composeCollapsed={props.composeCollapsed}
    composeSlide={props.composeSlide}
    className={props.className}
    container-fluid={props['container-fluid']}
    navbar-dark={props['navbar-dark']}
    navbar-light={props['navbar-light']}
    navbar-static-top={props['navbar-static-top']}
    navbar-fixed-top={props['navbar-fixed-top']}
  />
);


const renderComponentUsingTheme = (props) => mount(
  <ThemeProvider theme={theme}>
    <HeaderNavBar
      menu={props.menu}
      button={props.button}
      container={props.container}
      composeCollapsed={props.composeCollapsed}
      composeSlide={props.composeSlide}
      className={props.className}
      container-fluid={props['container-fluid']}
      navbar-dark={props['navbar-dark']}
      navbar-light={props['navbar-light']}
      navbar-static-top={props['navbar-static-top']}
      navbar-fixed-top={props['navbar-fixed-top']}
      onClick={props.onClick}
    />
  </ThemeProvider>
);
describe('<HeaderNavBar />', () => {
  it('should render an <HeaderNavBar> tag without a theme', () => {
    const renderedComponent = renderComponent({
      menu,
    });
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
    });
    expect(renderedComponent.find('div').length).toBe(2);
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should have the className .navbar and bd-navbar by default', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
    });
    expect(renderedComponent.find('header').hasClass('navbar')).toBe(true);
    expect(renderedComponent.find('header').hasClass('bd-navbar')).toBe(true);
  });
  it('should have an attribute container', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      container: true,
    });
    expect(renderedComponent.find('HeaderNavBar').props().container).toEqual(true);
  });
  it('should have an attribute container-fluid', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      'container-fluid': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['container-fluid']).toEqual(true);
  });
  it('should have an attribute navbar-dark and applies class .bg-inverse by default', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      'navbar-dark': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-dark']).toEqual(true);
    expect(renderedComponent.find('header').hasClass('bg-inverse')).toBe(true);
  });
  it('should have an attribute navbar-light and applies class .bg-faded by default', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      'navbar-light': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-light']).toEqual(true);
    expect(renderedComponent.find('header').hasClass('bg-faded')).toBe(true);
  });
  it('should have an attribute navbar-static-top', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      'navbar-static-top': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-static-top']).toEqual(true);
  });
  it('should have an attribute navbar-fixed-top', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      'navbar-fixed-top': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-fixed-top']).toEqual(true);
  });

  it('should add to the  onCLick function if props onClick is set', () => {
    const renderedComponent = renderComponentUsingTheme({
      menu,
      button: ButtonTest,
    });
    expect(renderedComponent.find('HeaderNavBar').props().button).toEqual(ButtonTest);
  });
});
