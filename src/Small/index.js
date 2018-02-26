/**
 * Small component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { makeTheme } from './theme';


class SmallUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

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

/** @component */
export default Small;
