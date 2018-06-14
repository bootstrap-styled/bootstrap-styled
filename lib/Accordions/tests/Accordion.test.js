'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Accordion = require('../Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionGroup = require('../AccordionGroup');

var _AccordionGroup2 = _interopRequireDefault(_AccordionGroup);

var _Card = require('../../Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Abbr component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _AccordionGroup2.default,
    propsAccordionGroup,
    _react2.default.createElement(_Accordion2.default, props)
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsAccordionGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _AccordionGroup2.default,
      propsAccordionGroup,
      _react2.default.createElement(_Accordion2.default, props),
      _react2.default.createElement(
        _Accordion2.default,
        { name: 'Accordion2', tag: _Card2.default },
        children
      )
    )
  ));
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