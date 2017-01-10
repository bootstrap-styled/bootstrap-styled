/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';

export default function composeCollapse(HeaderNavBar) {
  class Collapse extends React.Component {

    static propTypes = {
      className: PropTypes.string,
      menu: PropTypes.node.isRequired,
    }

    state = {
      isCollapsed: false,
    }

    handleClick = () => {
      this.setState({
        isCollapsed: !this.state.isCollapsed,
      });
    }

    render() {
      const { className, menu, ...rest } = this.props;

      return (
        <HeaderNavBar
          className={className}
          composeCollapsed={{
            isCollapsed: this.state.isCollapsed,
            onToggleMenu: this.handleClick,
          }}
          menu={menu}
          {...rest}
        />
      );
    }
  }
  return Collapse;
}
