export function getAlignUtilities() {
  return `
   ${alignBaseline()}
   ${alignTop()}
   ${alignMiddle()}
   ${alignBottom()}
   ${alignTextBottom()}
   ${alignTextTop()}
  `;
}

export function alignBaseline() {
  return `
    .align-baseline { vertical-align: baseline !important; } /* Browser default */
  `;
}

export function alignTop() {
  return `
    .align-top { vertical-align: top !important; }
  `;
}

export function alignMiddle() {
  return `
    .align-middle { vertical-align: middle !important; }
  `;
}

export function alignBottom() {
  return `
    .align-bottom { vertical-align: bottom !important; }
  `;
}

export function alignTextBottom() {
  return `
    .align-text-bottom { vertical-align: text-bottom !important; }
  `;
}

export function alignTextTop() {
  return `
    .align-text-top { vertical-align: text-top !important; }
  `;
}

export default {
  getAlignUtilities,
  alignBaseline,
  alignTop,
  alignMiddle,
  alignBottom,
  alignTextBottom,
  alignTextTop,
};
