// Lists
import theme from 'theme';
// Unstyled keeps list items block level, just removes default browser padding and list-style
export function listUnstyled() {
  return '\n    padding-left: 0;\n    list-style: none;\n  ';
}

export function listInline() {
  return listUnstyled();
}

export function listInlineItem() {
  var listInlinePadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : theme['$list-inline-padding'];

  return '\n    display: inline-block;\n  \n    &:not(:last-child) {\n      margin-right: ' + listInlinePadding + ';\n    }\n  ';
}
export default {
  listInline: listInline,
  listUnstyled: listUnstyled
};