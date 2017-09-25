'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../../../BootstrapProvider/index');

var _index2 = _interopRequireDefault(_index);

var _composeDistance = require('../composeDistance');

var _composeDistance2 = _interopRequireDefault(_composeDistance);

var _composeAnimation = require('../composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('composeDistance', function () {
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
  var DistanceAnimation = void 0;
  beforeAll(function () {
    DistanceAnimation = (0, _composeDistance2.default)((0, _composeAnimation2.default)(makeEffect), '$key');
  });

  it('should render an <DistanceAnimation /> with user distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        DistanceAnimation,
        { distance: '10px' },
        'Test'
      )
    ));
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <DistanceAnimation /> with theme distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _index2.default,
      { theme: { $key: 'toto' } },
      _react2.default.createElement(
        DistanceAnimation,
        null,
        'Test'
      )
    ));
    expect(renderedComponent.length).toBe(1);
  });
}); /**
     * Testing our composeDistance HOC
     */