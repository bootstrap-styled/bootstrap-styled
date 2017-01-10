import { ifElse, ifThen } from '../conditional';

describe('kopax conditional mixins', () => {
  it('ifElse should return the true value', () => {
    expect(ifElse(true, 'I am an hero', 'I am a zero')).toEqual('I am an hero');
  });
  it('ifElse should return the false value', () => {
    expect(ifElse(false, 'I am an hero', 'I am a zero')).toEqual('I am a zero');
  });
  it('ifThen should return the true value', () => {
    expect(ifThen(true, 'I am an hero')).toEqual('I am an hero');
  });
  it('ifThen should return the false value', () => {
    expect(ifThen(false, 'I am an hero')).toEqual('');
  });
});
