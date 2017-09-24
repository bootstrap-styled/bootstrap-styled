/**
 * Strong component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import bsTheme from '../theme';
import { mapToCssModules } from '../utils/tools';

const defaultProps = { theme: bsTheme };

class StrongUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <strong className={classes} {...attributes}>
        {children}
      </strong>
    );
  }
}

const Strong = styled(StrongUnstyled)`
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
`;

Strong.defaultProps = defaultProps;

export default Strong;

