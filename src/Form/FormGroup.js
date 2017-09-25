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

const defaultProps = {
  tag: 'div',
};

class FormGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    inline: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    check: PropTypes.bool,
    color: PropTypes.string,
    row: PropTypes.bool,
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

FormGroup.defaultProps = defaultProps;

export default FormGroup;
