
import { A, Button, BootstrapProvider, breakpointsMixins, visibilityUtils } from '../index';

describe('api exports', function () {
  it('should have <A /> available', function () {
    expect(A).toBeDefined();
  });
  it('should have <Button /> available', function () {
    expect(Button).toBeDefined();
  });
  it('should have <BootstrapProvider /> available', function () {
    expect(BootstrapProvider).toBeDefined();
  });
  it('should have breakpoint mixins available', function () {
    expect(breakpointsMixins).toBeDefined();
  });
  it('should have visibility utilities available', function () {
    expect(visibilityUtils).toBeDefined();
  });
});