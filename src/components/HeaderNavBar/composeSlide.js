/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';

export default function composeSlide(HeaderNavBar) {
  class Slide extends React.Component {

    static propTypes = {
      className: PropTypes.string,
      menu: PropTypes.node.isRequired,
    }

    state = {
      isHidden: true,
    }

    handleClick = () => {
      this.setState({
        isHidden: !this.state.isHidden,
      });
    }

    render() {
      const { className, menu, ...rest } = this.props;

      return (
        <HeaderNavBar
          className={className}
          composeSlide={{
            isHidden: this.state.isHidden,
            onToggleMenu: this.handleClick,
          }}
          menu={menu}
          {...rest}

        />
      );
    }

  }

  return Slide;
}
