import React, { PropTypes } from 'react';
import cn from 'classnames';

function Fa(props) {
  const { className, ...rest } = props;
  return (
    <i className={cn('fa', className, Object.keys(rest).map((key) => `fa-${key}`))} />
  );
}

Fa.propTypes = {
  className: PropTypes.string,
};

export default Fa;
