import {
  invisible,
  hiddenBpUp,
  visiblePrintBlock,
  visiblePrintInline,
  visiblePrintInlineBlock,
  hiddenPrint,
} from '../visibility';

describe('bootstrap visibility mixins', () => {
  it('invisible should return a css', () => {
    const css = invisible();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    visibility: hidden !important;\n  ');
  });
  it('hiddenBpUp should return a css', () => {
    const css = hiddenBpUp({
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    });
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      .hidden-xs-up {\n        \n    display: none !important\n  \n      }\n    \n\n      .hidden-xs-down {\n        \n      @media (max-width: 575px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-sm-up {\n        \n      @media (min-width: 576px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-sm-down {\n        \n      @media (max-width: 767px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-md-up {\n        \n      @media (min-width: 768px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-md-down {\n        \n      @media (max-width: 991px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-lg-up {\n        \n      @media (min-width: 992px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-lg-down {\n        \n      @media (max-width: 1199px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-xl-up {\n        \n      @media (min-width: 1200px) {\n        display: none !important\n      }\n    \n      }\n    \n\n      .hidden-xl-down {\n        \n    display: none !important\n  \n      }\n    ');
  });
  it('visiblePrintBlock should return a css', () => {
    const css = visiblePrintBlock();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .visible-print-block {\n      display: none !important;\n      \n      @media print {\n        display: block !important;\n      }\n    }\n  ');
  });
  it('visiblePrintInline should return a css', () => {
    const css = visiblePrintInline();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .visible-print-inline {\n      display: none !important;\n      \n      @media print {\n        display: inline !important;\n      }\n    }\n  ');
  });
  it('visiblePrintInlineBlock should return a css', () => {
    const css = visiblePrintInlineBlock();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .visible-print-inline-block {\n      display: none !important;\n      \n      @media print {\n        display: inline-block !important;\n      }\n    }\n  ');
  });
  it('hiddenPrint should return a css', () => {
    const css = hiddenPrint();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    .hidden-print {\n      @media print {\n        display: none !important;\n      }\n    }\n  ');
  });
});
