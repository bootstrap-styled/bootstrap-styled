/* A Legend (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Legend extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <legend
        className={cn(this.props.className, 'legend')}
      >
        {this.props.children}
      </legend>
    );
  }
}

// eslint-disable-next-line no-class-assign
Legend = styled(Legend)`
    &.legend {
      /* Reset the entire legend element to match the 'fieldset' */
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: .5rem;
      font-size: 1.5rem;
      line-height: inherit;
    }
`;

export default Legend;
