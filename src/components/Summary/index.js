/* A Summary (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Summary extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <summary
        className={cn(this.props.className, 'summary')}
      >
        {this.props.children}
      </summary>
    );
  }

}

// eslint-disable-next-line no-class-assign
Summary = styled(Summary)`
  &.summary {
    touch-action: manipulation;
  }
`;

export default Summary;
