/**
 * Testing our ListGroupItem component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import ListGroupItem from '../ListGroupItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ListGroupItem {...props}>
    {props.children}
  </ListGroupItem>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ListGroupItem {...props}>
      {props.children}
    </ListGroupItem>
  </BootstrapProvider>
);


describe('<ListGroupItem />', () => {
  it('should render an <ListGroupItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ListGroupItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
    expect(renderedComponent.find('ListGroupItem').length).toBe(1);
  });
  it('should have a class active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('li').hasClass('active'));
  });
  it('should have a class disabled with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      disabled: true,
    });
    expect(renderedComponent.find('li').hasClass('disabled'));
  });
  it('should have a class list-group-item-action with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      action: true,
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-action'));
  });
  it('should have a class list-group-item-primary with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'primary',
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-primary'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
