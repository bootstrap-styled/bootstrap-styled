/**
 * Label component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { button } from 'bootstrap-styled-mixins/lib/buttons';
import { makeTheme } from './theme';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({

  }),
  /** Toggles check CSS style. */
  check: PropTypes.bool,
  /** Specified node element will be passed as children of `<Label />` component. */
  children: PropTypes.node,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** `For` attribute ill be replaced with the specified one. */
  for: PropTypes.string,
  /** Toggles hidden CSS style. */
  hidden: PropTypes.bool,
  /** Toggles inline CSS style. */
  inline: PropTypes.bool,
  /** `size` attribute ill be replaced with the specified one. */
  size: PropTypes.string,
  /** Extra small columns variables. */
  xs: columnProps,
  /** Small columns variables. */
  sm: columnProps,
  /** Medium columns variables. */
  md: columnProps,
  /** Large columns variables. */
  lg: columnProps,
  /** Extra large columns variables. */
  xl: columnProps,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

export const defaultProps = {
  tag: 'label',
  theme: makeTheme(),
};

let LabelUnstyled = (props) => {  // eslint-disable-line
  const {
    className,
    cssModule,
    hidden,
    tag: Tag,
    check,
    inline,
    disabled,
    size,
    for: htmlFor,
    ...attributes
  } = omit(props, ['theme']);

  const colClasses = [];

  colSizes.forEach(colSize => { // eslint-disable-line
    const columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      colClasses.push(mapToCssModules(cn({
        [`col-${colSize}-${columnProp.size}`]: columnProp.size,
        [`push-${colSize}-${columnProp.push}`]: columnProp.push,
        [`pull-${colSize}-${columnProp.pull}`]: columnProp.pull,
        [`offset-${colSize}-${columnProp.offset}`]: columnProp.offset,
      })), cssModule);
    } else if (columnProp) {
      colClasses.push(`col-${colSize}-${columnProp}`);
    }
  });

  const classes = mapToCssModules(cn(
    className,
    hidden ? 'sr-only' : false,
    check ? `form-check-${inline ? 'inline' : 'label'}` : false,
    check && inline && disabled ? 'disabled' : false,
    size ? `col-form-label-${size}` : false,
    colClasses,
    colClasses.length ? 'col-form-label' : false
  ), cssModule);

  return (
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  );
};
/**
 * `<Label />` defines a label for an <input> element.
 */
const Label = styled(LabelUnstyled)`
  ${(props) => `
    /* Reboot Scss */
    touch-action: manipulation;
    /* Allow labels to use margin for spacing. */
    display: inline-block;
    margin-bottom: ${props.theme['$label-margin-bottom']};

    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$font-weight-normal'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$btn-transition'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
      props.theme['$btn-box-shadow'],
      props.theme['$btn-focus-box-shadow'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$cursor-disabled'],
      props.theme['$link-color'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$btn-link-disabled-color'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm'],
      props.theme['$btn-block-spacing-y'],
      props.theme['$btn-primary-color'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-primary-border'],
      props.theme['$btn-secondary-color'],
      props.theme['$btn-secondary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-color'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-info-border'],
      props.theme['$btn-success-color'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-success-border'],
      props.theme['$btn-warning-color'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-warning-border'],
      props.theme['$btn-danger-color'],
      props.theme['$btn-danger-bg'],
      props.theme['$btn-danger-border'],
    )}
 `}
`;

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

/** @component */
export default Label;
