import color from 'color';
import { hover } from './hover';

// Tables
export function tableRowVariant(state, background) {
  const hoverBackground = color(background).darken(0.05).toString();
  return `
  /* Exact selectors below required to override '.table-striped' and prevent */
  /* inheritance to nested tables. */
  & .table-${state} {
    &,
    > th,
    > td {
      background-color: ${background};
    }
  }

  /* Hover states for '.table-hover' */
  /* Note: this is not available for cells or rows within 'thead' or 'tfoot'. */
  &.table-hover {

    .table-${state} {
      ${hover(`
        background-color: ${hoverBackground};

        > td,
        > th {
          background-color: ${hoverBackground};
        }
      `)}
    }
  }
  `;
}

export default {
  tableRowVariant,
};
