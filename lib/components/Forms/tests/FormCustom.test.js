'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _FormCustom = require('../FormCustom');

var _FormCustom2 = _interopRequireDefault(_FormCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_FormCustom2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_FormCustom2.default, props)));
};

describe('<FormCustom />', function () {
  it('should render an <FormCustom> tag without a theme', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('span').length).toBe(2);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormCustom> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormCustom').length).toBe(1);
  });
  it('should have a classname custom-checkbox', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Label').hasClass('custom-checkbox'));
  });
  it('should have a classname custom-radio', function () {
    var renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test'
      }
    });
    expect(renderedComponent.find('Label').hasClass('custom-radio'));
  });
  it('should have an id and a name on Input if radio is passed', function () {
    var renderedComponent = renderComponentUsingTheme({
      radio: {
        id: 'id-test',
        name: 'name-test'
      }
    });
    expect(renderedComponent.find('Input').props().id).toEqual('id-test');
    expect(renderedComponent.find('Input').props().name).toEqual('name-test');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});