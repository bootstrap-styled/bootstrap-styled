'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Close component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_jsx(_index2.default, {
    onDismiss: function onDismiss(e) {
      return e.preventDefault();
    },
    'sr-only': props['sr-only'],
    className: props.className,
    closeLabel: props.closeLabel
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {
    onDismiss: function onDismiss(e) {
      return e.preventDefault();
    },
    'sr-only': props['sr-only'],
    className: props.className,
    closeLabel: props.closeLabel
  })));
};

describe('<Close />', function () {
  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponent({
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });

  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
});