/**
 * Button Radio component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Button from '../Button';
import Input from '../Input';

export default class ButtonRadio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
  }

  static contextTypes = {
    buttonGroup: React.PropTypes.object,
  }

  render() {
    const { children, value, checked } = this.props; // eslint-disable-line no-unused-vars
    const { name, selectedValue, onChange } = this.context.buttonGroup;

    const optional = {};
    if (selectedValue !== undefined) {
      optional.checked = (value === selectedValue);
    }
    if (typeof onChange === 'function') {
      optional.onChange = () => onChange(value);
    }

    return (
      <Label key={Math.random()}>
        <Input
          hidden
          value={value}
          checked={checked}
          name={name}
          type="radio"
          onChange={() => onChange(value)}
          {...optional}

        />
        <Button
          className={cn('btn', 'btn-primary', {
            active: checked,
          })}
          type="button"
          autoComplete="off"
          onClick={() => onChange(value)}
        >
          {children}
        </Button>
      </Label>
    );
  }
}
