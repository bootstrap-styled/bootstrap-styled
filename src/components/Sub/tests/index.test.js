/**
 * Testing our Sub component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Sub from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Sub {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Sub {...props} />
  </BootstrapProvider>
);


describe('<Sub />', () => {
  it('should render an <Sub> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
  it('should render a <Sub> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sub').length).toBe(1);
  });
});
