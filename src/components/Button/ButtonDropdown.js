import React, { PropTypes } from 'react';
import Dropdown from '../Dropdown';

const propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const ButtonDropdown = (props) => { // eslint-disable-line arrow-body-style
  return (
    <Dropdown {...props} group />
  );
};

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
