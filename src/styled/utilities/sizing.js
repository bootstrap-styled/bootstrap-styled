export const defaultProps = {
  $sizes: {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%',
  },
};

export function getSizingUtilities(sizes = defaultProps['$sizes']) { // eslint-disable-line dot-notation
  const abbrev = {
    width: 'w',
    height: 'h',
  };

  const sizingList = [];
  Object.keys(abbrev).forEach((cssProp) => {
    Object.keys(sizes).forEach((size) => {
      sizingList.push(`
        .${abbrev[cssProp]}-${size} { ${cssProp}: ${sizes[size]} !important; }
      `);
    });
  });

  return `
    ${sizingList.join('\n')}
    .mw-100 { max-width: 100% !important; }
    .mh-100 { max-height: 100% !important; }
  `;
}

export default {
  defaultProps,
  getSizingUtilities,
};
