import {
  defaultProps,
  makeContainer,
  makeContainerMaxWidths,
  makeGutters,
  makeRow,
  makeColReady,
  makeCol,
  makeColOffset,
  makeColPush,
  makeColPull,
  makeColModifier,
} from '../grid';

describe('bootstrap grid mixins', () => {
  it('makeContainer should return an empty css', () => {
    const css = makeContainer(defaultProps['$enable-flex'], !defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeContainer should return a css with flex enable', () => {
    const css = makeContainer(!defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      margin-left: auto;\n      margin-right: auto;\n    \n      \n    \n      \n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n    ');
  });
  it('makeContainer should return a css', () => {
    const css = makeContainer(defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      margin-left: auto;\n      margin-right: auto;\n    \n      \n    &::after {\n      content: "";\n      display: table;\n      clear: both;\n    }\n  \n    \n      \n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n\n    \n        padding-right: 15px;\n        padding-left:  15px;\n      \n  \n    ');
  });
  it('makeContainerMaxWidths should return a css', () => {
    const css = makeContainerMaxWidths(defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      \n      @media (min-width: 576px) {\n        \n        width: 540px;\n        max-width: 100%;\n      \n      }\n    \n\n      @media (min-width: 768px) {\n        \n        width: 720px;\n        max-width: 100%;\n      \n      }\n    \n\n      @media (min-width: 992px) {\n        \n        width: 960px;\n        max-width: 100%;\n      \n      }\n    \n\n      @media (min-width: 1200px) {\n        \n        width: 1140px;\n        max-width: 100%;\n      \n      }\n    \n    ');
  });
  it('makeContainerMaxWidths should return an empty css', () => {
    const css = makeContainerMaxWidths(!defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeGutters should return a css', () => {
    const css = makeGutters(defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n  ');
  });
  it('makeRow should return an empty css', () => {
    const css = makeRow(defaultProps['$enable-flex'], !defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('');
  });
  it('makeRow should return a css with flex', () => {
    const css = makeRow(!defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      \n        display: flex;\n        flex-wrap: wrap;\n      \n  \n      \n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n    ');
  });
  it('makeRow should return a css without flex', () => {
    const css = makeRow(defaultProps['$enable-flex'], defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      \n    &::after {\n      content: "";\n      display: table;\n      clear: both;\n    }\n  \n  \n      \n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n\n        margin-right: -15px;\n        margin-left:  -15px;\n      \n    ');
  });
  it('makeColReady should return a css without flex', () => {
    const css = makeColReady(defaultProps['$enable-flex'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    position: relative;\n    min-height: 1px; /* Prevent collapsing */\n\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    \n\n    \n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n  ');
  });
  it('makeColReady should return a css with flex', () => {
    const css = makeColReady(!defaultProps['$enable-flex'], defaultProps['$grid-gutter-widths']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    position: relative;\n    min-height: 1px; /* Prevent collapsing */\n\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    width: 100%;\n\n    \n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n\n      @media (min-width: 30px) {\n        \n      padding-right: 15px;\n      padding-left:  15px;\n    \n      }\n    \n  ');
  });
  it('makeCol should return a css without flex', () => {
    const css = makeCol(defaultProps['$enable-flex'], 2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n      float: left;\n      width: 16.66%;\n    \n  ');
  });
  it('makeCol should return a css with flex', () => {
    const css = makeCol(!defaultProps['$enable-flex'], 2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n      flex: 0 0 16.66%;\n      /* Add a \'max-width\' to ensure content within each column does not blow out */\n      /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n      /* do not appear to require this. */\n      max-width: 16.66%;\n    \n  ');
  });
  it('makeColOffset should return a css', () => {
    const css = makeColOffset(3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    margin-left: 25%;\n  ');
  });
  it('makeColPush should return a css', () => {
    const css = makeColPush(2, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    left: 16.66%;\n  ');
  });
  it('makeColPull should return a css', () => {
    const css = makeColPull(6, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    right: 50%;\n  ');
  });
  it('makeColModifier push should return a css', () => {
    const css = makeColModifier('push', 3, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n    left: 25%;\n  \n  ');
  });
  it('makeColModifier pull should return a css', () => {
    const css = makeColModifier('pull', 4, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n    right: 33.33%;\n  \n  ');
  });
  it('makeColModifier offset should return a css', () => {
    const css = makeColModifier('offset', 5, defaultProps['$grid-columns']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    \n    margin-left: 41.66%;\n  \n  ');
  });
});
