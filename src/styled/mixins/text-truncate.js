// Text truncate
// Requires inline-block or block for proper styling

export function textTruncate() {
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

export default {
  textTruncate,
};
