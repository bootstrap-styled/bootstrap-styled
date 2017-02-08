import color from 'color';
import { hoverFocus } from './hover';

export var defaultProps = {
  '$enable-hover-mediaQuery': false
};

export function badgeVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-mediaQuery'];
  var badgeColor = arguments[1];

  return '\n    background-color: ' + badgeColor + '\n    \n    &[href] {\n      ' + hoverFocus(enableHoverMediaQuery, 'background-color: ' + color(badgeColor).darken(0.1).toString() + ';') + '\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  badgeVariant: badgeVariant
};