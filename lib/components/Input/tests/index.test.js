'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Input component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_jsx(_index2.default, {
    type: props.type,
    placeholder: props.placeholder,
    className: props.className,
    indeterminate: props.indeterminate
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {
    type: props.type,
    placeholder: props.placeholder,
    className: props.className,
    indeterminate: props.indeterminate
  })));
};

describe('<Input />', function () {
  it('should render an <Input> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'button'
    });
    expect(renderedComponent.props().type).toEqual('button');
  });
  it('should have an attribute placeholder without a theme', function () {
    var renderedComponent = renderComponent({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.props().placeholder).toEqual('Enter your input here');
  });
  it('should render a <input> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('input').length).toBe(1);
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      type: 'button'
    });
    expect(renderedComponent.find('input').props().type).toEqual('button');
  });
  it('should have an attribute placeholder with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here'
    });
    expect(renderedComponent.find('input').props().placeholder).toEqual('Enter your input here');
  });
  it('should render an indeterminate checkbox', function () {
    var renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here',
      type: 'checkbox',
      indeterminate: true
    });
    expect(renderedComponent.find('input').hasClass('indeterminate')).toEqual(true);
  });
});