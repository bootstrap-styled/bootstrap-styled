/**
 * Testing our Sup component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Sup from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Sup {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Sup {...props} />
  </BootstrapProvider>
);


describe('<Sup />', () => {
  it('should render an <Sup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
  it('should render a <sup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
});
