/**
 * Testing our TransitionGroup component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import TransitionGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <TransitionGroup {...props} />
  </BootstrapProvider>
);

describe('<TransitionGroup />', () => {
  it('should render a <TransitionGroup> tag', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
