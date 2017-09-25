import Progress, { ProgressBar } from '../index';

describe('export Progress', () => {
  it('should export <Progress />', () => {
    expect(Progress).toBeDefined();
  });
  it('should export <ProgressBar />', () => {
    expect(ProgressBar).toBeDefined();
  });
});
