/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import shapeMenuCollapsed from './shapeMenuCollapsed';

export default function composeCollapse(HeaderNavBarOld) {
  class Collapse extends React.Component {

    static propTypes = {
      brandTitle: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
      menuCollapsed: shapeMenuCollapsed,
    }

    state = {
      isCollapsed: false,
    }

    handleClick = (e) => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      this.setState({
        isCollapsed: !this.state.isCollapsed,
      });
    }

    render() {
      const { className, menuCollapsed, ...rest } = this.props;

      return (
        <HeaderNavBarOld
          className={className}
          composeCollapsed={{
            brandTitle: this.props.brandTitle,
            isCollapsed: this.state.isCollapsed,
            onClick: this.handleClick,
            menuCollapsed,
          }}
          {...rest}
        />
      );
    }
  }
  return Collapse;
}
