import color from 'color';

export function bgVariant(parent, bgColor) {
  return `
    &${parent} {
      background: ${bgColor} !important;
    }
    a${parent} {
      background-color: ${color(bgColor).darken(0.1).toString()};
    }
  `;
}

export default {
  bgVariant,
};
