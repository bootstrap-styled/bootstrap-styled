/**
 * Button Radio component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Input from '../Input';

export default class ButtonRadio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
  }

  static contextTypes = {
    buttonRadioGroup: React.PropTypes.object,
  }

  render() {
    const { className, children, value, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { name, selectedValue, onChange } = this.context.buttonRadioGroup;

    const optional = {};
    if (selectedValue !== undefined) {
      optional.checked = (value === selectedValue);
    }
    if (typeof onChange === 'function') {
      optional.onChange = () => onChange(value);
    }

    return (
      <Label
        className={cn(className, 'btn', {
          active: optional.checked,
        })}
      >
        <Input
          key={Math.random()}
          value={value}
          name={name}
          type="radio"
          {...rest}
          {...optional}
        />
        {children}
      </Label>
    );
  }
}
