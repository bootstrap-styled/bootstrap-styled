import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';


const defaultProps = {
  tag: 'div',
};

class CardHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      'card-header'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardHeader.defaultProps = defaultProps;

export default CardHeader;
