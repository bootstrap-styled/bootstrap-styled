import { defaultProps, paginationSize, paginationSizeBootstrap } from '../pagination';

describe('bootstrap pagination mixins', () => {
  it('paginationSize should return a css with rounded', () => {
    const css = paginationSize(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .page-link {\n      padding: .75rem 1.5rem;\n      font-size: 1.25rem;\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          \n      border-bottom-left-radius: .25rem;\n      border-top-left-radius: .25rem;\n    \n        }\n      }\n      &:last-child {\n        .page-link {\n          \n      border-bottom-right-radius: .25rem;\n      border-top-right-radius: .25rem;\n    \n        }\n      }\n    }\n  ');
  });
  it('paginationSize should return a css without rounded', () => {
    const css = paginationSize(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .page-link {\n      padding: .75rem 1.5rem;\n      font-size: 1.25rem;\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          \n        }\n      }\n      &:last-child {\n        .page-link {\n          \n        }\n      }\n    }\n  ');
  });
  it('paginationSizeBootstrap should return a css with rounded', () => {
    const css = paginationSizeBootstrap(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .page-link {\n      padding: .75rem 1.5rem;\n      font-size: 1.25rem;\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          \n      border-bottom-left-radius: .25rem;\n      border-top-left-radius: .25rem;\n    \n        }\n      }\n      &:last-child {\n        .page-link {\n          \n      border-bottom-right-radius: .25rem;\n      border-top-right-radius: .25rem;\n    \n        }\n      }\n    }\n  ');
  });
  it('paginationSizeBootstrap should return a css without rounded', () => {
    const css = paginationSizeBootstrap(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .page-link {\n      padding: .75rem 1.5rem;\n      font-size: 1.25rem;\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          \n        }\n      }\n      &:last-child {\n        .page-link {\n          \n        }\n      }\n    }\n  ');
  });
});
