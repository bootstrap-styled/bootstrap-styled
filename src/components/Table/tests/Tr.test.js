/**
 * Testing our Tr component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tr from '../index';

const children = <span> test </span>;
const renderComponent = () => shallow(
  <Tr>
    {children}
  </Tr>
);

describe('<Tr />', () => {
  it('should render a <Tr> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tr').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
