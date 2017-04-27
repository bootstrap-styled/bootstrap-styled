/**
 * Testing our Li component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Ul from '../../Ul';
import Li from '../index';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <Ul>
    <Li {...props} />
  </Ul>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Ul>
      <Li {...props} />
    </Ul>
  </BootstrapProvider>
);


describe('<Li />', () => {
  it('should render an <Li> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('h1').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Li> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Li').length).toBe(1);
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have a class list-inline-item with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inline: true,
    });
    expect(renderedComponent.find('li').hasClass('list-inline-item'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
