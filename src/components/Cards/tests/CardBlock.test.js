/**
 * Testing our CardBlock component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import CardBlock from '../CardBlock';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardBlock {...props}>
    {children}
  </CardBlock>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardBlock {...props}>
      {children}
    </CardBlock>
  </BootstrapProvider>
);


describe('<CardBlock />', () => {
  it('should render an <CardBlock> tag without a theme', () => {
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
  it('should render an <CardBlock> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardBlock').length).toBe(1);
  });
  it('should have a class .card-block by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').at(1).hasClass('card-block')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
