/* eslint-disable quote-props, dot-notation */
/**
 * Form Text Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'small',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    'muted',
    '',
  ]),
  /** Toggles inline CSS display. */
  inline: PropTypes.bool,
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
class FormText extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      inline,
      color,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      !inline ? 'form-text' : false,
      color ? `text-${color}` : false
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

FormText.defaultProps = defaultProps;
FormText.propTypes = propTypes;

/** @component */
export default FormText;
