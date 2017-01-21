import React, { PropTypes } from 'react';

export default React.PropTypes.shape({
  menu: PropTypes.node,
  isHidden: PropTypes.bool.isRequired,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  onClick: PropTypes.func
});