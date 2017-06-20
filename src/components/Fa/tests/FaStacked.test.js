/**
 * Testing our FaStacked component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import FaStacked from '../FaStacked';

const renderComponent = (props = {}) => shallow(
  <FaStacked {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FaStacked {...props} />
  </BootstrapProvider>);

describe('<FaStacked />', () => {
  it('should render an <FaStacked> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a class fa-stacked by defaultwithout a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('span').hasClass('fa-stack')).toBe(true);
  });
  it('should render an <FaStacked> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FaStacked').length).toEqual(1);
  });
  it('should render an <FaStacked> tag with a className fa-lgwith a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'lg',
    });
    expect(renderedComponent.find('span').hasClass('fa-lg')).toBe(true);
  });
});
