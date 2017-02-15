/**
 * Testing our NavBarToggler component
 */
import { shallow } from 'enzyme';
import React from 'react';
import NavBarToggler from '../NavBarToggler';

const renderComponent = (props = {}) => shallow(
  <NavBarToggler {...props} />
);

describe('<NavBarToggler />', () => {
  it('should render a <NavBarToggler> with class .navbar-toggler-left', () => {
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
