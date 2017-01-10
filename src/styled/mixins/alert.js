import color from 'color';

export function alertVariant(background, border, bodyColor) {
  return `
    background-color: ${background};
    border-color: ${border};
    color: ${bodyColor};
  
    hr {
      border-top-color: ${color(border).darken(0.5).toString()};
    }
    .alert-link {
      color: ${color(bodyColor).darken(0.1).toString()};
    }
  `;
}

export default {
  alertVariant,
};
