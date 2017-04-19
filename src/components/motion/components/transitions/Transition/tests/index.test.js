/**
 * Testing our TransitionGroup component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import Transition from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <Transition {...props} />
  </BootstrapProvider>
);

describe('<Transition />', () => {
  it('should render a <Transition /> tag', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
