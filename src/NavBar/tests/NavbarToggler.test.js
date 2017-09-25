/**
 * Testing our NavBarToggler component
 */
import { shallow } from 'enzyme';
import React from 'react';
import NavbarToggler from '../NavbarToggler';

const renderComponent = (props = {}) => shallow(
  <NavbarToggler {...props} />
);

describe('<NavbarToggler />', () => {
  it('should render an <NavbarToggler> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('NavbarToggler').length).toBe(0);
  });
  it('should render a <NavbarToggler> with class .navbar-toggler-left', () => {
    const renderedComponent = renderComponent({
      left: true,
    });
    expect(renderedComponent.find('.navbar-toggler-left').length).toBe(1);
  });
  it('should render a <NavBarToggler> with class .navbar-toggler-right', () => {
    const renderedComponent = renderComponent({
      right: true,
    });
    expect(renderedComponent.find('.navbar-toggler-right').length).toBe(1);
  });
});
