/**
 * Testing our Modal component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Modal from '../index';

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Modal {...props} />
  </BootstrapProvider>
);

describe('<Modal />', () => {
  it('should render an <Modal> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('ModalUnstyled').length).toBe(1);
  });
});
