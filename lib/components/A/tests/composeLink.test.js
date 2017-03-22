'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our composeList HoC component constructor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = (0, _index.composeLink)(_index2.default);

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: props.theme
  }, void 0, _react2.default.createElement(
    Link,
    props,
    'test'
  )));
};

describe('composeLink', function () {
  it('should render a Link', function () {
    var renderedComponent = renderComponentUsingTheme({
      theme: {
        '$enable-dynamic-links': true
      },
      href: 'http://test.com',
      to: 'http://test.com'
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
  it('should render a Link using <A>', function () {
    var renderedComponent = renderComponentUsingTheme({
      theme: {
        '$enable-dynamic-links': false
      },
      href: 'http://test.com',
      to: 'http://test.com'
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
});