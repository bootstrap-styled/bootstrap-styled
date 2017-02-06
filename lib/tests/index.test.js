
import { A, Button, alertMixins, aUtils } from '../index';

describe('api exports', function () {
  it('should have <A /> available', function () {
    expect(A).toBeDefined();
  });
  it('should have <Button /> available', function () {
    expect(Button).toBeDefined();
  });
  it('should have alert mixins available', function () {
    expect(alertMixins).toBeDefined();
  });
  it('should have a utilities available', function () {
    expect(aUtils).toBeDefined();
  });
});