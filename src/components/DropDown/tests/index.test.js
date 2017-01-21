/* eslint-disable */
/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';
import React from 'react';

import DropDown from '../index';
import Button from '../../Button';
import Ul from '../../Ul';
import Li from '../../Li';
import A from '../../A';

import theme from '../../../config';

import { mount } from 'enzyme';


const dropdown = (<Ul dropdown-menu>
  <Li><A dropdown-item href="#">Item 1</A></Li>
  <Li><A dropdown-item active href="#">Item active</A></Li>
  <Li separator />
  <Li><A dropdown-item disabled href="#">Item disabled</A></Li>
  <Li><A dropdown-item href="#">Item last</A></Li>
</Ul>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <DropDown
      button={Button}
      buttonProps={{
        type: 'button',
        'dropdown-toggle': true,
        value: 'Dropdown',
      }}
      dropdown={dropdown}
    />
  </ThemeProvider>
);


describe('<DropDown />', () => {
  it('should render an <DropDown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropDown').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(2);
  });
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
