import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import A from '../A';


class CardLink extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: A,
  };

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      getRef,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-link'
        ), cssModule)}
        ref={getRef}
        {...attributes}
      />
    );
  }
}

export default CardLink;
