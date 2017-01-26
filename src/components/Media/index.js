/**
 * Media component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

const defaultProps = { theme };

class Media extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

// eslint-disable-next-line no-class-assign
Media = styled(Media)`
  &.media {
    display: flex;
    align-items: flex-start;
  }
  
  & .media-body {
    flex: 1;
  }
`;

Media.defaultProps = defaultProps;

export default Media;

