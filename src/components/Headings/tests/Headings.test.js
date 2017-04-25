/**
 * Testing our H1 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Headings from '../Headings';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <Headings {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Headings {...props} />
  </BootstrapProvider>
);


describe('<Headings />', () => {
  it('should render an <Headings> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      tag: 'h1',
    });
    expect(renderedComponent.find('[tag="h1"]').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      tag: 'h1',
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Headings> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      tag: 'h1',
    });
    expect(renderedComponent.find('h1').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'test-color',
      tag: 'h1',
    });
    expect(renderedComponent.find('h1').hasClass('test-color'));
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
      tag: 'h1',
    });
    expect(renderedComponent.find('h1').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      tag: 'h1',
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
