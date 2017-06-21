/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from '../../utils/tools';

const defaultProps = {
  tag: 'div',
};


class InputGroupAddon extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'input-group-addon'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
