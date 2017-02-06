import React from 'react';
import { mount } from 'enzyme';

import BootstrapProvider from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
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
  it('should not apply windows phone 8 fix', () => {
    const renderedComponent = renderComponent({
      theme: {
        color: 'red',
      },
      children,
    });
    expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(null);
  });
  it('should apply windows phone 8 fix', () => {
    /* eslint-disable no-restricted-properties, no-underscore-dangle */
    navigator.__defineGetter__('userAgent', () => 'IEMobile/10.0'); // customized user agent
    /* eslint-enable no-restricted-properties, no-underscore-dangle */
    const renderedComponent = renderComponent({
      theme: {
        color: 'red',
      },
      children,
    });
    expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(true);
  });
});
