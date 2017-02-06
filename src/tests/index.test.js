
import { A, Button, BootstrapProvider, breakpointsMixins, visibilityUtils } from '../index';

describe('api exports', () => {
  it('should have <A /> available', () => {
    expect(A).toBeDefined();
  });
  it('should have <Button /> available', () => {
    expect(Button).toBeDefined();
  });
  it('should have <BootstrapProvider /> available', () => {
    expect(BootstrapProvider).toBeDefined();
  });
  it('should have breakpoint mixins available', () => {
    expect(breakpointsMixins).toBeDefined();
  });
  it('should have visibility utilities available', () => {
    expect(visibilityUtils).toBeDefined();
  });
});
