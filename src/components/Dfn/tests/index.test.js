/**
 * Testing our Dfn component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Dfn from '../index';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <Dfn {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Dfn {...props} />
  </BootstrapProvider>
);


describe('<Dfn />', () => {
  it('should render an <Dfn> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Dfn').length).toBe(1);
  });
  it('should render a <abbr> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('dfn').length).toBe(1);
    expect(renderedComponent.find('Dfn').length).toBe(1);
  });
});
