'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Abbr component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Accordion = require('../Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionGroup = require('../AccordionGroup');

var _AccordionGroup2 = _interopRequireDefault(_AccordionGroup);

var _Card = require('../../Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _AccordionGroup2.default,
    propsAccordionGroup,
    _react2.default.createElement(_Accordion2.default, props)
  ));
};

var _ref = _jsx(_Accordion2.default, {
  name: 'Accordion2',
  tag: _Card2.default
}, void 0, children);

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _AccordionGroup2.default,
    propsAccordionGroup,
    _react2.default.createElement(_Accordion2.default, props),
    _ref
  )));
};

describe('<Accordion />', function () {
  var renderedComponent = void 0;
  var renderedComponentTheme = void 0;
  var onChange = void 0;

  beforeEach(function () {
    onChange = jest.fn();

    renderedComponent = renderComponent({
      name: 'Accordion1',
      children: children,
      tag: _Card2.default
    }, {
      activeAccordionName: 'Accordion2',
      onChange: onChange
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
    renderedComponentTheme = renderComponentUsingTheme({
      children: children,
      tag: _Card2.default
    }, {
      activeAccordionName: 'Accordion2',
      onChange: onChange
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
  });

  it('should render an <Accordion> tag without a theme', function () {
    expect(renderedComponent.find('Accordion').length).toBe(1);
  });
  it('should have an attribute heading without a theme', function () {
    renderedComponent = renderComponent({
      heading: 'heading-test',
      tag: _Card2.default,
      children: children
    });
    expect(renderedComponent.find(_Accordion2.default).props().heading).toEqual('heading-test');
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have 1 or more <Accordion>', function () {
    expect(renderedComponentTheme.find('Accordion').length > 0).toBe(true);
  });
  it('should have children with a theme', function () {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
  it('should handle onClick on header', function () {
    renderedComponent.simulate('change', 'Accordion2');
    expect(onChange).toHaveBeenCalledWith('Accordion2');
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});