export var defaultProps = {
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
  '$display4-weight': '300'

};

export function typography() {
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$headings-color'];
  var $headingsUnderlingWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$headings-underline-width'];
  var $headingsUnderlingHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$headings-underline-height'];
  var $headingsUnderlingLeftPosition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$headings-underline-left-position'];
  var $headingsUnderlingGradientColor1 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$headings-underline-gradient-color-1'];
  var $headingsUnderlingGradientColor2 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$headings-underline-gradient-color-2'];
  var $display1Size = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$display1-size'];
  var $display2Size = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$display2-size'];
  var $display3Size = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$display3-size'];
  var $display4Size = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$display4-size'];
  var $display1Weight = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$display1-weight'];
  var $display2Weight = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$display2-weight'];
  var $display3Weight = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$display3-weight'];
  var $display4Weight = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$display4-weight'];

  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    &.underline{\n      display: inline-block;\n      padding-bottom: 5px;\n      position: relative;\n      &:before{\n        content: "";\n        position: absolute;\n        width: ' + $headingsUnderlingWidth + ';\n        height: ' + $headingsUnderlingHeight + ';\n        bottom: 0;\n        left: ' + $headingsUnderlingLeftPosition + ';\n        background: -webkit-gradient(radial, center center, 0, center center, 460, from(' + $headingsUnderlingGradientColor1 + 'red), to(' + $headingsUnderlingGradientColor2 + 'white));\n        background: -webkit-radial-gradient(circle, ' + $headingsUnderlingGradientColor1 + ', ' + $headingsUnderlingGradientColor2 + ');\n        background: -moz-radial-gradient(circle, ' + $headingsUnderlingGradientColor1 + ', ' + $headingsUnderlingGradientColor2 + ');\n      }\n    }\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  typography: typography
};