/**
 * Testing our Area component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Area from '../index';

const renderComponent = (props = {}) => shallow(
  <Area
    shape={props.shape}
    coords={props.coords}
    alt={props.alt}
    href={props.href}
    download={props.download}
    media={props.media}
    rel={props.rel}
    target={props.target}
    type={props.type}
    className={props.className}
  />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Area
      shape={props.shape}
      coords={props.coords}
      alt={props.alt}
      href={props.href}
      download={props.download}
      media={props.media}
      rel={props.rel}
      target={props.target}
      type={props.type}
      className={props.className}
    />
  </ThemeProvider>
);


describe('<Area />', () => {
  it('should render an <Area> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('area').length).toBe(1);
  });
  it('should have an shape attribute without a theme', () => {
    const renderedComponent = renderComponent({
      shape: 'rect',
    });
    expect(renderedComponent.props().shape).toEqual('rect');
  });
  it('should have an coords attribute without a theme', () => {
    const renderedComponent = renderComponent({
      coords: '0,0,82,126',
    });
    expect(renderedComponent.props().coords).toEqual('0,0,82,126');
  });
  it('should have an alt attribute without a theme', () => {
    const renderedComponent = renderComponent({
      alt: 'Sun',
    });
    expect(renderedComponent.props().alt).toEqual('Sun');
  });
  it('should have an href attribute without a theme', () => {
    const renderedComponent = renderComponent({
      href: 'sun.htm',
    });
    expect(renderedComponent.props().href).toEqual('sun.htm');
  });
  it('should have an download attribute without a theme', () => {
    const renderedComponent = renderComponent({
      download: 'sun',
    });
    expect(renderedComponent.props().download).toEqual('sun');
  });
  it('should have an media attribute without a theme', () => {
    const renderedComponent = renderComponent({
      media: 'screen and (min-color-index:256)',
    });
    expect(renderedComponent.props().media).toEqual('screen and (min-color-index:256)');
  });
  it('should have an rel attribute without a theme', () => {
    const renderedComponent = renderComponent({
      rel: 'alternate',
    });
    expect(renderedComponent.props().rel).toEqual('alternate');
  });
  it('should have an target attribute without a theme', () => {
    const renderedComponent = renderComponent({
      target: '_blank',
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should have an type attribute without a theme', () => {
    const renderedComponent = renderComponent({
      type: 'image/gif',
    });
    expect(renderedComponent.props().type).toEqual('image/gif');
  });
  it('should render an <area> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('area').length).toBe(1);
  });
  it('should have an shape attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      shape: 'rect',
    });
    expect(renderedComponent.find('area').props().shape).toEqual('rect');
  });
  it('should have an coords attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      coords: '0,0,82,126',
    });
    expect(renderedComponent.find('area').props().coords).toEqual('0,0,82,126');
  });
  it('should have an alt attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'Sun',
    });
    expect(renderedComponent.find('area').props().alt).toEqual('Sun');
  });
  it('should have an href attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'sun.htm',
    });
    expect(renderedComponent.find('area').props().href).toEqual('sun.htm');
  });
  it('should have an download attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      download: 'sun',
    });
    expect(renderedComponent.find('area').props().download).toEqual('sun');
  });
  it('should have an media attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      media: 'screen and (min-color-index:256)',
    });
    expect(renderedComponent.find('area').props().media).toEqual('screen and (min-color-index:256)');
  });
  it('should have an rel attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      rel: 'alternate',
    });
    expect(renderedComponent.find('area').props().rel).toEqual('alternate');
  });
  it('should have an target attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      target: '_blank',
    });
    expect(renderedComponent.find('area').props().target).toEqual('_blank');
  });
  it('should have an type attribute without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'image/gif',
    });
    expect(renderedComponent.find('area').props().type).toEqual('image/gif');
  });
});
