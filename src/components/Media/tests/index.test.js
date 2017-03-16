// /**
//  * Testing our Media component
//  */
//
// import { ThemeProvider } from 'styled-components';
//
// import { shallow, mount } from 'enzyme';
// import React from 'react';
// import theme from 'theme';
// import Media from '../index';
//
// const children = (<h1>Test</h1>);
// const Atag = (<a>Test</a>);
//
// const renderComponent = (props = {}) => shallow(
//   <Media left
//     className={props.className}
//   >
//     {props.children}
//   </Media>
// );
//
// const renderComponentUsingTheme = (props = {}) => mount(
//   <BootstrapProvider theme={theme}>
//     <Media
//       className={props.className}
//     >
//       {props.children}
//     </Media>
//   </BootstrapProvider>
// );
//
//
// describe('<Media />', () => {
//   it('should render an <Media> tag without a theme', () => {
//     const renderedComponent = renderComponent({
//       children,
//       left,
//     });
//     expect(renderedComponent.find('Media').length).toBe(1);
//   });
//   it('should have children without a theme', () => {
//     const renderedComponent = renderComponent({
//       children,
//     });
//     expect(renderedComponent.contains(children)).toEqual(true);
//   });
//   it('should render a <mark> tag with a theme', () => {
//     const renderedComponent = renderComponentUsingTheme({
//       children,
//     });
//     expect(renderedComponent.find('div').length).toBe(1);
//     expect(renderedComponent.find('Media').length).toBe(1);
//   });
//   it('should have children with a theme', () => {
//     const renderedComponent = renderComponentUsingTheme({
//       children,
//     });
//     expect(renderedComponent.contains(children)).toEqual(true);
//   });
//
//   it.only('should render an a tag by default for left', () => {
//     const renderedComponent = shallow(<Media left />);
//     console.log('###children ', children);
//     console.log('###Atag ', Atag);
//
//     expect(renderedComponent.contains(Atag).props.left).toEqual(true);
//   });
//
// });
