/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
*/
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import MenuPush from './MenuPush';
const defaultProps = { theme };

// eslint-disable-next-line no-class-assign
const MenuPushSimple = styled(MenuPush)`
  ${(props) => `
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-push-transition-duration']
    )}
    
    &.menu-left {
      left:0;
      right: 0;
      transform: translate3d(-${props.theme['$menu-push-full-width']},0,0);
      ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          transform: translateX(0);
           width: ${props.theme['$menu-push-width']};

        `
      )}
      &.active {
        transform: translateX(0);
        ${mediaBreakpointUp(
          'sm',
          props.theme['$grid-breakpoints'],
          `
            transform: translateX(0);
            width: ${props.theme['$menu-push-width']};
          `
        )}
      }

    }
    
    &.menu-right {
      left:0;
      right:0;
      transform: translate3d(${props.theme['$menu-push-mini-width']},0,0);
      &.active {
        transform: translateX(0);
      }
    }
    
  `}
`;

MenuPushSimple.defaultProps = defaultProps;

export default MenuPushSimple;
