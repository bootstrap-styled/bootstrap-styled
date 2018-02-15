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


class FormFeedback extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'div',
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tag: PropTypes.string,
  }

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

/** @component */
export default FormFeedback;
