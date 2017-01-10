export const defaultProps = {
  '$enable-transitions': false,
};

// eslint-disable-next-line consistent-return
export function transition(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions) {
    return `
      transition: ${args.join(' ')};
    `;
  }
  return '';
}

export default {
  defaultProps,
  transition,
};
