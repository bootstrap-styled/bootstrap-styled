/**
 * Testing our Dropdown component
 */
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from 'theme';
import { mount } from 'enzyme';
import Dropdown from '../Dropdown';
import Button from '../../Button';
import Ul from '../../Ul';
import Li from '../../Li';
import A from '../../A';


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Dropdown className="dropdown" {...props}>
      <Ul>
        <Li><A dropdown-item href="#">Item 1</A></Li>
        <Li separator />
        <Li><A dropdown-item disabled href="#">Item disabled</A></Li>
        <Li><A dropdown-item href="#">Item last</A></Li>
      </Ul>
    </Dropdown>
  </ThemeProvider>
);

describe('<Dropdown />', () => {
  it('should render an <Dropdown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
    });
    expect(renderedComponent.find('Dropdown').length).toBe(0);
  });
  // it('should toggle the state on click <Dropdown>', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     toggler: {
  //       component: Button,
  //       text: 'Dropdown',
  //       className: 'btn btn-secondary',
  //     },
  //   });
  //   renderedComponent.find('button').simulate('click');
  //   expect(renderedComponent.find('Dropdown').length).toBe(1);
  // });
  // it('should render an <Dropdown> tag without a theme', () => {
  //   const renderedComponent = renderComponent({
  //     toggler: {
  //       component: Button,
  //       text: 'Dropdown',
  //       className: 'btn btn-secondary',
  //     },
  //   });
  //   expect(renderedComponent.find('OnClickOutside(Dropdown)').length).toBe(1);
  // });
  // it('should render a <Dropdown> with a <A> button', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     toggler: {
  //       component: A,
  //       text: 'Dropdown',
  //       href: 'http://toto',
  //       className: 'btn btn-secondary',
  //     },
  //   });
  //   renderedComponent.find('a[href="http://toto"]').simulate('click');
  //   expect(renderedComponent.find('Dropdown').length).toBe(1);
  // });
  // it('should render a <Dropdown> with a dropdown-split', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     toggler: {
  //       component: Button,
  //       text: 'Dropdown',
  //       className: 'btn btn-secondary',
  //     },
  //     'dropdown-split': true,
  //   });
  //   expect(renderedComponent.find('Dropdown').length).toBe(1);
  // });
  // it('should have a class .dropdown-toggle by default with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme();
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('Button').hasClass('dropdown-toggle')).toBe(true);
  // });
  // it('should have an attribute .dropdown-toggle-split with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     'dropdown-split': true,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('Button').hasClass('dropdown-toggle-split')).toBe(true);
  // });
});
