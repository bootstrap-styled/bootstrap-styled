'use strict';

var _parseTransition = require('../parseTransition');

var _parseTransition2 = _interopRequireDefault(_parseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('parseTransition utils', function () {
  it('parseTransition should return an object', function () {
    var objectTest = [{
      delay: 350,
      duration: 350,
      property: 'height',
      timingFunction: 'ease'
    }];
    var transitionList = (0, _parseTransition2.default)('height .35s ease .35s');
    expect(transitionList).toEqual(objectTest);
  });
  it('parseTransition should return a array list with string', function () {
    var transitionList = (0, _parseTransition2.default)('height .35s ease');
    expect(transitionList[0].property).toEqual('height');
    expect(transitionList[0].duration).toBe(350);
    expect(transitionList[0].timingFunction).toEqual('ease');
    expect(transitionList[0].delay).toBe(0);
  });
  it('should return an array with 3 transition meta data', function () {
    var transition = 'opacity .2s linear, display 500ms cubic-bezier(0.42, 0, 0.4, 1) .5s, background .3s cubic-bezier(0.42, 0, 1.0, 1.0) 200ms';
    expect((0, _parseTransition2.default)(transition)).toEqual([{
      property: 'opacity',
      duration: 200,
      timingFunction: 'linear',
      delay: 0
    }, {
      property: 'display',
      duration: 500,
      timingFunction: 'cubic-bezier(0.42, 0, 0.4, 1)',
      delay: 500
    }, {
      property: 'background',
      duration: 300,
      timingFunction: 'cubic-bezier(0.42, 0, 1.0, 1.0)',
      delay: 200
    }]);
  });
  it('parseTransition should return an empty array', function () {
    expect((0, _parseTransition2.default)().length).toBe(0);
  });
  it('should add default value duration, timingFunction and delay', function () {
    var transition = 'opacity';
    expect((0, _parseTransition2.default)(transition)).toEqual([{
      property: 'opacity',
      duration: 0,
      timingFunction: 'ease',
      delay: 0
    }]);
  });
  it('should add default value timingFunction and delay', function () {
    var transition = 'opacity 3s';
    expect((0, _parseTransition2.default)(transition)).toEqual([{
      property: 'opacity',
      duration: 3000,
      timingFunction: 'ease',
      delay: 0
    }]);
  });
  it('should add default value delay', function () {
    var transition = 'opacity 3s cubic-bezier(1, 3, 3, 7)';
    expect((0, _parseTransition2.default)(transition)).toEqual([{
      property: 'opacity',
      duration: 3000,
      timingFunction: 'cubic-bezier(1, 3, 3, 7)',
      delay: 0
    }]);
  });
});