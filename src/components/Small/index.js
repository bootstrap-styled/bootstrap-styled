/**
 * Small component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
const defaultProps = { theme: bsTheme };

class Small extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
  }

  render() {
    const { className,
      color,
      theme,  // eslint-disable-line no-unused-vars
      children,
      cssModule,
      ...attributes
    } = this.props;

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

// eslint-disable-next-line no-class-assign
Small = styled(Small)`
  ${(props) => `
    /* Reboot Scss */
    font-size: ${props.theme['$small-font-size']};
    font-weight: normal;
  `}
`;

Small.defaultProps = defaultProps;

export default Small;
