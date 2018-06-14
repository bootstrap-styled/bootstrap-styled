'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _AccordionGroup = require('../AccordionGroup');

var _AccordionGroup2 = _interopRequireDefault(_AccordionGroup);

var _Accordion = require('../Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  _Accordion2.default,
  { heading: 'Collapsible Group Item #1', name: 'Accordion1' },
  'hey!'
); /**
    * Testing our Abbr component
    */


var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_AccordionGroup2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_AccordionGroup2.default, props)
  ));
};

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