import { unitUtils } from 'math-utils';

export const defaultProps = {
  '$navbar-height': '50px',
};

// Navbar vertical align
//
// Vertically center elements in the navbar.
// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.

// @mixin navbar-vertical-align($element-height) {
//   margin-top: (($navbar-height - $element-height) / 2);
//   margin-bottom: (($navbar-height - $element-height) / 2);
// }

export function navbarVerticalAlign(navbarHeight = defaultProps['$navbar-height'], elementHeight) {
  const marginTop = `${(unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2}${unitUtils.UNIT.PX}`;
  const marginBottom = `${(unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2}${unitUtils.UNIT.PX}`;
  return `
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};  
  `;
}

export default {
  defaultProps,
  navbarVerticalAlign,
};
