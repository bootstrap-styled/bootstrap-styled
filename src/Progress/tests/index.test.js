import Progress from '../index';
import ProgressBar from '../ProgressBar';

describe('export Progress', () => {
  it('should export <Progress />', () => {
    expect(Progress).toBeDefined();
  });
  it('should export <ProgressBar />', () => {
    expect(ProgressBar).toBeDefined();
  });
});
