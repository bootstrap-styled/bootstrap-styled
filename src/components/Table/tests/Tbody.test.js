/**
 * Testing our Tbody component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tbody from '../Tbody';

const children = <span> test </span>;
const renderComponent = (props = {}) => shallow(
  <Tbody {...props} />
);

describe('<Tbody />', () => {
  it('should render a <Tbody> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('tbody').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
