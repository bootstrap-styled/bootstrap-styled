'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our CardImg component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _CardImg = require('../CardImg');

var _CardImg2 = _interopRequireDefault(_CardImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_CardImg2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_CardImg2.default, props)));
};

describe('<CardImg />', function () {
  it('should render an <CardImg> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should render an <CardImg> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('CardImg').length).toBe(1);
    expect(renderedComponent.find('img').length).toBe(1);
  });
  it('should have an attribute top without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      top: true
    });
    expect(renderedComponent.find('CardImg').props().top).toBe(true);
  });
  it('should have an attribute bottom without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      bottom: true
    });
    expect(renderedComponent.find('CardImg').props().bottom).toBe(true);
  });
  it('should have a class .card-img by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img').hasClass('card-img')).toBe(true);
  });
});