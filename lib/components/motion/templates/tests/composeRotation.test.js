'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our composeRotation HOC
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _composeRotation = require('../composeRotation');

var _composeRotation2 = _interopRequireDefault(_composeRotation);

var _composeAnimation = require('../composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('composeRotation', function () {
  var makeEffect = function makeEffect() {
    // eslint-disable-line arrow-body-style
    return {
      from: {
        width: '0'
      },
      to: {
        width: '100%'
      }
    };
  };
  var RotationAnimation = void 0;
  beforeAll(function () {
    RotationAnimation = (0, _composeRotation2.default)((0, _composeAnimation2.default)(makeEffect), '$key');
  });

  var _ref = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(RotationAnimation, {
    rotation: '10deg'
  }, void 0, 'Test'));

  it('should render an <RotationAnimation /> with user distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref);
    expect(renderedComponent.length).toBe(1);
  });

  var _ref2 = _jsx(RotationAnimation, {}, void 0, 'Test');

  it('should render an <RotationAnimation /> with theme distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {
      theme: { $key: 'toto' }
    }, void 0, _ref2));
    expect(renderedComponent.length).toBe(1);
  });
});