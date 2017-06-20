// Sizing shortcuts

export function size(width, height = width) {
  return `
    width: ${width};
    height: ${height};
  `;
}

export default {
  size,
};
