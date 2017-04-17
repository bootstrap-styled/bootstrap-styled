/**
 * Testing our TetherContent component
 */

import { shallow } from 'enzyme';
import React from 'react';
import TetherContent from '../index';

const children = <p>Test</p>;
const functionTest = jest.fn();
const tetherConfig = {};
const renderComponent = (props = {}) => shallow(

  <TetherContent
    className={props.className}
    tether={tetherConfig}
    tetherRef={props.tetherRef}
    isOpen={props.isOpen}
    toggle={functionTest}
  >
    {children}
  </TetherContent>
);

describe('<TetherContent />', () => {
  it('should render an <Output> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
