import React from 'react';
import { mount } from 'enzyme';
import theme from 'theme';
import BootstrapProvider from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <BootstrapProvider theme={props.theme}>
    {props.children}
  </BootstrapProvider>
);

describe('<BootstrapProvider />', () => {
  describe('<ThemeProvider />', () => {
    it('should render a <ThemeProvider />', () => {
      const renderedComponent = renderComponent({
        theme,
        children,
      });
      expect(renderedComponent.find('ThemeProvider').length).toBe(1);
    });
    it('should pass a theme with red to <ThemeProvider />', () => {
      const renderedComponent = renderComponent({
        theme,
        children,
      });
      expect(renderedComponent.props().theme['$enable-transitions']).toEqual(true);
    });
    it('should not apply windows phone 8 fix', () => {
      const renderedComponent = renderComponent({
        theme,
        children,
      });
      expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(null);
    });
    it('should apply windows phone 8 fix', () => {
      /* eslint-disable no-restricted-properties, no-underscore-dangle */
      navigator.__defineGetter__('userAgent', () => 'IEMobile/10.0'); // customized user agent
      /* eslint-enable no-restricted-properties, no-underscore-dangle */
      const renderedComponent = renderComponent({
        theme,
        children,
      });
      expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(true);
    });

    it('should contain the default color of $brand-primary', () => {
      const renderedComponent = renderComponent({
        children,
      });
      expect(renderedComponent.find('ThemeProvider').props().theme['$brand-primary']).toBe(theme['$brand-primary']);
    });

    it('should contain the overriden color of $brand-primary', () => {
      const renderedComponent = renderComponent({
        children,
        theme: {
          '$brand-primary': 'red',
        },
      });
      expect(renderedComponent.find('ThemeProvider').props().theme['$brand-primary']).toBe('red');
    });
  });

  describe('<BootstrapProvider /> utils', () => {
    it('should apply all utilities', () => {
      const renderedComponent = renderComponent({
        theme,
        children,
        utils: {
          align: true,
          background: true,
          a: true,
          border: true,
          clearfix: true,
          display: true,
          flex: true,
          float: true,
          screenreaders: true,
          spacing: true,
          text: true,
          visibility: true,
        },
      });
      expect(renderedComponent.length).toBe(1);
    });
  });
});
