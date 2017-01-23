import React, { PropTypes } from 'react';

export default React.PropTypes.shape({
  menu: PropTypes.node,
  isCollapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func
});