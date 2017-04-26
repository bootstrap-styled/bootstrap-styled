/* eslint-disable quote-props, dot-notation */
/**
 * Form Group Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

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

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          row,
          'form-check': check,
          'form-check-inline': inline,
          'disabled': check && disabled,
          [`has-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

FormGroup.defaultProps = defaultProps;

export default FormGroup;
