import { ifElse, ifThen } from '../conditional';

describe('kopax conditional mixins', function () {
  it('ifElse should return the true value', function () {
    expect(ifElse(true, 'I am an hero', 'I am a zero')).toEqual('I am an hero');
  });
  it('ifElse should return the false value', function () {
    expect(ifElse(false, 'I am an hero', 'I am a zero')).toEqual('I am a zero');
  });
  it('ifThen should return the true value', function () {
    expect(ifThen(true, 'I am an hero')).toEqual('I am an hero');
  });
  it('ifThen should return the false value', function () {
    expect(ifThen(false, 'I am an hero')).toEqual('');
  });
});