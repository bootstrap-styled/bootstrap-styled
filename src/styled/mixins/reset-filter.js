// Reset filters for IE
//
// When you need to remove a gradient background, do not forget to use this to reset
// the IE filter for IE9.

export function resetFilter() {
  return `
    filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)";
  `;
}

export default {
  resetFilter,
};
