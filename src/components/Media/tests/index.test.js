/**
 * Testing our Media component
 */

// import { BootstrapProvider } from 'styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import Media from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Media
    className={props.className}
  >
    {props.children}
  </Media>
);

// const renderComponentUsingTheme = (props = {}) => mount(
//   <BootstrapProvider>
//     <Media
//       className={props.className}
//     >
//       {props.children}
//     </Media>
//   </BootstrapProvider>
// );


describe('<Media />', () => {
  it('should render an <Media> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      left: true,
    });
    expect(renderedComponent.find('Media').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
