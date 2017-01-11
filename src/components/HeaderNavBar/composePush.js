/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';

export default function composePush(HeaderNavBar) {
  class Push extends React.Component {

    static propTypes = {
      className: PropTypes.string,
      onClick: PropTypes.func,
      menuTop: shapeMenuTopPush,
      menuOffset: shapeMenuOffsetPush,
    }

    state = {
      isHidden: true,
    }

    handleClick = (e) => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      this.setState({
        isHidden: !this.state.isHidden,
      });
    }

    render() {
      const { className, menuTop, menuOffset, ...rest } = this.props;

      return (
        <HeaderNavBar
          className={className}
          composePush={{
            isHidden: this.state.isHidden,
            onClick: this.handleClick,
            menuTop,
            menuOffset,
          }}
          {...rest}
        />
      );
    }

  }

  return Push;
}
