'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our InputGroupButton component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputGroupButton = require('../InputGroupButton');

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_InputGroupButton2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_InputGroupButton2.default, props)));
};

var _ref = _jsx(_InputGroupButton2.default, {}, void 0, 'Yo!');

var _ref2 = _jsx(_InputGroupButton2.default, {}, void 0, 'Yo!');

var _ref3 = _jsx(_InputGroupButton2.default, {
  color: 'rad'
}, void 0, 'Yo!');

var _ref4 = _jsx(_InputGroupButton2.default, {
  className: 'yo'
}, void 0, 'Yo!');

var _ref5 = _jsx(_InputGroupButton2.default, {
  groupClassName: 'other'
}, void 0, 'Yo!');

describe('<InputGroupButton />', function () {
  it('should render an <InputGroupButton> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have class input-group-btn', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('div').at(1).hasClass('input-group-btn')).toBe(true);
  });
  describe('Shorthand usage', function () {
    it('should render a child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_ref);
      expect(wrapper.childAt(0).type()).toBe(_Button2.default);
    });

    it('should render the string provided in the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_ref2);

      expect(wrapper.childAt(0).prop('children')).toBe('Yo!');
    });

    it('should render additional props on the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_ref3);

      expect(wrapper.childAt(0).prop('color')).toBe('rad');
    });

    it('should render additional classes on the child Button', function () {
      var wrapper = (0, _enzyme.shallow)(_ref4);

      expect(wrapper.childAt(0).hasClass('yo')).toBe(true);
    });

    it('should render groupClassName as additional classes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.shallow)(_ref5);

      expect(wrapper.hasClass('other')).toBe(true);
      expect(wrapper.hasClass('input-group-btn')).toBe(true);
    });

    it('should render groupAttributes as additional attributes on the input-group-btn wrapper', function () {
      var wrapper = (0, _enzyme.shallow)(_jsx(_InputGroupButton2.default, {
        groupAttributes: { style: { textAlign: 'left' } }
      }, void 0, 'Yo!'));

      expect(wrapper.prop('style').textAlign).toBe('left');
    });
  });
});