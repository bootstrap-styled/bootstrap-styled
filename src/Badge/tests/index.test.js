/**
 * Testing our Badge component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import Badge from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Badge {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Badge {...props} />
  </BootstrapProvider>
);

describe('<Badge />', () => {
  it('should render an <Badge> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('BadgeUnstyled').length).toBe(1);
  });
  it('should have an attribute pill without a theme', () => {
    const renderedComponent = renderComponent({
      pill: true,
    });
    expect(renderedComponent.find('BadgeUnstyled').props().pill).toBe(true);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Tag> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Badge').length).toBe(1);
  });
  it('should have an attribute pill with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      pill: true,
    });
    expect(renderedComponent.find('Badge').props().pill).toBe(true);
  });
  it('should render a classList attribute of <tag> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('span').hasClass('badge')).toEqual(true);
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
