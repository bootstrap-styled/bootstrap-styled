import Progress, { ProgressBar } from '../index';

describe('export Progress', function () {
  it('should export <Progress />', function () {
    expect(Progress).toBeDefined();
  });
  it('should export <ProgressBar />', function () {
    expect(ProgressBar).toBeDefined();
  });
});