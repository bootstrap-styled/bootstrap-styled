import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';
import Dropdown from '../Dropdown';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
  tag: 'li',
};

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  return (
    <Dropdown
      className={mapToCssModules(cn(
        className,
        'nav-item'
      ), cssModule)}
      tag={Tag}
      {...attributes}
    />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;
