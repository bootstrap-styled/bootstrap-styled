/**
 * Testing our FigCaption component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import FigCaption from '../FigCaption';

const children = 'Test';

const renderComponent = (props = {}) => shallow(
  <FigCaption {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FigCaption {...props} />
  </BootstrapProvider>
);


describe('<FigCaption />', () => {
  it('should render an <FigCaption> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should contain children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('figcaption').length).toBe(1);
    expect(renderedComponent.find('FigCaption').length).toBe(1);
  });
  it('should render a <figcaption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      right: true,
    });
    expect(renderedComponent.find('FigCaption').props().right).toBe(true);
  });
});
