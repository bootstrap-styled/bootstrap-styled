/**
 * Testing our ListGroupItem component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
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
  it('should have a class list-group-item-success with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'success',
    });
    expect(renderedComponent.find('li').hasClass('list-group-item-success'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should prevent click event when disabled is passed', () => {
    const onDisableClick = jest.fn();
    const renderedComponent = mount(<ListGroupItem disabled onClick={onDisableClick}>Yo!</ListGroupItem>);
    renderedComponent.find('li').simulate('click');
    expect(onDisableClick).not.toHaveBeenCalled();
  });
});
