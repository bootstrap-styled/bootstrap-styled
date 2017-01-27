/* Option */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

class Option extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
  };

  render() {
    const { className, disabled, children, selected, label, value, ...rest } = this.props;

    const cssClasses = cn(className, {
      selected,
      label,
      value,
      disabled,
    });

    return (
      <option
        className={cssClasses}
        selected={selected}
        label={label}
        value={value}
        {...rest}
      >
        {children}
      </option>
    );
  }
}

// eslint-disable-next-line no-class-assign
Option = styled(Option)`
`;

export default Option;
