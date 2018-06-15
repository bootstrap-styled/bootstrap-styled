import { CHANGE_THEME, DELETE_THEME, STORE_THEME } from '../constants';
import bootstrapStyled from '../../src/theme';

export const initialState = {
  theme: bootstrapStyled,
  themes: { 'bootstrap-styled': bootstrapStyled },
};

/* eslint-disable no-underscore-dangle */
/**
 * themeReducer
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      // allow change by theme name
      if (typeof action.theme === 'string') {
        return { themes: state.themes, theme: state.themes[action.theme] };
      }
      // allow change by insert/override themes directly
      return { themes: { ...state.themes, [action.theme._name]: action.theme }, theme: action.theme };
    }
    case STORE_THEME: {
      return { themes: { ...state.themes, [action.theme._name]: action.theme }, theme: state.theme };
    }
    case DELETE_THEME: {
      const newState = { ...state };
      delete newState.themes[action.theme._name];
      return newState;
    }
    default:
      return state;
  }
};
