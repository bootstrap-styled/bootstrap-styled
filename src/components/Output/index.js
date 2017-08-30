/* A Output (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';

class OutputUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      ...rest
    } = omit(this.props, ['theme']);

    return (
      <output
        className={cn(className, 'output')}
        {...rest}
      >
      </output>
    );
  }
}

const Output = styled(OutputUnstyled)`
  &.output {
    display: inline-block;
  }
`;

export default Output;
