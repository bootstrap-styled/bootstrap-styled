import color from 'color';

export function bgVariant(selector, bgColor) {
  return `
    ${selector} {
      background: ${bgColor} !important;
    }
    a${selector} {
      background-color: ${color(bgColor).darken(0.1).toString()};
    }
  `;
}

export default {
  bgVariant,
};
