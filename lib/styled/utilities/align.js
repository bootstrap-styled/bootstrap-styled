export function getAlignUtilities() {
  return "\n   " + alignBaseline() + "\n   " + alignTop() + "\n   " + alignMiddle() + "\n   " + alignBottom() + "\n   " + alignTextBottom() + "\n   " + alignTextTop() + "\n  ";
}

export function alignBaseline() {
  return "\n    .align-baseline { vertical-align: baseline !important; } // Browser default\n  ";
}

export function alignTop() {
  return "\n    .align-top { vertical-align: top !important; }\n  ";
}

export function alignMiddle() {
  return "\n    .align-middle { vertical-align: middle !important; }\n  ";
}

export function alignBottom() {
  return "\n    .align-bottom { vertical-align: bottom !important; }\n  ";
}

export function alignTextBottom() {
  return "\n    .align-text-bottom { vertical-align: text-bottom !important; }\n  ";
}

export function alignTextTop() {
  return "\n    .align-text-top { vertical-align: text-top !important; }\n  ";
}

export default {
  getAlignUtilities: getAlignUtilities,
  alignBaseline: alignBaseline,
  alignTop: alignTop,
  alignMiddle: alignMiddle,
  alignBottom: alignBottom,
  alignTextBottom: alignTextBottom,
  alignTextTop: alignTextTop
};