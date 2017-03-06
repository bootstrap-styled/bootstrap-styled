'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_index2.default, {
    theme: props.theme
  }, void 0, props.children));
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