import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import A from '../A';

export const defaultProps = {
  tag: A,
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
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: PropTypes.func,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class CardLink extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-link'
        ), cssModule)}
        ref={innerRef}
        {...attributes}
      />
    );
  }
}

CardLink.defaultProps = defaultProps;
CardLink.propTypes = propTypes;

export default CardLink;
