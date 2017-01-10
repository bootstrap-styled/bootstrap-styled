import { makeGutters, makeCol, makeColModifier } from './grid';
import { mediaBreakpointUp } from './breakpoints';

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
  '$enable-flex': false,
};

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

function getGridColumn(enableFlex = defaultProps['$enable-flex'], columns = defaultProps['$grid-columns'], gridGutterWidths = defaultProps['$grid-gutter-widths']) {
  let flexVal = '';
  if (enableFlex) {
    flexVal = `
      width: 100%;
    `;
  }
  return `
    position: relative;
    /* Prevent columns from collapsing when empty */
    min-height: 1px;

    ${flexVal}

    ${makeGutters(gridGutterWidths)}
  `;
}

function getColumnGridColumn(enableFlex = defaultProps['$enable-flex'], gridColumns = defaultProps['$grid-columns'], gridGutterWidths = defaultProps['$grid-gutter-widths'], breakpoint) {
  const columnList = [];
  for (let i = 1; i <= gridColumns; i += 1) {
    const column = `
      &.col-${breakpoint}-${i},
      & .col-${breakpoint}-${i} {
        ${getGridColumn(enableFlex, gridColumns, gridGutterWidths)}
      }
    `;
    columnList.push(column);
  }
  return `
    /* Allow columns to stretch full width below their breakpoints */
    &.col-${breakpoint},
    & .col-${breakpoint}{
      ${getGridColumn(enableFlex, gridColumns, gridGutterWidths)}
    }

    ${columnList.join('\n')}
  `;
}

function getMediaBreakpointUp(enableFlex = defaultProps['$enable-flex'], gridColumns = defaultProps['$grid-columns'], gridBreakpoints = defaultProps['$grid-breakpoints'], breakpoint, breakpointCounter) {
  let flexVal = '';
  if (enableFlex) {
    // Provide basic `.col-{bp}` classes for equal-width flexbox columns
    flexVal = `
      &.col-${breakpoint},
      & .col-${breakpoint}{
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }
      &.col-${breakpoint}-auto,
      & .col-${breakpoint}-auto{
        flex: 0 0 auto;
        width: auto;
      }
    `;
  }
  const columnList = [];
  for (let i = 1; i <= gridColumns; i += 1) {
    const column = `
      &.col-${breakpoint}-${i},
      & .col-${breakpoint}-${i}{
        ${makeCol(enableFlex, i, gridColumns)}
      }
    `;
    columnList.push(column);
  }
  const modifierList = ['pull', 'push'];
  const columnModifierList = [];
  modifierList.forEach((modifier) => {
    for (let i = 0; i <= gridColumns; i += 1) {
      const columnModifier = `
        &.${modifier}-${breakpoint}-${i},
        & .${modifier}-${breakpoint}-${i}{
          ${makeColModifier(modifier, i, gridColumns)}
        }
      `;
      columnModifierList.push(columnModifier);
    }
  });
  // `$columns - 1` because offsetting by the width of an entire row isn't possible
  const offsetColumnList = [];
  for (let i = 0; i <= (gridColumns - 1); i += 1) {
    if (breakpointCounter !== 1 || i !== 0) { // Avoid emitting useless .offset-xs-0
      const offsetColumn = `
        &.offset-${breakpoint}-${i},
        & .offset-${breakpoint}-${i}{
          ${makeColModifier('offset', i, gridColumns)}
        }
      `;
      offsetColumnList.push(offsetColumn);
    }
  }
  return mediaBreakpointUp(breakpoint, gridBreakpoints, `
    ${flexVal}
    ${columnList.join('\n')}
    ${columnModifierList.join('\n')}
    ${offsetColumnList.join('\n')}
  `);
}

export function makeGridColumns(enableFlex = defaultProps['$enable-flex'], enableGridClasses = defaultProps['$enable-grid-classes'], gridColumns = defaultProps['$grid-columns'], gridGutterWidths = defaultProps['$grid-gutter-widths'], gridBreakpoints = defaultProps['$grid-breakpoints']) {
  if (enableGridClasses) {
    let breakpointCounter = 0;
    const gridColumnList = [];
    Object.keys(gridBreakpoints).forEach((breakpoint) => {
      breakpointCounter += 1;
      const gridColumn = `
        ${getColumnGridColumn(enableFlex, gridColumns, gridGutterWidths, breakpoint)}
        ${getMediaBreakpointUp(enableFlex, gridColumns, gridBreakpoints, breakpoint, breakpointCounter)}
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
