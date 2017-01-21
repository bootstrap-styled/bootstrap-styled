// Lists

// Unstyled keeps list items block level, just removes default browser padding and list-style
export function listUnstyled() {
  return "\n    padding-left: 0;\n    list-style: none;\n  ";
}

export default {
  listUnstyled: listUnstyled
};