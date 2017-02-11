/* A Output (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Output extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <output
        className={cn(className, 'output')}
        {...rest}
      >
      </output>
    );
  }
}

// eslint-disable-next-line no-class-assign
Output = styled(Output)`
  &.output {
    display: inline-block;
  }
`;

export default Output;
