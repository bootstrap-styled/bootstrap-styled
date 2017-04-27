/**
 * Testing our Pagination component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Pagination from '../Pagination';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Pagination
    className={props.className}
  >
    {props.children}
  </Pagination>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Pagination
      className={props.className}
    >
      {props.children}
    </Pagination>
  </BootstrapProvider>
);


describe('<Pagination />', () => {
  it('should render an <Pagination> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Pagination').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Pagination> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Pagination').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
