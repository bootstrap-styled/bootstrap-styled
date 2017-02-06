
import { A, Button, alertMixins, aUtils } from '../index';

describe('api exports', () => {
  it('should have <A /> available', () => {
    expect(A).toBeDefined();
  });
  it('should have <Button /> available', () => {
    expect(Button).toBeDefined();
  });
  it('should have alert mixins available', () => {
    expect(alertMixins).toBeDefined();
  });
  it('should have a utilities available', () => {
    expect(aUtils).toBeDefined();
  });
});
