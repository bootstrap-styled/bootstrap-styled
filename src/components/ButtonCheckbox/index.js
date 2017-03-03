/**
 * Button Checkbox component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Input from '../Input';

export default class ButtonCheckbox extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.string,
  };

  static contextTypes = {
    buttonCheckboxGroup: React.PropTypes.object,
  }

  addOrRemove(array, value) {
    const index = array.indexOf(value);

    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
    return array;
  }

  handleChange = () => {
    const { value } = this.props; // eslint-disable-line no-unused-vars
    const { selectedValueList, onChange } = this.context.buttonCheckboxGroup;
    const valueList = this.addOrRemove(selectedValueList, value);
    onChange(valueList);
  }

  render() {
    const { className, children, value, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { name, selectedValueList, onChange } = this.context.buttonCheckboxGroup;

    const optional = {};
    if (selectedValueList !== undefined) {
      optional.checked = selectedValueList.includes(value);
    }
    if (typeof onChange === 'function') {
      optional.onChange = this.handleChange;
    }

    return (
      <Label
        className={cn('btn', className, {
          active: optional.checked,
        })}
      >
        <Input
          key={Math.random()}
          value={value}
          name={name}
          type="checkbox"
          {...rest}
          {...optional}
        />
        {children}
      </Label>
    );
  }
}
