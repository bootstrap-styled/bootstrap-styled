'use strict';

var _conditional = require('../conditional');

describe('kopax conditional mixins', function () {
  it('ifElse should return the true value', function () {
    expect((0, _conditional.ifElse)(true, 'I am an hero', 'I am a zero')).toEqual('I am an hero');
  });
  it('ifElse should return the false value', function () {
    expect((0, _conditional.ifElse)(false, 'I am an hero', 'I am a zero')).toEqual('I am a zero');
  });
  it('ifThen should return the true value', function () {
    expect((0, _conditional.ifThen)(true, 'I am an hero')).toEqual('I am an hero');
  });
  it('ifThen should return the false value', function () {
    expect((0, _conditional.ifThen)(false, 'I am an hero')).toEqual('');
  });
});