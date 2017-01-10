export function clearfix() {
  return `
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}

export default {
  clearfix,
};
