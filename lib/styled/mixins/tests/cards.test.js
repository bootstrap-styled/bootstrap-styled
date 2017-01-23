import { defaultProps, cardVariant, cardOutlineVariant, cardInverse } from '../cards';

describe('bootstrap cards mixins', function () {
  it('cardVariant should return a css', function () {
    var css = cardVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-color: #f00;\n    border-color: #0f0;\n  \n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n    }\n  ');
  });
  it('cardOutlineVariant should return a css', function () {
    var css = cardOutlineVariant('#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-color: transparent;\n    border-color: #f00;\n  ');
  });
  it('cardInverse should return a css without media query', function () {
    var css = cardInverse(defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    & .card-header,\n    & .card-footer {\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    & .card-link {\n      \n    &:focus,\n    &:hover {\n      color: #fff;\n    }\n  \n    }\n  ');
  });
  it('cardInverse should return a css with media query', function () {
    var css = cardInverse(!defaultProps['$enable-hover-media-query'], defaultProps['$card-link-hover-color']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    & .card-header,\n    & .card-footer {\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    & .card-link {\n       \n      &:focus { color: #fff; }\n      \n    &:hover { color: #fff; }\n  \n    \n    }\n  ');
  });
});