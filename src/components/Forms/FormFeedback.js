/* eslint-disable quote-props, dot-notation */
/**
 * Form Feedback Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

const defaultProps = {
  tag: 'div',
};

class FormFeedback extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(
          className,
          'form-control-feedback'
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
