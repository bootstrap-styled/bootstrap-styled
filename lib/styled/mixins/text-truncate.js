// Text truncate
// Requires inline-block or block for proper styling

export function textTruncate() {
  return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}

export default {
  textTruncate: textTruncate
};