/**
 * Strong component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

const defaultProps = { theme: bsTheme };

class Strong extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <strong className={classes} {...attributes}>
        {children}
      </strong>
    );
  }
}

// eslint-disable-next-line no-class-assign
Strong = styled(Strong)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

Strong.defaultProps = defaultProps;

export default Strong;

