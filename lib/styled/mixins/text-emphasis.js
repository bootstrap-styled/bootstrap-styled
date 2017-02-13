import color from 'color';
import { hoverFocus } from './hover';

export var defaultProps = {
  '$enable-hover-media-query': false
};

// Typography
export function textEmphasisVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var parent = arguments[1];
  var textColor = arguments[2];

  return '\n    ' + parent + ' {\n      color: ' + textColor + ' !important;\n    }\n    a' + parent + ' {\n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + color(textColor).darken(0.1).toString() + ' !important;') + '\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  textEmphasisVariant: textEmphasisVariant
};