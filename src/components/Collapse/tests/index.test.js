/**
 * Testing our Collapse component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Collapse from '../index';
import { makeTheme } from '../../../theme';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider theme={props.theme}>
    <Collapse {...props}>
      {props.children}
    </Collapse>
  </BootstrapProvider>
);


describe('<Collapse />', () => {
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: true,
      theme: makeTheme({
        '$enable-transitions': false,
      }),
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: false,
      theme: makeTheme({
        '$enable-transitions': true,
      }),
    });
    expect(renderedComponent.length).toBe(1);
  });
});
