import color from 'color';
import { borderRadius } from './border-radius';
import { hover } from './hover';
import { boxShadow } from './box-shadow';

export const defaultProps = {
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$enable-shadows': false,
  '$enable-rounded': true,
};

export function buttonVariant(enableShadows = defaultProps['$enable-shadows'], buttonColor, background, border, btnActiveBoxShadow = defaultProps['$btn-active-box-shadow']) {
  const activeBackground = color(background).darken(0.1).toString();
  const activeBorder = color(border).darken(0.12).toString();

  return `
    color: ${buttonColor};
    background-color: ${background};
    border-color: ${border};
    ${boxShadow(enableShadows, btnActiveBoxShadow)};
  
    ${hover(`
      color: ${buttonColor};
      background-color: ${activeBackground};
          border-color: ${activeBorder};
    `)}
  
    &:focus,
    &.focus {
      color: ${buttonColor};
      background-color: ${activeBackground};
          border-color: ${activeBorder};
    }
  
    &:active,
    &.active,
    .open > &.dropdown-toggle {
      color: ${buttonColor};
      background-color: ${activeBackground};
          border-color: ${activeBorder};
      /* Remove the gradient for the pressed/active state */
      background-image: none;
    ${boxShadow(enableShadows, btnActiveBoxShadow)};
  
      &:hover,
      &:focus,
      &.focus {
        color: ${buttonColor};
        background-color: ${color(background).darken(0.17).toString()};
            border-color: ${color(border).darken(0.25).toString()};
      }
    }
  
    &.disabled,
    &:disabled {
      &:focus,
      &.focus {
        background-color: ${background};
            border-color: ${border};
      }
      ${hover(`
        background-color: ${background};
            border-color: ${border};
      `)}
    }
  `;
}

export function buttonOutlineVariant(buttonColor, buttonColorHover = '#fff') {
  return `
    color: ${buttonColor};
    background-image: none;
    background-color: transparent;
    border-color: ${buttonColor};
  
    ${hover(`
      color: ${buttonColorHover};
      background-color: ${buttonColor};
          border-color: ${buttonColor};
    `)}
  
    &:focus,
    &.focus {
      color: ${buttonColorHover};
      background-color: ${buttonColor};
          border-color: ${buttonColor};
    }
  
    &:active,
    &.active,
    & .open > &.dropdown-toggle {
      color: ${buttonColorHover};
      background-color: ${buttonColor};
          border-color: ${buttonColor};
  
      &:hover,
      &:focus,
      &.focus {
        color: ${buttonColorHover};
        background-color: ${color(buttonColor).darken(0.17).toString()};
            border-color: ${color(buttonColor).darken(0.25).toString()};
      }
    }
  
    &.disabled,
    &:disabled {
      &:focus,
      &.focus {
        border-color: ${color(buttonColor).lighten(0.2).toString()};
      }
      ${hover(`
        border-color: ${color(buttonColor).lighten(0.2).toString()};
      `)}
    }
  `;
}

// Button sizes
export function buttonSize(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, btnBorderRadius) {
  return `
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    ${borderRadius(enableRounded, btnBorderRadius)}
  `;
}

export default {
  defaultProps,
  buttonVariant,
  buttonOutlineVariant,
  buttonSize,
};
