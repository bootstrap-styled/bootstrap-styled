/**
 * Testing our Tfoot component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tfoot from '../Tfoot';

const children = <span> test </span>;
const renderComponent = () => shallow(
  <Tfoot>
    {children}
  </Tfoot>
);

describe('<Tfoot />', () => {
  it('should render a <Tfoot> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tfoot').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
