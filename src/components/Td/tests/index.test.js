/**
 * Testing our Td component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Td from '../index';

const children = <span> test </span>;
const renderComponent = () => shallow(
  <Td>
    {children}
  </Td>
);

describe('<Td />', () => {
  it('should render a <Td> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('td').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
