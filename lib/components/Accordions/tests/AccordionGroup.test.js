// /**
//  * Testing our AccordionGroup component
//  */
// import { ThemeProvider } from 'styled-components';
//
// import { shallow, mount } from 'enzyme';
// import React from 'react';
// import theme from 'theme';
//
// import AccordionGroup from '../AccordionGroup';
//
// const children = <h1> test </h1>;
//
// const renderComponent = (props = {}) => shallow(
//   <AccordionGroup
//     className={props.className}
//   >
//     {children}
//   </AccordionGroup>
// );
//
//
// const renderComponentUsingTheme = (props = {}) => mount(
//   <ThemeProvider theme={theme}>
//     <AccordionGroup
//       className={props.className}
//     >
//       {children}
//     </AccordionGroup>
//   </ThemeProvider>
// );
//
//
// describe('<CardGroup />', () => {
//   it('should render an <CardGroup> tag without a theme', () => {
//     const renderedComponent = renderComponent({
//       children,
//     });
//     expect(renderedComponent.find('CardGroup').length).toBe(1);
//   });
// });