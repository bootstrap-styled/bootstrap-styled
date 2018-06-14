/**
 * Testing our CardImg component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import CardImg from '../CardImg';

const renderComponent = (props) => shallow(
  <CardImg {...props} />
);


const renderComponentUsingTheme = (props) => mount(
  <BootstrapProvider>
    <CardImg {...props} />
  </BootstrapProvider>
);


describe('<CardImg />', () => {
  it('should render an <CardImg> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should render an <CardImg> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('CardImg').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should have an attribute top without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      top: true,
    });
    expect(renderedComponent.find('CardImg').props().top).toBe(true);
  });
  it('should have an attribute bottom without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      bottom: true,
    });
    expect(renderedComponent.find('CardImg').props().bottom).toBe(true);
  });
  it('should have a class .card-img by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img').hasClass('card-img')).toBe(true);
  });
});
