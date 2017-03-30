/**
 * Testing our Fa component
 */

import { shallow } from 'enzyme';
import React from 'react';
import Fa from '../Fa';

const renderComponent = (props = {}) => shallow(
  <Fa {...props} />
);

const renderComponentUsingTheme = (props = {}) => shallow(
  <Fa {...props} />
);

describe('<Fa />', () => {
  it('should render an <Fa> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a props user with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      user: true,
    });
    expect(renderedComponent.find('Fa').props().user).toEqual(true);
  });
  it('should render an <i class="fa fa-user"> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'lg',
    });
    expect(renderedComponent.find('Fa').props().size).toEqual('lg');
  });
});
