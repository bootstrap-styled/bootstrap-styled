import {
  gradientX,
  gradientY,
  gradientDirectional,
  gradientXThreeColors,
  gradientYThreeColors,
  gradientRadial,
  gradientStriped,
} from '../gradients';

describe('bootstrap gradients mixins', () => {
  it('gradientX should return a css', () => {
    const css = gradientX();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: linear-gradient(to right, #555 0%, #333 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(#555)}\', endColorstr=\'#{ie-hex-str(#333)}\', GradientType=1); // IE9\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientY should return a css', () => {
    const css = gradientY();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: linear-gradient(to bottom, #555 0%, #333 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(#555)}\', endColorstr=\'#{ie-hex-str(#333)}\', GradientType=0); // IE9\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientDirectional should return a css', () => {
    const css = gradientDirectional();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-repeat: repeat-x;\n    background-image: linear-gradient(45deg, #555, #333);\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientXThreeColors should return a css', () => {
    const css = gradientXThreeColors();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: linear-gradient(to right, #00b3ee, #7a43b6 50%, #c3325f);\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(#00b3ee)}\', endColorstr=\'#{ie-hex-str(#c3325f)}\', GradientType=1); // IE9 gets no color-stop at all for proper fallback\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientYThreeColors should return a css', () => {
    const css = gradientYThreeColors();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: linear-gradient(#00b3ee, #7a43b6 50%, #c3325f);\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(#00b3ee)}\', endColorstr=\'#{ie-hex-str(#c3325f)}\', GradientType=0); // IE9 gets no color-stop at all for proper fallback\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientRadial should return a css', () => {
    const css = gradientRadial();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: radial-gradient(circle, #555, #333);\n    background-repeat: no-repeat;\n  '); // eslint-disable-line no-useless-escape
  });
  it('gradientStriped should return a css', () => {
    const css = gradientStriped();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    background-image: linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent);\n  '); // eslint-disable-line no-useless-escape
  });
});
