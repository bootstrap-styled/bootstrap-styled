/* eslint-disable quote-props, dot-notation */
/**
 * Form Text Component test
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

const defaultProps = {
  tag: 'small',
};

class FormText extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    tag: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  }

  render() {
    const {
      className,
      cssModule,
      inline,
      color,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          'form-text': !inline,
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

FormText.defaultProps = defaultProps;

export default FormText;
