import { fromJS } from 'immutable';

import { defaultProps, borderRadius, borderTopRadius, borderRightRadius, borderBottomRadius, borderLeftRadius } from '../border-radius';

describe('bootstrap border-radius mixins', function () {
  it('borderRadius should return a css', function () {
    var css = borderRadius(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderRadius should have arguments', function () {
    var css = borderRadius();
    expect(fromJS({ css: css }).hashCode()).toEqual(412224342);
  });
  it('borderTopRadius should return a css', function () {
    var css = borderTopRadius(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-top-right-radius: .25rem;\n      border-top-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderTopRadius should return a css by default', function () {
    var css = borderTopRadius();
    expect(fromJS({ css: css }).hashCode()).toEqual(-805177024);
  });
  it('borderRightRadius should return a css', function () {
    var css = borderRightRadius(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-right-radius: .25rem;\n      border-top-right-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderRightRadius should return a css by default', function () {
    var css = borderRightRadius();
    expect(fromJS({ css: css }).hashCode()).toEqual(-48434351);
  });
  it('borderBottomRadius should return a css', function () {
    var css = borderBottomRadius(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-right-radius: .25rem;\n      border-bottom-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderBottomRadius should return a css by default', function () {
    var css = borderBottomRadius();
    expect(fromJS({ css: css }).hashCode()).toEqual(688610612);
  });
  it('borderLeftRadius should return a css', function () {
    var css = borderLeftRadius(defaultProps['$enable-rounded'], defaultProps['$border-radius']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    if (defaultProps['$enable-rounded']) {
      expect(css).toEqual('\n      border-bottom-left-radius: .25rem;\n      border-top-left-radius: .25rem;\n    ');
    } else {
      expect(css).toEqual('');
    }
  });
  it('borderLeftRadius should return a css by default', function () {
    var css = borderLeftRadius();
    expect(fromJS({ css: css }).hashCode()).toEqual(-1049744082);
  });
});