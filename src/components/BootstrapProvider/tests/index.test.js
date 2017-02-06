import React from 'react';
import { shallow, mount } from 'enzyme';
import theme from '../../../config';

import BootstrapProvider from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <BootstrapProvider theme={props.theme}>
    {props.children}
  </BootstrapProvider>
);


describe('<BootstrapProvider />', () => {
  it('should render a <ThemeProvider />', () => {
    const renderedComponent = renderComponent({
      theme: {
        color: 'red',
      },
      children,
    });
    expect(renderedComponent.find('ThemeProvider').length).toBe(1);
  });
  it('should pass a theme with red to <ThemeProvider />', () => {
    const renderedComponent = renderComponent({
      theme: {
        color: 'red',
      },
      children,
    });
    expect(renderedComponent.props().theme.color).toEqual('red');
  });
});
