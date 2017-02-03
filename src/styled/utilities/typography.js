export const defaultProps = {
  '$headings-margin-bottom': '0.5rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '1.1',
  '$headings-color': 'inherit',
  '$headings-underline-width': '180%',
  '$headings-underline-height': '1px',
  '$headings-underline-left-position': '-40%',
  '$headings-underline-gradient-color-1': '#0275d8',
  '$headings-underline-gradient-color-2': '#fff',
  '$display1-size': '6rem',
  '$display2-size': '5.5rem',
  '$display3-size': '4.5rem',
  '$display4-size': '3.5rem',
  '$display1-weight': '300',
  '$display2-weight': '300',
  '$display3-weight': '300',
  '$display4-weight': '300',

};

export function typography(
  $headingsMarginBottom = defaultProps['$headings-margin-bottom'],
  $headingsFontFamily = defaultProps['$headings-font-family'],
  $headingsFontWeight = defaultProps['$headings-font-weight'],
  $headingsLineHeight = defaultProps['$headings-line-height'],
  $headingsColor = defaultProps['$headings-color'],
  $headingsUnderlingWidth = defaultProps['$headings-underline-width'],
  $headingsUnderlingHeight = defaultProps['$headings-underline-height'],
  $headingsUnderlingLeftPosition = defaultProps['$headings-underline-left-position'],
  $headingsUnderlingGradientColor1 = defaultProps['$headings-underline-gradient-color-1'],
  $headingsUnderlingGradientColor2 = defaultProps['$headings-underline-gradient-color-2'],
  $display1Size = defaultProps['$display1-size'],
  $display2Size = defaultProps['$display2-size'],
  $display3Size = defaultProps['$display3-size'],
  $display4Size = defaultProps['$display4-size'],
  $display1Weight = defaultProps['$display1-weight'],
  $display2Weight = defaultProps['$display2-weight'],
  $display3Weight = defaultProps['$display3-weight'],
  $display4Weight = defaultProps['$display4-weight'],

) {
  return `
    margin-bottom: ${$headingsMarginBottom};
    font-family: ${$headingsFontFamily};
    font-weight: ${$headingsFontWeight};
    line-height: ${$headingsLineHeight};
    color: ${$headingsColor};
    
    &.underline{
      display: inline-block;
      padding-bottom: 5px;
      position: relative;
      &:before{
        content: "";
        position: absolute;
        width: ${$headingsUnderlingWidth};
        height: ${$headingsUnderlingHeight};
        bottom: 0;
        left: ${$headingsUnderlingLeftPosition};
        background: -webkit-gradient(radial, center center, 0, center center, 460, from(${$headingsUnderlingGradientColor1}red), to(${$headingsUnderlingGradientColor2}white));
        background: -webkit-radial-gradient(circle, ${$headingsUnderlingGradientColor1}, ${$headingsUnderlingGradientColor2});
        background: -moz-radial-gradient(circle, ${$headingsUnderlingGradientColor1}, ${$headingsUnderlingGradientColor2});
      }
    }
    
    /* Type Scss */

    &.display-1 {
      font-size: ${$display1Size};
      font-weight: ${$display1Weight};
      line-height: ${$headingsLineHeight};

    }
    
    &.display-2 {
      font-size: ${$display2Size};
      font-weight: ${$display2Weight};
      line-height: ${$headingsLineHeight};
    }
    
    &.display-3 {
      font-size: ${$display3Size};
      font-weight: ${$display3Weight};
      line-height: ${$headingsLineHeight};
    }
    
    &.display-4 {
      font-size: ${$display4Size};
      font-weight: ${$display4Weight};
        line-height: ${$headingsLineHeight};
    }
  `;
}

export default {
  defaultProps,
  typography,
};
