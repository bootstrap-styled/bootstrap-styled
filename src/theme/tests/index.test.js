import { fromJS } from 'immutable/';
import { makeOriginal } from '../index';

describe('makeTheme exports', () => {
  it('should have makeTheme defined', () => {
    expect(makeOriginal).toBeDefined();
  });
  it('should have keys starting with $ or _ only', () => {
    Object.keys(makeOriginal()).forEach((key) => expect(['$', '_'].indexOf(key[0]) !== -1).toBe(true));
  });
  const FINAL_CHECKSUM_THEME_ORIGINAL = -255832033; // DO NOT change this value UNLESS you have added a new variable COMING, i did say COMING from bootstrap
  it('should have makeOriginal defined', () => {
    expect(makeOriginal).toBeDefined();
  });
  it('should have makeOriginal unmodified', () => {
    expect(fromJS(makeOriginal()).hashCode()).toEqual(FINAL_CHECKSUM_THEME_ORIGINAL);
  });
});
