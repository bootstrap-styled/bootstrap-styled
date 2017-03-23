import { makeGutters, makeCol, makeColModifier } from './grid';
import { mediaBreakpointUp, breakpointInfix } from './breakpoints';

export const defaultProps = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px',
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true,
};

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

function getGridColumn(columns = defaultProps['$grid-columns'], gridGutterWidths = defaultProps['$grid-gutter-widths'], breakpoints = defaultProps['$grid-breakpoints']) {
  return `
    position: relative;
    width: 100%;
    min-height: 1px; /* Prevent columns from collapsing when empty */
    ${makeGutters(gridGutterWidths, breakpoints)}
  `;
}

function getColumnGridColumn(gridColumns = defaultProps['$grid-columns'], gridBreakpoints = defaultProps['$grid-breakpoints'], gridGutterWidths = defaultProps['$grid-gutter-widths'], breakpoint) {
  const columnList = [];
  const infix = breakpointInfix(breakpoint, gridBreakpoints);
  for (let i = 1; i <= gridColumns; i += 1) {
    const column = `
      &.col${infix}-${i},
       & .col${infix}-${i}{
        ${getGridColumn(gridColumns, gridGutterWidths, gridBreakpoints)}
      }
    `;
    columnList.push(column);
  }
  return `
    /* Allow columns to stretch full width below their breakpoints */
    &.col${infix},
     & .col${infix}{
      ${getGridColumn(gridColumns, gridGutterWidths, gridBreakpoints)}
    }

    ${columnList.join('\n')}
  `;
}

function getMediaBreakpointUp(gridColumns = defaultProps['$grid-columns'], gridBreakpoints = defaultProps['$grid-breakpoints'], breakpoint) {
  const infix = breakpointInfix(breakpoint, gridBreakpoints);
  const basic = `
    &.col${infix},
     & .col${infix}{
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &.col${infix}-auto,
     & .col${infix}-auto{
      flex: 0 0 auto;
      width: auto;
    }
  `;

  const columnList = [];
  for (let i = 1; i <= gridColumns; i += 1) {
    const column = `
      &.col${infix}-${i},
       & .col${infix}-${i}{
        ${makeCol(i, gridColumns)}
      }
    `;
    columnList.push(column);
  }
  const modifierList = ['pull', 'push'];
  const columnModifierList = [];
  modifierList.forEach((modifier) => {
    for (let i = 0; i <= gridColumns; i += 1) {
      const columnModifier = `
        &.${modifier}${infix}-${i},
         & .${modifier}${infix}-${i}{
          ${makeColModifier(modifier, i, gridColumns)}
        }
      `;
      columnModifierList.push(columnModifier);
    }
  });
  // `$columns - 1` because offsetting by the width of an entire row isn't possible
  const offsetColumnList = [];
  for (let i = 0; i <= (gridColumns - 1); i += 1) {
    if (infix !== 1 || i !== 0) { // Avoid emitting useless .offset-xs-0
      const offsetColumn = `
        &.offset${infix}-${i},
         & .offset${infix}-${i}{
          ${makeColModifier('offset', i, gridColumns)}
        }
      `;
      offsetColumnList.push(offsetColumn);
    }
  }
  return mediaBreakpointUp(breakpoint, gridBreakpoints, `
    ${basic}
    ${columnList.join('\n')}
    ${columnModifierList.join('\n')}
    ${offsetColumnList.join('\n')}
  `);
}

export function makeGridColumns(enableGridClasses = defaultProps['$enable-grid-classes'], gridColumns = defaultProps['$grid-columns'], gridGutterWidths = defaultProps['$grid-gutter-widths'], gridBreakpoints = defaultProps['$grid-breakpoints']) {
  if (enableGridClasses) {
    const gridColumnList = [];
    Object.keys(gridBreakpoints).forEach((breakpoint) => {
      const gridColumn = `
        ${getColumnGridColumn(gridColumns, gridBreakpoints, gridGutterWidths, breakpoint)}
        ${getMediaBreakpointUp(gridColumns, gridBreakpoints, breakpoint)}
      `;
      gridColumnList.push(gridColumn);
    });
    return `
      ${gridColumnList.join('\n')}
    `;
  }
  return '';
}

export default {
  defaultProps,
  getGridColumn,
  getColumnGridColumn,
  getMediaBreakpointUp,
  makeGridColumns,
};
