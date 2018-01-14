/**
 * Strong component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

class StrongUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
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

export default Strong;

