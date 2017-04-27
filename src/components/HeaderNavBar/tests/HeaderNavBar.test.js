/**
 * Testing our Nav component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Button from '../../Button';
import HeaderNavBar from '../HeaderNavBar';

const children = (<h1>Test</h1>);
const navTopContent = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <HeaderNavBar {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <HeaderNavBar {...props} />
  </BootstrapProvider>
);


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
  it('should render an <HeaderNavBar> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should render an <HeaderNavBar> with a props nav-top tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'nav-top': navTopContent,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['nav-top']).toEqual(navTopContent);
  });
  it('should render an <HeaderNavBar> with a props menu-right tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['menu-right']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props navbar-inverse tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inverse: true,
    });
    expect(renderedComponent.find('header').hasClass('navbar-inverse')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-inverse tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'inverse',
    });
    expect(renderedComponent.find('header').hasClass('bg-inverse')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props navbar-light tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      light: true,
    });
    expect(renderedComponent.find('header').hasClass('navbar-light')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-faded faded with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'faded',
    });
    expect(renderedComponent.find('header').hasClass('bg-faded')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props sticky-top faded with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      sticky: 'top',
    });
    expect(renderedComponent.find('header').hasClass('sticky-top')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-top faded with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      fixed: 'top',
    });
    expect(renderedComponent.find('header').hasClass('fixed-top')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-bottom faded with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      fixed: 'bottom',
    });
    expect(renderedComponent.find('header').hasClass('fixed-bottom')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props animationPush and menuRight with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      animationPush: true,
      menuRight: true,
    });
    expect(renderedComponent.find('HeaderNavBar').props().animationPush).toEqual(true);
    expect(renderedComponent.find('HeaderNavBar').props().menuRight).toEqual(true);
  });
  it('should render a <HeaderNavBar> with a Button Component with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      button: {
        component: Button,
        className: 'btn-test',
      },
    });
    expect(renderedComponent.find('Button').length).toBe(1);
    expect(renderedComponent.find('button').at(0).hasClass('btn-test')).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a click that changes the props active of Overlay and OffsetNav', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    renderedComponent.find('button').at(0).simulate('click');
    expect(renderedComponent.find('Overlay').props().active).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props belowHeader with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      belowHeader: true,
    });
    expect(renderedComponent.find('HeaderNavBar').props().belowHeader).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props menuClose with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      menuClose: true,
    });
    expect(renderedComponent.find('HeaderNavBar').props().menuClose).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props animation-push with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'animation-push': true,
    });
    expect(renderedComponent.find('HeaderNavBar').props()['animation-push']).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props()['animation-push']).toEqual(true);
  });
  it('should render an <HeaderNavBar> with an onClick function for Overlay', () => {
    const onClick = jest.fn();
    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick,
    });
    renderedComponent.find('Overlay').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should render an <HeaderNavBar> with an onClick function for Button', () => {
    const onClick = jest.fn();
    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick,
    });
    renderedComponent.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
