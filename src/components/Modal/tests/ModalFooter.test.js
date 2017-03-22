/**
 * Testing our ModalFooter component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import ModalFooter from '../ModalFooter';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <ModalFooter {...props}>
    {children}
  </ModalFooter>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ModalFooter {...props}>
      {children}
    </ModalFooter>
  </BootstrapProvider>
);


describe('<ModalFooter />', () => {
  it('should render an <ModalFooter> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ModalFooter> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ModalFooter').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
