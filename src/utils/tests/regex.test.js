import { linearGradientRe } from '../regex';

describe('utils/regex.js', () => {
  it('should get linear gradient valuees', () => {
    expect('linear-gradient(#ccc)'.match(linearGradientRe)[0]).toEqual('#ccc');
    expect('linear-gradient(#ccc, #fff)'.match(linearGradientRe)[1]).toEqual('#fff');
    expect('linear-gradient(#ccc, #fff, rgb(254, 211, 200))'.match(linearGradientRe)[2]).toEqual('rgb(254, 211, 200)');
  });
});
