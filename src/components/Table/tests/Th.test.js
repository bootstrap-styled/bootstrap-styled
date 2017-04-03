/**
 * Testing our Th component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Th from '../index';

const children = <span> test </span>;
const renderComponent = () => shallow(
  <Th>
    {children}
  </Th>
);

describe('<Th />', () => {
  it('should render a <Th> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('th').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
