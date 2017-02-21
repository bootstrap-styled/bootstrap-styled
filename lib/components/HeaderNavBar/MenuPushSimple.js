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
var MenuPushSimple = styled(MenuPush).withConfig({
  displayName: 'MenuPushSimple__MenuPushSimple',
  componentId: 'MenuPushSimple__MenuPushSimple-19gcb51'
})(['', ''], function (props) {
  return '\n    ' + transition(props.theme['$enable-transitions'], props.theme['$menu-transition-duration']) + '\n    \n    &.menu-left {\n      left:0;\n      right: 0;\n      transform: translate3d(-' + props.theme['$menu-push-full-width'] + ',0,0);\n      ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n          transform: translateX(0);\n           width: ' + props.theme['$menu-push-width'] + ';\n\n        ') + '\n      &.active {\n        transform: translateX(0);\n        ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n            transform: translateX(0);\n            width: ' + props.theme['$menu-push-width'] + ';\n          ') + '\n      }\n\n    }\n    \n    &.menu-right {\n      left:0;\n      right:0;\n      transform: translate3d(' + props.theme['$menu-push-mini-width'] + ',0,0);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n  ';
});

MenuPushSimple.defaultProps = defaultProps;

export default MenuPushSimple;