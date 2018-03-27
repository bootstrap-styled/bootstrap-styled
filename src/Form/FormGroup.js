/* eslint-disable quote-props, dot-notation */
/**
 * Form Group Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'div',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /** Toggles input radio or checkbox check. */
  check: PropTypes.bool,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    '',
  ]),
  /** Toggles disabled check of input radio or checkbox. */
  disabled: PropTypes.bool,
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: PropTypes.func,
  /** Toggles inline CSS display. */
  inline: PropTypes.bool,
  /** Toggles row CSS display. */
  row: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class FormGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      row,
      disabled,
      inline,
      color,
      check,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      color ? `has-${color}` : false,
      row ? 'row' : false,
      check ? 'form-check' : 'form-group',
      check && disabled ? 'disabled' : false,
      inline ? 'form-check-inline' : false,
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

FormGroup.defaultProps = defaultProps;
FormGroup.propTypes = propTypes;

/** @component */
export default FormGroup;
