import color from 'color';
import { plainHoverFocus, hoverFocus } from './hover';

export var defaultProps = {
  '$enable-hover-media-query': false
};

export function listGroupItemVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var state = arguments[1];
  var background = arguments[2];
  var listColor = arguments[3];

  return '\n    & .list-group-item-' + state + ' {\n      color: ' + listColor + ';\n      background-color: ' + background + ';\n    }\n  \n    & a.list-group-item-' + state + ',\n    button.list-group-item-' + state + ' {\n      color: ' + listColor + ';\n  \n      .list-group-item-heading {\n        color: inherit;\n      }\n  \n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + listColor + ';\n        background-color: ' + color(background).darken(0.05).toString() + ';') + '\n  \n      &.active {\n        ' + plainHoverFocus(enableHoverMediaQuery, 'color: #fff;\n          background-color: ' + listColor + ';\n          border-color: ' + listColor + ';') + '\n      }\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  listGroupItemVariant: listGroupItemVariant
};