import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(cn(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  ), cssModule);

  return (
    <Tag {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;
