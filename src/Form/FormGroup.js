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


class FormGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'div',
  };

  static propTypes = {
    className: PropTypes.string,
    check: PropTypes.bool,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inline: PropTypes.bool,
    row: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }

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

/** @component */
export default FormGroup;
