/**
 * Testing our link component
 */

import { shallow } from 'enzyme';
import React from 'react';
import Fa from '../index';
import BootstrapProvider from '../../BootstrapProvider';

const renderComponent = (props = {}) => shallow(
  <Fa {...props} />
);

const renderComponentUsingTheme = (props = {}) => shallow(
  <BootstrapProvider>
    <Fa {...props} />
  </BootstrapProvider>
);

describe('<Fa />', () => {
  it('should render an <i class="fa"> tag without a theme', () => {
    const renderedComponent = renderComponent({
      lock: true,
    });
    expect(renderedComponent.type()).toEqual('i');
    expect(renderedComponent.hasClass('fa-lock')).toBe(true);
  });
  it('should render an <i class="fa"> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <i class="fa fa-user"> tag with a theme', () => {
    const renderedComponent = renderComponent({
      user: true,
    });
    expect(renderedComponent.find('.fa-user').length).toEqual(1);
  });
});
