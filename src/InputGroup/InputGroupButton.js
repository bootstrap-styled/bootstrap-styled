/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Button from '../Button';

export const defaultProps = {
  tag: 'div',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<InputGroup />` component. */
  children: PropTypes.node,
  /** Specified input group className. */
  groupClassName: PropTypes.string,
  /** Specified input group attribute. */
  groupAttributes: PropTypes.object,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class InputGroupButton extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
InputGroupButton.propTypes = propTypes;

export default InputGroupButton;
