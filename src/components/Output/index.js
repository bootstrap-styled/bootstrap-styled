/* A Output (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Output extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    form: PropTypes.string,
    name: PropTypes.string,
  }

  render() {
    const { htmlFor, form, name } = this.props;

    return (
      <output
        htmlFor={htmlFor}
        form={form}
        name={name}
        className={cn(this.props.className, 'output')}
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
