export const defaultProps = {
  '$enable-shadows': false,
};

export function boxShadow(enableShadows = defaultProps['$enable-shadows'], ...args) {
  if (enableShadows) {
    return `
      box-shadow: ${args.join(' ')};
    `;
  }
  return '';
}

export default {
  defaultProps,
  boxShadow,
};
