/**
 * Testing our Th component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Th from '../Th';

const children = <span> test </span>;
const renderComponent = (props) => shallow(
  <Th {...props}>
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
  it('should have a className table-active', () => {
    const renderedComponent = renderComponent({
      children,
      color: 'active',
    });
    expect(renderedComponent.find('th').hasClass('table-active')).toBe(true);
  });
});
