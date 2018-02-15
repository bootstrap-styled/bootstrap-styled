'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _index2.default,
    { theme: props.theme },
    props.children
  ));
};

describe('<BootstrapProvider />', function () {
  describe('<ThemeProvider />', function () {
    it('should render a <ThemeProvider />', function () {
      var renderedComponent = renderComponent({
        theme: _theme2.default,
        children: children
      });
      expect(renderedComponent.find('ThemeProvider').length).toBe(1);
    });
    it('should pass a theme with red to <ThemeProvider />', function () {
      var renderedComponent = renderComponent({
        theme: _theme2.default,
        children: children
      });
      expect(renderedComponent.props().theme['$enable-transitions']).toEqual(true);
    });
    it('should not apply windows phone 8 fix', function () {
      var renderedComponent = renderComponent({
        theme: _theme2.default,
        children: children
      });
      expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(null);
    });
    it('should apply windows phone 8 fix', function () {
      /* eslint-disable no-restricted-properties, no-underscore-dangle */
      navigator.__defineGetter__('userAgent', function () {
        return 'IEMobile/10.0';
      }); // customized user agent
      /* eslint-enable no-restricted-properties, no-underscore-dangle */
      var renderedComponent = renderComponent({
        theme: _theme2.default,
        children: children
      });
      expect(renderedComponent.state('isWindowPhone8Fixed')).toBe(true);
    });

    it('should contain the default color of $brand-primary', function () {
      var renderedComponent = renderComponent({
        children: children
      });
      expect(renderedComponent.find('ThemeProvider').props().theme['$brand-primary']).toBe(_theme2.default['$brand-primary']);
    });

    it('should contain the overriden color of $brand-primary', function () {
      var renderedComponent = renderComponent({
        children: children,
        theme: {
          '$brand-primary': 'red'
        }
      });
      expect(renderedComponent.find('ThemeProvider').props().theme['$brand-primary']).toBe('red');
    });
  });

  describe('<BootstrapProvider /> utils', function () {
    it('should apply all utilities', function () {
      var renderedComponent = renderComponent({
        theme: _theme2.default,
        children: children,
        utils: {
          align: true,
          background: true,
          a: true,
          border: true,
          clearfix: true,
          display: true,
          flex: true,
          float: true,
          screenreaders: true,
          spacing: true,
          text: true,
          visibility: true
        }
      });
      expect(renderedComponent.length).toBe(1);
    });
  });
});