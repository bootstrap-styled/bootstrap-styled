/**
 * Testing our CssTransitionGroup component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import CssTransition from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <CssTransition {...props} />
  </BootstrapProvider>
);

describe('<CssTransition />', () => {
  it('should render a <CssTransition /> tag', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
