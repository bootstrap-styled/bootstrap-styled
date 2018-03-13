import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';


export const defaultProps = {
  tag: 'button',
  type: 'button',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<NavbarToggler />` component. */
  children: PropTypes.node,
  /** Value type of the component. */
  type: PropTypes.string,
  /** Toggles right CSS display. */
  right: PropTypes.bool,
  /** Toggles left CSS display. */
  left: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
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

  const classes = mapToCssModules(cn(
    className,
    'navbar-toggler',
    right && 'navbar-toggler-right',
    left && 'navbar-toggler-left'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children || navbarToggleIcon}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

/** @component */
export default NavbarToggler;
