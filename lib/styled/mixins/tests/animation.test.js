import { fadeWithClass, fade, collapse, collapseWithClass, collapseTr, collapseTrWithClass, collapseTbodyWithClass, collapseTbody, collapsingWithClass, collapsing } from '../animation';

describe('bootstrap animation mixins', function () {
  it('fade should return a css', function () {
    var css = fade();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    opacity: 0;\n    transition: opacity .15s linear;\n\n    &.in {\n      opacity: 1;\n    }\n  ');
  });
  it('fadeWithClass should return a css', function () {
    var css = fadeWithClass();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &.fade {\n      \n    opacity: 0;\n    transition: opacity .15s linear;\n\n    &.in {\n      opacity: 1;\n    }\n  \n    }\n  ');
  });
  it('collapse should return a css', function () {
    var css = collapse();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    display: none;\n    \n    &.in {\n      display: block;\n    }\n  ');
  });
  it('collapseWithClass should return a css', function () {
    var css = collapseWithClass();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &.collapse {\n      \n    display: none;\n    \n    &.in {\n      display: block;\n    }\n  \n    }\n  ');
  });
  it('collapseTr should return a css', function () {
    var css = collapseTr();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    display: table-row;\n  ');
  });
  it('collapseTrWithClass should return a css', function () {
    var css = collapseTrWithClass();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    tr {\n      &.collapse.in {\n        \n    display: table-row;\n  \n      }\n    }\n  ');
  });
  it('collapseTbody should return a css', function () {
    var css = collapseTbody();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    display: table-row-group;\n  ');
  });
  it('collapseTbodyWithClass should return a css', function () {
    var css = collapseTbodyWithClass();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    tr {\n      &.collapse.in {\n        \n    display: table-row-group;\n  \n      }\n    }\n  ');
  });
  it('collapsing should return a css', function () {
    var css = collapsing();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    transition-timing-function: ease;\n    transition-duration: .35s;\n    transition-property: height;\n  ');
  });
  it('collapsingWithClass should return a css', function () {
    var css = collapsingWithClass();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &.collapsing {\n      \n    position: relative;\n    height: 0;\n    overflow: hidden;\n    transition-timing-function: ease;\n    transition-duration: .35s;\n    transition-property: height;\n  \n    }\n  ');
  });
});