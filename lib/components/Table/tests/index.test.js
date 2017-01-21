var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Table component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import Table from '../index';
import theme from '../../../config';

var children = _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {}, void 0, 'Th1'), _jsx('th', {}, void 0, 'Th2'), _jsx('th', {}, void 0, 'Th3')));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Table, {
    striped: props.striped,
    bordered: props.bordered,
    hover: props.hover,
    condensed: props.condensed,
    responsive: props.responsive,
    className: props.className
  }, void 0, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Table, {
    striped: props.striped,
    bordered: props.bordered,
    hover: props.hover,
    condensed: props.condensed,
    responsive: props.responsive,
    className: props.className
  }, void 0, children)));
};

describe('<Table />', function () {
  it('should render an <Table> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Table> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Table').length).toBe(1);
    expect(renderedComponent.find('table').length).toBe(1);
  });
  it('should have a class .table by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('table').hasClass('table')).toBe(true);
  });
  it('should have a class .table-striped by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      striped: true
    });
    expect(renderedComponent.find('table').hasClass('table-striped')).toBe(true);
  });
  it('should have a class .table-bordered by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      bordered: true
    });
    expect(renderedComponent.find('table').hasClass('table-bordered')).toBe(true);
  });
  it('should have a class .table-hover by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      hover: true
    });
    expect(renderedComponent.find('table').hasClass('table-hover')).toBe(true);
  });
  it('should have a class .table-condensed by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      condensed: true
    });
    expect(renderedComponent.find('table').hasClass('table-condensed')).toBe(true);
  });
  it('should have a class .table-responsive by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      responsive: true
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('div').hasClass('table')).toBe(false);
    expect(renderedComponent.find('div').hasClass('responsive')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});