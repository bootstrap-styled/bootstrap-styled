/**
 * Testing our Unordered List component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Ul from '../index';
import Li from '../../Li';


const children = (<Li>Test</Li>);

const renderComponent = (props = {}) => shallow(
  <Ul {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Ul {...props} />
  </BootstrapProvider>
);

describe('<Ul />', () => {
  it('should render an <Ul> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Ul').length).toBe(1);
  });

  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render an <Ul> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').length).toBe(1);
    expect(renderedComponent.find('Ul').length).toBe(1);
  });
  it('should have a classname list-inline', () => {
    const renderedComponent = renderComponentUsingTheme({
      inline: true,
      children,
    });
    expect(renderedComponent.find('ul').hasClass('list-inline'));
  });
  it('should have a classname list-unstyled', () => {
    const renderedComponent = renderComponentUsingTheme({
      unstyled: true,
      children,
    });
    expect(renderedComponent.find('ul').hasClass('list-unstyled'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
