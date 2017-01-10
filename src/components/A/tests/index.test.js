/**
 * Testing our link component
 */
import theme from 'config';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';

import A from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <A
    href={props.href}
    target={props.target}
    type={props.type}
    active={props.active}
    className={props.className}
    disabled={props.disabled}
    dropdown-item={props['dropdown-item']}
  >
    {props.children}
  </A>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <A
      href={props.href}
      target={props.target}
      type={props.type}
      active={props.active}
      className={props.className}
      disabled={props.disabled}
      dropdown-item={props['dropdown-item']}
    >
      {props.children}
    </A>
  </ThemeProvider>
);


describe('<A />', () => {
  it('should render an <A> tag without a theme', () => {
    const active = true;
    const renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children,
      type: 'text/html',
      target: '_blank',
      active,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have an href attribute without a theme', () => {
    const renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children,
    });
    expect(renderedComponent.props().href).toEqual('http://mxstbr.com/');
  });
  it('should adopt a target attribute without a theme', () => {
    const renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children,
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should adopt a type attribute without a theme', () => {
    const renderedComponent = renderComponent({
      type: 'text/html',
      href: 'http://mxstbr.com/',
      children,
    });
    expect(renderedComponent.props().type).toEqual('text/html');
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <a> tag with a theme', () => {
    const active = true;
    const renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children,
      active,
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render a href attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().href).toEqual('http://mxstbr.com/');
  });
  it('should render an type attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().type).toEqual('text/html');
  });
  it('should render a target attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().target).toEqual('_blank');
  });

  it('should render an <A> tag without a theme and props active', () => {
    const active = true;
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      active,
    });
    expect(renderedComponent.find('a').hasClass('active')).toEqual(true);
  });
  it('should render an <A> tag without a theme and props disabled', () => {
    const disabled = true;
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      disabled,
    });
    expect(renderedComponent.find('a').hasClass('disabled')).toEqual(true);
  });
  it('should render an <A> tag without a theme and props dropdown-item', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children,
      'dropdown-item': true,
    });
    expect(renderedComponent.find('a').hasClass('dropdown-item')).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
