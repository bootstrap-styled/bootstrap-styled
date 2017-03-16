import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';
import Dropdown from '../Dropdown';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
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

  const classes = mapToCssModules(cn(
    className,
    'nav-item'
  ), cssModule);

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;
