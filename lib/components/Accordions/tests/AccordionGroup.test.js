'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Abbr component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _AccordionGroup = require('../AccordionGroup');

var _AccordionGroup2 = _interopRequireDefault(_AccordionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _AccordionGroup2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _AccordionGroup2.default,
    props,
    props.children
  )));
};

var _ref = _jsx('h1', {}, void 0, 'hello');

var _ref2 = _jsx('h1', {}, void 0, 'hello');

describe('<AccordionGroup />', function () {
  var renderedComponent = void 0;
  var renderedComponentTheme = void 0;

  beforeEach(function () {
    renderedComponent = renderComponent({
      children: children
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
    renderedComponentTheme = renderComponentUsingTheme({
      children: children
    });
    renderedComponent.setState({ activeName: 'Accordion2' });
  });

  it('should render an <AccordionGroup> tag without a theme', function () {
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have an attribute activeAccordionName with a theme', function () {
    renderedComponent = renderComponentUsingTheme({
      children: children,
      accordionGroup: {
        activeAccordionName: 'name-test'
      }
    });
    expect(renderedComponent.find(_AccordionGroup2.default).props().accordionGroup.activeAccordionName).toEqual('name-test');
  });
  it('should have an attribute heading-component with a theme', function () {
    renderedComponent = renderComponentUsingTheme({
      children: children,
      accordionGroup: {
        activeAccordionName: 'name-test',
        'heading-component': _ref
      }
    });
    expect(renderedComponent.find(_AccordionGroup2.default).props().accordionGroup['heading-component']).toEqual(_ref2);
  });
  it('should have children without a theme', function () {
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <AccordionGroup> tag with a theme', function () {
    expect(renderedComponentTheme.find('AccordionGroup').length).toBe(1);
  });
  it('should have children with a theme', function () {
    expect(renderedComponentTheme.contains(children)).toEqual(true);
  });
});