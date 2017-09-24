/**
 * Testing our Tr component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tr from '../Tr';

const children = <span> test </span>;
const renderComponent = (props) => shallow(
  <Tr {...props}>
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
  it('should have a className table-active', () => {
    const renderedComponent = renderComponent({
      children,
      color: 'active',
    });
    expect(renderedComponent.find('tr').hasClass('table-active')).toBe(true);
  });
});
