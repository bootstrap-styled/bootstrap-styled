import { createSelector } from 'reselect';

export const selectBsDocumentation = (state) => state['bs.documentation'];

/**
 * themes
 */
export const selectThemes = createSelector(
  selectBsDocumentation,
  (bsDocumentationState) => bsDocumentationState.themes,
);

/**
 * theme
 */
export const selectTheme = createSelector(
  selectBsDocumentation,
  (bsDocumentationState) => bsDocumentationState.theme,
);

/**
 * current theme name
 */
export const selectValue = createSelector(
  selectBsDocumentation,
  (bsDocumentationState) => bsDocumentationState.theme._name, // eslint-disable-line no-underscore-dangle
);

/**
 * current available theme list
 */
export const selectValues = createSelector(
  selectBsDocumentation,
  (bsDocumentationState) => Object.keys(bsDocumentationState.themes).map((key) => bsDocumentationState.themes[key]._name), // eslint-disable-line no-underscore-dangle
);
