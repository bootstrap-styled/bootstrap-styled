var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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

var dropdown = _jsx(Ul, {
  'dropdown-menu': true
}, void 0, _jsx(Li, {}, void 0, _jsx(A, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item 1')), _jsx(Li, {}, void 0, _jsx(A, {
  'dropdown-item': true,
  active: true,
  href: '#'
}, void 0, 'Item active')), _jsx(Li, {
  separator: true
}), _jsx(Li, {}, void 0, _jsx(A, {
  'dropdown-item': true,
  disabled: true,
  href: '#'
}, void 0, 'Item disabled')), _jsx(Li, {}, void 0, _jsx(A, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item last')));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(DropDown, {
    button: props.button,
    buttonProps: props.buttonProps,
    dropdown: dropdown
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(DropDown, {
    button: props.button,
    buttonProps: props.buttonProps,
    dropdown: dropdown
  })));
};

describe('<DropDown />', function () {
  it('should render an <DropDown> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      button: Button,
      buttonProps: {
        type: 'button',
        value: 'Dropdown'
      }
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(2);
  });
  it('should toggle the state on click <DropDown>', function () {
    var renderedComponent = renderComponentUsingTheme({
      button: Button,
      buttonProps: {
        type: 'button',
        value: 'Dropdown'
      }
    });
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render an <DropDown> tag without a theme', function () {
    var renderedComponent = renderComponent({
      button: Button,
      buttonProps: {
        type: 'button',
        value: 'Dropdown'
      }
    });
    expect(renderedComponent.find('OnClickOutside(DropDown)').length).toBe(1);
  });
  it.only('should render a <DropDown> with a <A> button', function () {
    var renderedComponent = renderComponentUsingTheme({
      button: A,
      buttonProps: {
        href: 'http://toto',
        value: 'Dropdown'
      }
    });
    renderedComponent.find('a[href="http://toto"]').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render a <DropDown> with a dropdown-split', function () {
    var renderedComponent = renderComponentUsingTheme({
      button: A,
      buttonProps: {
        href: 'http://toto',
        value: 'Dropdown'
      },
      'dropdown-split': true
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