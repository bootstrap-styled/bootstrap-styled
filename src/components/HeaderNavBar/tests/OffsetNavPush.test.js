/**
 * Testing our Nav component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import OffsetNavPush from '../OffsetNavPush';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <OffsetNavPush {...props} />
  </BootstrapProvider>
);


describe('<OffsetNavPush />', () => {
  it('should render an <OffsetNavPush> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
