import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';


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

    let cardImgClassName = 'card-img';  // eslint-disable-line no-unused-vars
    if (top) {
      cardImgClassName = 'card-img-top';
    }
    if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }

    const classes = mapToCssModules(cn(
      className,
      'card-img'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardImg.defaultProps = defaultProps;

export default CardImg;
