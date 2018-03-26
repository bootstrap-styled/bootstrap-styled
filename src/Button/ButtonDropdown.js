import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

export const propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /** Toggles open button dropdown. */
  isOpen: PropTypes.bool.isRequired,
  /** Assign function to start when dropdown opening action is trigger. */
  toggle: PropTypes.func.isRequired,
};

const ButtonDropdown = (props) => { // eslint-disable-line arrow-body-style
  return (
    <Dropdown {...props} group />
  );
};

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
