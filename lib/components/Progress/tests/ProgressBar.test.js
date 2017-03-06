'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our ProgressBar component
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
  return (0, _enzyme.mount)(_jsx(_index2.default, {}, void 0, _jsx(_index.ProgressBar, {
    valueMin: props.valueMin,
    valueNow: props.valueNow,
    valueMax: props.valueMax
  }, void 0, props.children)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {}, void 0, _jsx(_index.ProgressBar, {
    valueMin: props.valueMin,
    valueNow: props.valueNow,
    valueMax: props.valueMax,
    striped: props.striped,
    animated: props.animated
  }, void 0, props.children))));
};

var _ref = _jsx('span', {}, void 0, 'hello');

describe('<ProgressBar />', function () {
  it('should render an <ProgressBar> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have an attribute value without a theme', function () {
    var renderedComponent = renderComponent({
      valueNow: 42
    });
    expect(renderedComponent.find('ProgressBar').props().valueNow).toEqual(42);
  });
  it('should have an attribute max without a theme', function () {
    var renderedComponent = renderComponent({
      valueMax: 420
    });
    expect(renderedComponent.find('ProgressBar').props().valueMax).toEqual(420);
  });
  it('should render a <Progress> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('ProgressBar').length).toBe(1);
  });
  it('should have class .progress-bar by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('.progress-bar').length).toEqual(1);
  });
  it('should render a <Progress> tag with children and a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: _ref
    });
    expect(renderedComponent.find('ProgressBar').children().length).toBe(1);
  });
});