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
var defaultProps = { theme: theme };

// eslint-disable-next-line no-class-assign
var MenuPushMini = styled(MenuPush).withConfig({
  displayName: 'MenuPushMini__MenuPushMini',
  componentId: 'MenuPushMini__MenuPushMini-1ujerh4'
})(['', ''], function (props) {
  return '\n\n    width: ' + props.theme['$menu-push-mini-width'] + ';\n    ' + transition(props.theme['$enable-transitions'], props.theme['$menu-transition-duration']) + '\n  \n    &.menu-left {\n      left:0;\n      transform: translate3d(-' + props.theme['$menu-push-mini-width'] + ',0,0);\n      opacity: 0;\n      &.active {\n        transform: translateX(0);\n        opacity: 1;\n      }\n      ' + mediaBreakpointUp('md', props.theme['$grid-breakpoints'], '\n          opacity: 1;\n          transform: translateX(0);\n          width: ' + props.theme['$menu-push-width'] + ';\n          &.active {\n            transform: translateX(0);\n            width: ' + props.theme['$menu-push-mini-width'] + ';\n          }\n        ') + '\n    }\n    &.menu-right {\n      right:0;\n      transform: translate3d(' + props.theme['$menu-push-mini-width'] + ',0,0);\n      &.active {\n        transform: translateX(0);\n      }\n      ' + mediaBreakpointUp('md', props.theme['$grid-breakpoints'], '\n          transform: translateX(0);\n          width: ' + props.theme['$menu-push-width'] + ';\n          &.active {\n            transform: translateX(0);\n            width: ' + props.theme['$menu-push-mini-width'] + ';\n          }\n        ') + '\n    }\n  ';
});

MenuPushMini.defaultProps = defaultProps;

export default MenuPushMini;