/**
 * MenuCollapse Component
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';

class MenuCollapse extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
  };

  render() {
    return (
      <div
        className={cn(this.props.className, 'collapse', 'navbar-toggleable-xs', {
          active: this.props.active,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MenuCollapse;
