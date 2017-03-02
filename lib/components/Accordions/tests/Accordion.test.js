// /**
//  * Testing our Accordion component
//  */
// import { ThemeProvider } from 'styled-components';
//
// import { shallow, mount } from 'enzyme';
// import React from 'react';
// import theme from 'theme';
// import Accordion from '../Accordion';
// import Collapse from '../../Collapse';
//
// const children = <h1> test </h1>;
// const accordionHeading = <h1> test </h1>;
//
// const renderComponent = (props = {}) => shallow(
//   <Accordion {...props}>
//     {accordionHeading}
//     <Collapse>
//       {children}
//     </Collapse>
//   </Accordion>
// );
//
// const renderComponentUsingTheme = (props = {}) => mount(
//   <ThemeProvider theme={theme}>
//     <Accordion {...props}>
//       {accordionHeading}
//       <Collapse>
//         {children}
//       </Collapse>
//     </Accordion>
//   </ThemeProvider>
// );
//
//
// describe('<Accordion />', () => {
//   it.only('should render an <Accordion> tag without a theme', () => {
//     const renderedComponent = renderComponent({
//       children,
//       accordionGroup: {
//         activeAccordionName: 'accordion-test',
//       },
//       component: PropTypes.component,
//     });
//     console.log('####### ', renderedComponent);
//     // expect(renderedComponent.find('Accordion').length).toBe(1);
//   });
//   it('should have children without a theme', () => {
//     const renderedComponent = renderComponent({
//       children, accordionHeading,
//     });
//     expect(renderedComponent.contains(children)).toEqual(true);
//   });
//   it('should have accordionHeading without a theme', () => {
//     const renderedComponent = renderComponent({
//       children, accordionHeading,
//     });
//     expect(renderedComponent.contains(accordionHeading)).toEqual(true);
//   });
//   it('should render an <Accordion> tag with a theme', () => {
//     const renderedComponent = renderComponentUsingTheme({
//       children, accordionHeading,
//     });
//     expect(renderedComponent.find('Accordion').length).toBe(1);
//     expect(renderedComponent.find('div').length).toBe(1);
//   });
//   it('should have children with a theme', () => {
//     const renderedComponent = renderComponentUsingTheme({
//       children, accordionHeading,
//     });
//     expect(renderedComponent.contains(children)).toEqual(true);
//   });
//   it('should have accordionHeading with a theme', () => {
//     const renderedComponent = renderComponentUsingTheme({
//       children, accordionHeading,
//     });
//     expect(renderedComponent.contains(accordionHeading)).toEqual(true);
//   });
// });