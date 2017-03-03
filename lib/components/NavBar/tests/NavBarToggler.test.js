/**
 * Testing our NavBarToggler component
 */
import { shallow } from 'enzyme';
import React from 'react';
import NavBarToggler from '../NavBarToggler';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(React.createElement(NavBarToggler, props));
};

describe('<NavBarToggler />', function () {
  it('should render a <NavBarToggler> with class .navbar-toggler-left', function () {
    var renderedComponent = renderComponent({
      left: true
    });
    expect(renderedComponent.find('.navbar-toggler-left').length).toBe(1);
  });
  it('should render a <NavBarToggler> with class .navbar-toggler-right', function () {
    var renderedComponent = renderComponent({
      right: true
    });
    expect(renderedComponent.find('.navbar-toggler-right').length).toBe(1);
  });
});