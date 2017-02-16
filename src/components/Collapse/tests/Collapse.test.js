/**
 * Testing our Collapse component
 */

import { shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Collapse from '../index';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => shallow(
  <BootstrapProvider theme={{ '$enable-transitions': false }}>
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
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
