/**
 * Testing our TransitionGroup component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import CssTransitionGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <CssTransitionGroup {...props} />
  </BootstrapProvider>
);

describe('<CssTransitionGroup />', () => {
  it('should render a <CssTransitionGroup> tag', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
