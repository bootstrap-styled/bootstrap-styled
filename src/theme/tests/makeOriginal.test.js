import { fromJS } from 'immutable/';
import makeOriginal from '../makeOriginal';

describe('makeOriginal', () => {
  const FINAL_CHECKSUM_THEME_ORIGINAL = -255832033; // DO NOT change this value UNLESS you have added a new variable COMING, i did say COMING from bootstrap
  it('should have makeOriginal defined', () => {
    expect(makeOriginal).toBeDefined();
  });
  it('should have makeOriginal unmodified', () => {
    expect(fromJS(makeOriginal()).hashCode()).toEqual(FINAL_CHECKSUM_THEME_ORIGINAL);
  });
});
