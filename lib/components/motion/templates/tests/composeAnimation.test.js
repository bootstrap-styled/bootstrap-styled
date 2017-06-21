'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _composeAnimation = require('../composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our composeAnimation HOC
 */
describe('composeAnimation', function () {
  var makeEffect = void 0;
  var AbstractAnimation = void 0;
  var renderedComponent = void 0;

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
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        { distance: '1337' },
        'Test'
      )
    ));
  });

  it('should render an <AbstractAnimation /> component', function () {
    expect(renderedComponent.length).toBe(1);
  });

  it('should set state with the correct animationName using default value', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        null,
        'Test'
      )
    ));
    // expect(renderedComponent.state().styles.animation).toEqual('laoCwl 1s ease 0s 1 normal none running');
  });

  it('should set state with the correct animationName using props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.find('span[style]').length).toEqual(1);
  });
  it('should set backfaceVisibility props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.backfaceVisibility).toEqual('hidden');
  });
  it('should set direction props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.direction).toEqual('reverse');
  });
  it('should set iterations props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.iterations).toEqual('1');
  });
  it('should set delay props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.delay).toEqual('1s');
  });
  it('should set fillMode props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.fillMode).toEqual('forwards');
  });
  it('should set playState props', function () {
    AbstractAnimation = (0, _composeAnimation2.default)(makeEffect);
    renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      null,
      _react2.default.createElement(
        AbstractAnimation,
        {
          distance: '1337',
          duration: '2s',
          timingFunction: 'linear',
          delay: '1s',
          direction: 'reverse',
          iterations: '1',
          backfaceVisibility: 'hidden',
          fillMode: 'forwards',
          playState: 'running'
        },
        'Test'
      )
    ));
    expect(renderedComponent.props().children.props.playState).toEqual('running');
  });
});