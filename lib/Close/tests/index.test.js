'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Close component
 */

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, props)
  ));
};

describe('<Close />', function () {
  var onDismiss = void 0;

  beforeEach(function () {
    onDismiss = jest.fn();
  });

  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponent({
      onDismiss: onDismiss,
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });

  it('should render an <Close> tag without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('Close').length).toBe(1);
    expect(renderedComponent.find('button').length).toBe(1);
  });
  it('should have a className .close by default and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss
    });
    expect(renderedComponent.find('button').hasClass('close')).toBe(true);
  });
  it('should have an attribute sr-only and without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      onDismiss: onDismiss,
      'sr-only': true,
      closeLabel: 'Close'
    });
    expect(renderedComponent.find('button').hasClass('sr-only')).toBe(true);
    expect(renderedComponent.find('Close').props().closeLabel).toEqual('Close');
  });
});