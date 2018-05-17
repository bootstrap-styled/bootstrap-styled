import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules';
import unitUtils from 'bootstrap-styled-utils/lib/unitUtils';
import { ifThen } from 'bootstrap-styled-mixins';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';

export const defaultProps = {
  active: false,
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': true,
    $white: '#fff',
    '$drawer-bg': '#fff',
    '$drawer-transition': 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    '$drawer-box-shadow': 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    '$drawer-border-radius': '0px',
    '$drawer-zindex': '1030',
    '$drawer-docked-width': '55px',
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Toggles open Panel. */
  active: PropTypes.bool.isRequired,
  /** Place Drawer at the top of screen with it's set height */
  top: PropTypes.string,
  /** Place Drawer at the right of screen with it's set width */
  right: PropTypes.string,
  /** Place Drawer at the bottom of screen with it's set height */
  bottom: PropTypes.string,
  /** Place Drawer at the left of screen with it's set width */
  left: PropTypes.string,
  /** Toggles to make Drawer part of layout rather than float above. */
  docked: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$drawer-bg': PropTypes.string,
    '$drawer-transition': PropTypes.string,
    '$drawer-box-shadow': PropTypes.string,
    '$drawer-border-radius': PropTypes.string,
    '$drawer-zindex': PropTypes.string,
    '$drawer-docked-width': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class DrawerUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      active,
      top,
      right,
      bottom,
      left,
      docked,
      cssModule,
      ...props
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(className, !docked ? 'drawer' : 'drawer-docked', {
      active,
      'drawer-top': top,
      'drawer-right': right,
      'drawer-bottom': bottom,
      'drawer-left': left,
    }, cssModule));

    return (
      <div className={classes} {...props} />
    );
  }
}


const Drawer = styled(DrawerUnstyled)`
  ${(props) => `
    &.drawer {
      background-color: ${props.theme['$drawer-bg']};
      transition: ${props.theme['$drawer-transition']};
      position: fixed;
      flex: 1 0 auto;
      z-index: ${props.theme['$drawer-zindex']};
      overflow-y: auto;
      outline: none;
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$drawer-border-radius'],
      )}
      ${boxShadow(
        props.theme['$enable-shadows'],
        props.theme['$drawer-box-shadow'],
      )}
      &.drawer-top {
        ${ifThen(
          props.top,
          `
            left: 0;
            top: 0;
            width: 100%;
            height: ${props.top};
            transform: translate(0px, -${props.top && unitUtils.math.addition(props.top, 4)});
            &.active {
              transform: translate(0px, 0px);
            }
          `
        )}
      }
      &.drawer-right {
        ${ifThen(
          props.right,
          `
            bottom: 0;
            right: 0;
            height: 100%;
            width: ${props.right};
            transform: translate(${props.right && unitUtils.math.addition(props.right, 4)}, 0px);
            &.active {
              transform: translate(0px, 0px);
            }
          `
        )}
      }
      &.drawer-bottom {
        ${ifThen(
          props.bottom,
          `
            left: 0;
            bottom: 0;
            width: 100%;
            height: ${props.bottom};
            transform: translate(0px, ${props.bottom && unitUtils.math.addition(props.bottom, 4)});
            &.active {
              transform: translate(0px, 0px);
            }
          `
        )}
      }
      &.drawer-left {
        ${ifThen(
          props.left,
          `
            bottom: 0;
            left: 0;
            height: 100%;
            width: ${props.left};
            transform: translate(-${props.left && unitUtils.math.addition(props.left, 4)}, 0px);
            &.active {
              transform: translate(0px, 0px);
            }
          `
        )}
      }
    }
    &.drawer-docked { 
      flex: 0 0 auto;
      overflow: hidden;
        &.drawer-top {
          border-bottom: 1px solid grey;
        }
        &.drawer-right {
          border-left: 1px solid grey;
        }
        &.drawer-bottom {
          border-top: 1px solid grey;
        }
        &.drawer-left {
  
          ${ifThen(
            props.left,
            `
            border-right: 1px solid grey;  
            width: ${props.theme['$drawer-docked-width']};
            transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
            &.active {
              width: ${props.left};
            }
            `
          )}
        }
    }
  `}
`;

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

/** @component */
export default Drawer;
