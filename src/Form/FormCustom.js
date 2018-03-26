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

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /** Specified id and name will be attributed to input of type radio. */
  radio: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  /** Toggles default checked input of type radio or checkbox. */
  defaultChecked: PropTypes.bool,
  /** Toggles checked input of type radio or checkbox. */
  checked: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class FormCustom extends React.Component {// eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

FormCustom.propTypes = propTypes;

/** @component */
export default FormCustom;
