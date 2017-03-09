/**
 * Input component
 **/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { button } from '../../styled/mixins/buttons';
import { mapToCssModules } from '../../styled/utilities/tools';

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

const propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  theme: PropTypes.object,
};

const defaultProps = {
  tag: 'label',
  theme: bsTheme,
};

let Label = (props) => {  // eslint-disable-line
  const {
    className,
    cssModule,
    hidden,
    tag: Tag,
    check,
    inline,
    disabled,
    size,
    theme,  // eslint-disable-line
    for: htmlFor,
    ...attributes
  } = props;

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

// eslint-disable-next-line no-class-assign
Label = styled(Label)`
  ${(props) => `
    /* Reboot Scss */
    touch-action: manipulation;
    /* Allow labels to use margin for spacing. */
    display: inline-block;
    margin-bottom: .5rem;

    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$btn-transition'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
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

export default Label;
