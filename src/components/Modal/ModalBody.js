import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props;
  const classes = mapToCssModules(cn(
    className,
    'modal-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
