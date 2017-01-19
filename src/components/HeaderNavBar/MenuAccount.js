/**
 * MenuCollapse Component
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';

class MenuAccount extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div
        className={cn(this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MenuAccount;
