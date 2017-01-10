// Resize anything

export function resizable(direction) {
  const available = ['horizontal', 'vertical', 'both'];
  if (available.indexOf(direction) === -1) {
    throw new Error(`Wrong resize value. Available are ${available.join(',')}`);
  }
  return `
    resize: ${direction}; /* Options: horizontal, vertical, both */
    overflow: auto; /* Per CSS3 UI, 'resize' only applies when 'overflow' isn't 'visible' */
  `;
}

export default {
  resizable,
};
