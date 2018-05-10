import { CHANGE_THEME, STORE_THEME, DELETE_THEME } from './constants';

/**
 * Used to change the theme
 * @param theme
 * theme are identified with a key '_name'
 * OR it can be the name of theme stored in themes
 */
export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

/**
 * Add a new themes to the redux themes
 * theme are identified with a key '_name'
 * @param theme
 */
export const storeTheme = (theme) => ({
  type: STORE_THEME,
  theme,
});

/**
 * Remove an existing theme to the redux themes
 * theme are identified with a key '_name'
 * @param theme
 */
export const deleteTheme = (theme) => ({
  type: DELETE_THEME,
  theme,
});
