/**
 * FigCaption component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class FigCaption extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    right: PropTypes.bool,
  }

  render() {
    const { className, theme, children, right, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const classes = cn('figure-caption', className,
      right ? 'text-right' : null
    );
    return (
      <figcaption
        className={classes}
        {...rest}
      >
        {children}
      </figcaption>
    );
  }

}

// eslint-disable-next-line no-class-assign
FigCaption = styled(FigCaption)`
  ${(props) => `
    &.figure-caption {
      font-size: ${props.theme['$figure-caption-font-size']};
      color: ${props.theme['$figure-caption-color']};
    }
  `}
`;

FigCaption.defaultProps = defaultProps;

export default FigCaption;

