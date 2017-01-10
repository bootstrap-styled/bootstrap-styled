/* Option */

import React, { PropTypes } from 'react';
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
    const { className, disabled, children, selected, label, value } = this.props;

    return (
      <option
        value={value}
        selected={selected}
        label={label}
        disabled={disabled}
        className={cn(className, {
          disabled,
        })}
      >
        {children}
      </option>
    );
  }
}

export default Option;
