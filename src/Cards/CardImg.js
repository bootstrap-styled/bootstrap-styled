import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'img',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Toggle image position to top of the card. */
  top: PropTypes.bool,
  /** Toggle image position to bottom of the card. */
  bottom: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class CardImg extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;
  static propTypes = propTypes;

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
CardImg.propTypes = propTypes;

export default CardImg;
