import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

const defaultProps = {
  tag: 'p',
};

class CardText extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      'card-text'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardText.defaultProps = defaultProps;

export default CardText;
