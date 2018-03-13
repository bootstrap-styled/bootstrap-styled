/* eslint-disable quote-props, dot-notation */
/**
 * Form Feedback Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'div',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class FormFeedback extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'form-control-feedback'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

FormFeedback.defaultProps = defaultProps;
FormFeedback.propTypes = propTypes;

/** @component */
export default FormFeedback;
