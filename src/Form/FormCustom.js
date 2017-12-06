/* eslint-disable quote-props, dot-notation */
/**
 * FormCustom Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Label from '../Label';
import Input from '../Input';

class FormCustom extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    radio: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
  }

  render() {
    const {
      className,
      cssModule,
      radio,
      children,
      checked,
      defaultChecked,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'custom-control',
      radio ? 'custom-radio' : 'custom-checkbox',
    ), cssModule);

    const CustomInput = radio ? (
      <Input defaultChecked={defaultChecked} checked={checked} type="radio" id={radio.id} name={radio.name} className="custom-control-input" />
    ) : (
      <Input defaultChecked={defaultChecked} checked={checked} type="checkbox" className="custom-control-input" />
    );
    return (
      <Label className={classes} {...attributes}>
        {CustomInput}
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">{children}</span>
      </Label>
    );
  }
}


export default FormCustom;
