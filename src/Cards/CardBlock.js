import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';


class CardBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'div',
  };

  static propTypes = {
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
          'card-block'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

export default CardBlock;
