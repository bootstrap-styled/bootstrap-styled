/**
 * Testing our Tooltip component
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Tooltip from '../index';

const renderComponent = (props = {}) => mount(
  <BootstrapProvider>
    <div id="my-target"></div>
    <Tooltip {...props} placement="top center" />
  </BootstrapProvider>
);

describe('<Tooltip />', () => {
  let props;

  beforeEach(() => {
    props = {
      children: <h1>Test</h1>,
      target: 'targetId',
    };
  });

  it('should render an <Tooltip> tag without a theme', () => {
    const renderedComponent = renderComponent(props);
    expect(renderedComponent.find('Tooltip').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = shallow(
      <Tooltip {...props} placement="top center" />
    );
    expect(renderedComponent.contains(props.children)).toEqual(true);
  });
});
