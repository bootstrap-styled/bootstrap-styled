/**
 * Testing our Card component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import Card from '../Card';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <Card {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Card {...props} />
  </BootstrapProvider>
);


describe('<Card />', () => {
  it('should render an <Card> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('CardUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Card> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Card').length).toBe(1);
  });
  it('should render an <Card> tag with a theme wtihout stlying props', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Card').props().color).toBe(undefined);
    expect(renderedComponent.find('Card').props().inverse).toBe(undefined);
    expect(renderedComponent.find('Card').props().block).toBe(undefined);
  });
  it('should have an attribute inverse with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      inverse: true,
    });
    expect(renderedComponent.find('Card').props().inverse).toBe(true);
  });
  it('should have an attribute color with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      color: 'primary',
    });
    expect(renderedComponent.find('Card').props().color).toBe('primary');
  });
  it('should have an attribute block with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      block: true,
    });
    expect(renderedComponent.find('Card').props().block).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
