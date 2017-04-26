/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
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
      return (
        <Tag
          className={mapToCssModules(cn(groupClassName, 'input-group-btn'), cssModule)}
          {...groupAttributes}
        >
          <Button {...attributes} className={className}>{children}</Button>
        </Tag>
      );
    }

    return (
      <Tag
        className={mapToCssModules(cn(className, 'input-group-btn'), cssModule)}
        {...attributes}
      />
    );
  }
}

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
