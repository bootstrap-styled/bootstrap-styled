import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import H6 from '../H6';
const defaultProps = {
  tag: H6,
};

class CardSubtitle extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

    const classes = mapToCssModules(cn(
      className,
      'card-subtitle'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
