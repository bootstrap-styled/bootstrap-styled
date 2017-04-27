/**
 * Testing our PaginationLink component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import PaginationLink from '../PaginationLink';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <PaginationLink {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <PaginationLink {...props} />
  </BootstrapProvider>
);


describe('<PaginationLink />', () => {
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationLink> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render previous', () => {
    const wrapper = shallow(<PaginationLink previous />);

    expect(wrapper.prop('aria-label')).toBe('Previous');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00ab');
    expect(wrapper.find('.sr-only').text()).toBe('Previous');
  });

  it('should render next', () => {
    const wrapper = shallow(<PaginationLink next />);

    expect(wrapper.prop('aria-label')).toBe('Next');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00bb');
    expect(wrapper.find('.sr-only').text()).toBe('Next');
  });
  it('should render custom caret', () => {
    const wrapper = shallow(<PaginationLink next>Yo</PaginationLink>);

    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('Yo');
  });
});
