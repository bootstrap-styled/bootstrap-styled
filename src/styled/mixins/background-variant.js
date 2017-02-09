import color from 'color';

export function bgVariant(selector, bgColor) {
  return `
    ${selector} {
      background-color: ${bgColor} !important;
    }
    a${selector} {
      background-color: ${color(bgColor).darken(0.1).toString()} !important;
    }
  `;
}

export default {
  bgVariant,
};
