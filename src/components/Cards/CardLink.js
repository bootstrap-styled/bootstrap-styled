import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import A from '../A';

const defaultProps = {
  tag: A,
};

class CardLink extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

    const classes = mapToCssModules(cn(
      className,
      'card-link'
    ), cssModule);

    return (
      <Tag {...attributes} ref={getRef} className={classes} />
    );
  }
}

CardLink.defaultProps = defaultProps;

export default CardLink;
