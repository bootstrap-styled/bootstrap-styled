/**
 * InputGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';
import Button from '../Button';
const defaultProps = {
  tag: 'div',
};


class InputGroupButton extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.node,
    groupClassName: PropTypes.string,
    groupAttributes: PropTypes.object,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      children,
      groupClassName,
      groupAttributes,
      ...attributes
    } = this.props;

    if (typeof children === 'string') {
      const groupClasses = mapToCssModules(cn(
        groupClassName,
        'input-group-btn'
      ), cssModule);

      return (
        <Tag {...groupAttributes} className={groupClasses}>
          <Button {...attributes} className={className}>{children}</Button>
        </Tag>
      );
    }

    const classes = mapToCssModules(cn(
      className,
      'input-group-btn'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes}>{children}</Tag>
    );
  }
}

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
