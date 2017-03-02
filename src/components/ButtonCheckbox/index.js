/**
 * Button Checkbox component
 **/

import React, { PropTypes } from 'react';
import cn from 'classnames';
import Label from '../Label';
import Button from '../Button';
import Input from '../Input';

const render = 0; // eslint-disable-line no-unused-vars

export default class ButtonCheckbox extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
  };

  state = {
    checked: false,
  };

  componentWillMount() {
    const { checked } = this.props;
    this.setState({
      checked: !!checked,
    });
  }

  handleChange = () => {
    const { onChange } = this.props;
    const { checked } = this.state;
    const newChecked = !checked;
    this.setState({
      checked: newChecked,
    });
    if (onChange) {
      onChange(newChecked);
    }
  }

  render() {
    const { children, onChange: unused, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { checked } = this.state;

    return (
      <Label>
        <Input
          hidden
          type="checkbox"
          checked={checked}
          onChange={this.handleChange}
          {...rest}
        />
        <Button
          className={cn('btn', 'btn-primary', {
            active: checked,
          })}
          type="button"
          autoComplete="off"
          onClick={this.handleChange}
        >
          {children}
        </Button>
      </Label>
    );
  }
}
