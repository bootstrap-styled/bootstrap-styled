/**
 * Media component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { media } from '../../styled/mixins/media';
const defaultProps = { theme: bsTheme };

class Media extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className={cn('media', className)} {...rest}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Media = styled(Media)`
  ${media()}
`;

Media.defaultProps = defaultProps;

export default Media;

