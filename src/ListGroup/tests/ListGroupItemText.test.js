/**
 * Testing our ListGroupItemText component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import ListGroupItemText from '../ListGroupItemText';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <ListGroupItemText
    className={props.className}
  >
    {props.children}
  </ListGroupItemText>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ListGroupItemText
      className={props.className}
    >
      {props.children}
    </ListGroupItemText>
  </BootstrapProvider>
);


describe('<ListGroupItemText />', () => {
  it('should render an <ListGroupItemText> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('p').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ListGroupItemText> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('p').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
