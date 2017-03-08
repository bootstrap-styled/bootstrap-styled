import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';
import H4 from '../H4';
const defaultProps = {
  tag: H4,
};

class CardTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      'card-title'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardTitle.defaultProps = defaultProps;

export default CardTitle;
