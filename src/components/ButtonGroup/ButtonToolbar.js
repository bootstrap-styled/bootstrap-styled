/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

class ButtonToolbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    role: PropTypes.string,
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'btn-toolbar'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />

    );
  }
}

ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
