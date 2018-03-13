/**
 * Strong component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />` component. */
  children: PropTypes.node,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'white',
    'muted',
    'gray-dark',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class StrongUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const { className,
      color,
      children,
      cssModule,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <strong className={classes} {...attributes}>
        {children}
      </strong>
    );
  }
}

const Strong = styled(StrongUnstyled)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

Strong.propTypes = propTypes;

/** @component */
export default Strong;

