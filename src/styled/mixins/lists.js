// Lists
import theme from '../../theme';
export const defaultProps = {
  '$list-inline-padding': '5px',
};
// Unstyled keeps list items block level, just removes default browser padding and list-style
export function listUnstyled() {
  return `
    padding-left: 0;
    list-style: none;
  `;
}

export function listInline() {
  return listUnstyled();
}

export function listInlineItem(listInlinePadding = theme['$list-inline-padding']) {
  return `
    display: inline-block;
  
    &:not(:last-child) {
      margin-right: ${listInlinePadding};
    }
  `;
}
export default {
  defaultProps,
  listInline,
  listUnstyled,
};
