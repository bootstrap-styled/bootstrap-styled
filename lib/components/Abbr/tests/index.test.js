'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Abbr component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_index2.default, props)));
};

describe('<Abbr />', function () {
  it('should render an <Abbr> tag without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.props().title).toEqual('abbr title');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <abbr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').length).toBe(1);
    expect(renderedComponent.find('Abbr').length).toBe(1);
  });
  it('should have an attribute title with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.find('abbr').props().title).toEqual('abbr title');
  });
  it('should have an attribute initialism with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      initialism: true,
      children: children
    });
    expect(renderedComponent.find('abbr').hasClass('initialism'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      title: 'abbr title',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});