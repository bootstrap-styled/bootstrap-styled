import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from '../utils/tools';

const defaultProps = {
  tag: 'img',
};

class CardImg extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      top,
      bottom,
      ...attributes
    } = this.props;

    let cardImgClassName = 'card-img';
    if (top) {
      cardImgClassName = 'card-img-top';
    } else if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          cardImgClassName,
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardImg.defaultProps = defaultProps;

export default CardImg;
