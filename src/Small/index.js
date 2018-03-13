/**
 * Small component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';


export const defaultProps = {
  theme: {
    '$small-font-size': '80%',
  },
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
  ]),
  /** Specified node element will be passed as children of `<Small />` component. */
  children: PropTypes.node,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$small-font-size': PropTypes.string,
  }),
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
class SmallUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const { className,
      color,
      children,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <small className={classes} {...attributes}>
        {children}
      </small>
    );
  }
}

const Small = styled(SmallUnstyled)`
  ${(props) => `
    /* Reboot Scss */
    font-size: ${props.theme['$small-font-size']};
    font-weight: normal;
  `}
`;

Small.defaultProps = defaultProps;
Small.propTypes = propTypes;

/** @component */
export default Small;
