/* A Output (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';

class Output extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <output
        className={cn(className, 'output')}
        {...attributes}
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
