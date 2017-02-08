import { rmUnit, UNIT } from '../mixins/unit';

export var defaultProps = {
  '$spacer-y': '1rem'
};

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists
export function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';

  var marginY = '' + rmUnit(spacerY, UNIT.REM) / 2 + UNIT.REM;
  return '\n    height: 1px;\n    margin: ' + marginY + ' 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}

export default {
  defaultProps: defaultProps,
  navDivider: navDivider
};