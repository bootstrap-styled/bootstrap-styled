/**
 * MenuCollapse Component
 *
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';

const defaultProps = {
  active: false,
};

class MenuCollapse extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
  };

  render() {
    return (
      <div
        className={cn(this.props.className, 'collapse', 'navbar-collapse', {
          active: this.props.active,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
MenuCollapse.defaultProps = defaultProps;

export default MenuCollapse;
