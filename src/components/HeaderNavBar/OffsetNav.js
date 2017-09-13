/**
 * Menu component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import bsTheme from '../../theme';
import Close from '../Close';
import { mapToCssModules } from '../../utils/tools';
import { ifThen } from '../../styled/mixins/conditional';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';

const defaultProps = {
  theme: bsTheme,
};

class OffsetNavUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    dismiss: PropTypes.func,
    menuClose: PropTypes.bool,
    showMenu: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    elementWidth: PropTypes.string,
    theme: PropTypes.object,
    offsetColor: PropTypes.string,
    'menu-right': PropTypes.bool,
    'animation-push': PropTypes.bool,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      active,
      dismiss,
      menuClose,
      offsetColor,
      cssModule,
      'menu-right': menuRight,
      ...attributes
    } = omit(this.props, ['theme', 'elementWidth', 'animation-push', 'showMenu']);

    const menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';

    const cssClasses = cn(className, menuDirectionClassNames, {
      [`bg-${offsetColor}`]: offsetColor,
    });

    return (
      <div
        className={mapToCssModules(cn(cssClasses, { active }), cssModule)}
        {...attributes}
      >
        {menuClose && <Close aria-label="Close" onDismiss={dismiss} />}
        {children}
      </div>
    );
  }
}

const OffsetNav = styled(OffsetNavUnstyled)`
  ${(props) => `
    width: ${props.elementWidth ? props.elementWidth : props.theme['$menu-push-width']};
    height: 100%;
    background-color: white;
    z-index: ${props.theme['$zindex-menu-push']};
    ${ifThen(
      props.showMenu,
      mediaBreakpointUp(
        props.showMenu,
        props.theme['$grid-breakpoints'],
        `position: absolute;
            top: 0;`
      )
    )}
  `}
`;

OffsetNav.defaultProps = defaultProps;

export default OffsetNav;
