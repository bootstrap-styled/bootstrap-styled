/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';

import React from 'react';
import theme from 'theme';

import Modal from '../Modal';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Modal {...props}>
      {children}
    </Modal>
  </ThemeProvider>
);

describe('<Modal />', () => {
  it('should render an <Modal> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Modal').length).toBe(1);
  });
  // it('should have children with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //   });
  //   expect(renderedComponent.contains(children)).toEqual(true);
  // });
});
