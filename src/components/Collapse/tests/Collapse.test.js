/**
 * Testing our Collapse component
 */

import { shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Collapse from '../index';
import { makeTheme } from '../../../theme';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => shallow(
  <BootstrapProvider theme={props.theme}>
    <Collapse
      isOpened={props.isOpened}
    >
      {props.children}
    </Collapse>
  </BootstrapProvider>
);


describe('<Collapse />', () => {
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpened: true,
      theme: makeTheme({
        '$enable-transitions': false,
      }),
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpened: true,
      theme: makeTheme({
        '$enable-transitions': false,
      }),
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpened: false,
      theme: makeTheme({
        '$enable-transitions': true,
      }),
    });
    expect(renderedComponent.length).toBe(1);
  });
});
