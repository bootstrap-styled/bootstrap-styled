import color from 'color';
import { hoverFocus } from './hover';

export var defaultProps = {
  '$enable-hover-media-query': false
};

export function tagVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var backgroundColor = arguments[1];

  return '\n    background-color: ' + backgroundColor + ';\n    \n    &[href] {\n      ' + hoverFocus(enableHoverMediaQuery, '\n          background-color: ' + color(backgroundColor).darken(0.1).toString() + ';\n        ') + ' \n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  tagVariant: tagVariant
};