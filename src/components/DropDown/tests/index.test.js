/**
 * Testing our DropDown component
 */
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from 'theme';
import { shallow, mount } from 'enzyme';
import DropDown from '../index';
import Button from '../../Button';
import Ul from '../../Ul';
import Li from '../../Li';
import A from '../../A';

const renderComponent = (props = {}) => shallow(
  <DropDown className="dropdown" {...props}>
    <Ul>
      <Li><A dropdown-item href="#">Item 1</A></Li>
      <Li separator />
      <Li><A dropdown-item disabled href="#">Item disabled</A></Li>
      <Li><A dropdown-item href="#">Item last</A></Li>
    </Ul>
  </DropDown>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <DropDown className="dropdown" {...props}>
      <Ul>
        <Li><A dropdown-item href="#">Item 1</A></Li>
        <Li separator />
        <Li><A dropdown-item disabled href="#">Item disabled</A></Li>
        <Li><A dropdown-item href="#">Item last</A></Li>
      </Ul>
    </DropDown>
  </ThemeProvider>
);

describe('<DropDown />', () => {
  it('should render an <DropDown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(2);
  });
  it('should toggle the state on click <DropDown>', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
    });
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render an <DropDown> tag without a theme', () => {
    const renderedComponent = renderComponent({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
    });
    expect(renderedComponent.find('OnClickOutside(DropDown)').length).toBe(1);
  });
  it('should render a <DropDown> with a <A> button', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: A,
        text: 'Dropdown',
        href: 'http://toto',
        className: 'btn btn-secondary',
      },
    });
    renderedComponent.find('a[href="http://toto"]').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render a <DropDown> with a dropdown-split', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
      'dropdown-split': true,
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render a <DropDown> with a menu left', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
      menu: {
        left: true,
      },
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render a <DropDown> with a menu right', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: Button,
        text: 'Dropdown',
        className: 'btn btn-secondary',
      },
      menu: {
        right: true,
      },
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
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
