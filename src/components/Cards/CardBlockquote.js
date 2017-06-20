import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from '../../utils/tools';
import Blockquote from '../Blockquote';

const defaultProps = {
  tag: Blockquote,
};

class CardBlockquote extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
          'card-blockquote'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

CardBlockquote.defaultProps = defaultProps;

export default CardBlockquote;
