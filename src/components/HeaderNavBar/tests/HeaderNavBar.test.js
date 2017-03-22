/**
 * Testing our Nav component
 */
// import { ThemeProvider } from 'styled-components';

import { shallow } from 'enzyme';
import React from 'react';
// import theme from 'theme';

import HeaderNavBar from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <HeaderNavBar {...props}>
    {props.children}
  </HeaderNavBar>
);


// const renderComponentUsingTheme = (props = {}) => mount(
//   <ThemeProvider theme={theme}>
//     <HeaderNavBar {...props}>
//       {props.children}
//     </HeaderNavBar>
//   </ThemeProvider>
// );


describe('<HeaderNavBar />', () => {
  it('should render an <HeaderNavBar> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  // it('should render an <HeaderNavBar> tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  // });
  // it('should render an <HeaderNavBar> with a props nav-top tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'nav-top': navTopContent,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['nav-top']).toEqual(navTopContent);
  // });
  // it('should render an <HeaderNavBar> with a props menu-right tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'menu-right': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['menu-right']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props navbar-inverse tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'navbar-inverse': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['navbar-inverse']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props bg-inverse tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'bg-inverse': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['bg-inverse']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props navbar-light tag with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'navbar-light': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['navbar-light']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props bg-faded faded with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'bg-faded': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['bg-faded']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props static-top faded with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'static-top': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['static-top']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props sticky-top faded with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'sticky-top': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['sticky-top']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props fixed-top faded with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'fixed-top': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['fixed-top']).toBe(true);
  // });
  // it('should render an <HeaderNavBar> with a props fixed-bottom faded with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     'fixed-bottom': true,
  //   });
  //   expect(renderedComponent.find('HeaderNavBar').props()['fixed-bottom']).toBe(true);
  // });
  // it('should render a <HeaderNavBar> with a Button Component with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     button: {
  //       component: Button,
  //       className: 'btn-test',
  //     },
  //   });
  //   expect(renderedComponent.find('Button').length).toBe(1);
  //   expect(renderedComponent.find('button').hasClass('btn-test')).toEqual(true);
  // });
  // it('should render an <HeaderNavBar> with a click that changes the props active of Overlay and OffsetNav', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //   });
  //   renderedComponent.find('button').simulate('click');
  //   expect(renderedComponent.find('Overlay').props().active).toEqual(true);
  //   expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  // });
  // it('should have children with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //   });
  //   expect(renderedComponent.contains(children)).toEqual(true);
  // });
});
