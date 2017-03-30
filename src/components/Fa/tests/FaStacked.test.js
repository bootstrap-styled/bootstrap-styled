/**
 * Testing our FaStacked component
 */

import { shallow } from 'enzyme';
import React from 'react';
import FaStacked from '../FaStacked';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <FaStacked {...props}>
    {children}
  </FaStacked>
);

const renderComponentUsingTheme = (props = {}) => shallow(
  <FaStacked {...props}>
    {children}
  </FaStacked>
);

describe('<FaStacked />', () => {
  it('should render an <FaStacked> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a class fa-stacked by defaultwithout a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('span').hasClass('fa-stack')).toBe(true);
  });
  it('should render an <FaStacked> with children', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FaStacked> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a className fa-lgwith a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'lg',
    });
    expect(renderedComponent.find('span').hasClass('fa-lg')).toBe(true);
  });
  it('should render an <FaStacked> with children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
