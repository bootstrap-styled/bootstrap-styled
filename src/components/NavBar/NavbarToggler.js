import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from 'utils/tools';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  type: 'button',
};

const navbarToggleIcon = <span className="navbar-toggler-icon" />;

const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    right,
    left,
    tag: Tag,
    ...attributes
  } = props;

  return (
    <Tag
      className={mapToCssModules(cn(className, 'navbar-toggler', {
        'navbar-toggler-right': right,
        'navbar-toggler-left': left,
      }), cssModule)}
      {...attributes}
    >
      {children || navbarToggleIcon}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
