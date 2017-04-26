/**
 * Testing our Samp component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Samp from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Samp {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Samp {...props} />
  </BootstrapProvider>
);


describe('<Samp />', () => {
  it('should render an <Samp> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('samp').length).toBe(1);
  });
});
