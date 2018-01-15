import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import H4 from '../H4';


class CardTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: H4,
  };

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'card-title'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

export default CardTitle;
