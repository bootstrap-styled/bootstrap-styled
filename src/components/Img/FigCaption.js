/**
 * FigCaption component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import bsTheme from 'theme';

const defaultProps = {
  theme: bsTheme,
};

class FigCaption extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    right: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      right,
      ...rest
    } = omit(this.props, ['theme']);

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

