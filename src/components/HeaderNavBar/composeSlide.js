/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import shapeMenuOffsetSlide from './shapeMenuOffsetSlide';
import shapeMenuTopSlide from './shapeMenuTopSlide';

export default function composeSlide(HeaderNavBar) {
  class Slide extends React.Component {

    static propTypes = {
      className: PropTypes.string,
      onClick: PropTypes.func,
      menuTop: shapeMenuTopSlide,
      menuOffset: shapeMenuOffsetSlide,
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
          composeSlide={{
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

  return Slide;
}
