import { unitUtils } from 'math-utils';

export const defaultProps = {
  '$spacer-y': '1rem',
};

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists
export function navDivider(spacerY = defaultProps['$spacer-y'], dividerColor = '#e5e5e5') {
  const marginY = `${unitUtils.rmUnit(spacerY, unitUtils.UNIT.REM) / 2}${unitUtils.UNIT.REM}`;
  return `
    height: 1px;
    margin: calc(${marginY} / 2) 0;
    overflow: hidden;
    background-color: ${dividerColor};
  `;
}

export default {
  defaultProps,
  navDivider,
};
