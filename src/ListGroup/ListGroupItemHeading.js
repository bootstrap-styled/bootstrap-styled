/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import H5 from '../H5';

export const defaultProps = {
  tag: H5,
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
};
class ListGroupItemHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;
    const classes = cn(
      className,
      'list-group-item-heading'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItemHeading.defaultProps = defaultProps;
ListGroupItemHeading.propTypes = propTypes;

export default ListGroupItemHeading;

