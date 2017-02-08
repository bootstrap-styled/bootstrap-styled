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
import theme from 'theme';

import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import MenuPush from './MenuPush';
const defaultProps = { theme };

// eslint-disable-next-line no-class-assign
const MenuPushMini = styled(MenuPush)`
  ${(props) => `

    width: ${props.theme['$menu-push-mini-width']};
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-push-transition-duration']
    )}
  
    &.menu-left {
      left:0;
      transform: translate3d(-${props.theme['$menu-push-mini-width']},0,0);
      opacity: 0;
      &.active {
        transform: translateX(0);
        opacity: 1;
      }
      ${mediaBreakpointUp(
        'md',
        props.theme['$grid-breakpoints'],
        `
          opacity: 1;
          transform: translateX(0);
          width: ${props.theme['$menu-push-width']};
         &.active {
            transform: translateX(0);
            width: ${props.theme['$menu-push-mini-width']};
          }
        `
      )}
    }
    &.menu-right {
      right:0;
      transform: translate3d(${props.theme['$menu-push-mini-width']},0,0);
      &.active {
        transform: translateX(0);
      }
      ${mediaBreakpointUp(
        'md',
        props.theme['$grid-breakpoints'],
        `
          transform: translateX(0);
          width: ${props.theme['$menu-push-width']};
          &.active {
            transform: translateX(0);
            width: ${props.theme['$menu-push-mini-width']};
          }
        `
      )}
    }
  `}
`;


MenuPushMini.defaultProps = defaultProps;

export default MenuPushMini;
