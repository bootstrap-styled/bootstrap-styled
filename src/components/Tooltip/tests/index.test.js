/**
 * Testing our Tooltip component
 */
import { shallow } from 'enzyme';
import React from 'react';

import Tooltip from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Tooltip {...props}>
    {props.children}
  </Tooltip>
);

describe('<Tooltip />', () => {
  it('should render an <Tooltip> tag without a theme', () => {
    const renderedComponent = renderComponent({
      target: 'targetId',
      children,
    });
    expect(renderedComponent.find('Tooltip').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      target: 'targetId',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
