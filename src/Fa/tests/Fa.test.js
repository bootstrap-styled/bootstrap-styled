/**
 * Testing our Fa component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Fa from '../Fa';

const renderComponent = (props = {}) => shallow(
  <Fa {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Fa {...props} />
  </BootstrapProvider>
);
describe('<Fa />', () => {
  it('should render an <Fa> tag without a theme', () => {
    const renderedComponent = renderComponent({
      trash: true,
    });
    expect(renderedComponent.find('FaUnstyled').length).toEqual(1);
  });
  it('should have class .fa-trash', () => {
    const renderedComponent = renderComponentUsingTheme({
      trash: true,
    });
    expect(renderedComponent.find('i').hasClass('fa-trash')).toBe(true);
  });
  it('should not have attribute trash', () => {
    const renderedComponent = renderComponentUsingTheme({
      trash: true,
    });
    expect(renderedComponent.find('i').find('[trash]').length).toBe(0);
  });
  it('should render an <Fa> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      trash: true,
    });
    expect(renderedComponent.find('Fa').length).toEqual(1);
  });
  it('should render an <Fa> tag with a className fa-lgwith a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'lg',
    });
    expect(renderedComponent.find('i').hasClass('fa-lg')).toBe(true);
  });
});
