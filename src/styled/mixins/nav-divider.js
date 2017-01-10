import { rmUnit, UNIT } from '../mixins/unit';

export const defaultProps = {
  '$spacer-y': '1rem',
};

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists
export function navDivider(spacerY = defaultProps['$spacer-y'], dividerColor = '#e5e5e5') {
  const marginY = `${rmUnit(spacerY, UNIT.REM) / 2}${UNIT.REM}`;
  return `
    height: 1px;
    margin: ${marginY} 0;
    overflow: hidden;
    background-color: ${dividerColor};
  `;
}

export default {
  defaultProps,
  navDivider,
};
