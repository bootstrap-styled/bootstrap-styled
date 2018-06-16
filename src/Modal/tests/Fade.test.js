
import React from 'react';
import { mount } from 'enzyme';

import { BootstrapProvider } from 'bootstrap-styled-provider';

import Fade from '../Fade';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Fade {...props} />
  </BootstrapProvider>
);

describe('<Fade />', () => {
  it('should render an <Fade> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Fade').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
