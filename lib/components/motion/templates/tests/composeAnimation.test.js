'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our composeAnimation HOC
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _composeAnimation = require('../composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('composeAnimation', function () {
  var makeEffect = void 0;
  var AbstractAnimation = void 0;
  var renderedComponent = void 0;

  var _ref = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337'
  }, void 0, 'Test'));

  beforeAll(function () {
    makeEffect = function makeEffect() {
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
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref);
  });

  it('should render an <AbstractAnimation /> component', function () {
    expect(renderedComponent.length).toBe(1);
  });

  var _ref2 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {}, void 0, 'Test'));

  it('should set state with the correct animationName using default value', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref2);
    // expect(renderedComponent.state().styles.animation).toEqual('laoCwl 1s ease 0s 1 normal none running');
  });

  var _ref3 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set state with the correct animationName using props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref3);
    expect(renderedComponent.find('span[style]').length).toEqual(1);
  });

  var _ref4 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set backfaceVisibility props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref4);
    expect(renderedComponent.props().children.props.backfaceVisibility).toEqual('hidden');
  });

  var _ref5 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set direction props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref5);
    expect(renderedComponent.props().children.props.direction).toEqual('reverse');
  });

  var _ref6 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set iterations props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref6);
    expect(renderedComponent.props().children.props.iterations).toEqual('1');
  });

  var _ref7 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set delay props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref7);
    expect(renderedComponent.props().children.props.delay).toEqual('1s');
  });

  var _ref8 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set fillMode props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref8);
    expect(renderedComponent.props().children.props.fillMode).toEqual('forwards');
  });

  var _ref9 = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(AbstractAnimation, {
    distance: '1337',
    duration: '2s',
    timingFunction: 'linear',
    delay: '1s',
    direction: 'reverse',
    iterations: '1',
    backfaceVisibility: 'hidden',
    fillMode: 'forwards',
    playState: 'running'
  }, void 0, 'Test'));

  it('should set playState props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_ref9);
    expect(renderedComponent.props().children.props.playState).toEqual('running');
  });
});