/**
 * Ordered List Tabs and Pills
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import styled from 'styled-components';
import theme from 'theme';
import { nav } from '../../styled/mixins/nav';
import { breadcrumb } from '../../styled/mixins/breadcrumb';
import { listUnstyled, listInline, listInlineItem } from '../../styled/mixins/lists';

var defaultProps = { theme: theme };

var Ol = styled.ol.withConfig({
  displayName: 'Ol__Ol',
  componentId: 'Ol__Ol-ipte6v'
})([' ', ''], function (props) {
  return '\n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + breadcrumb(props.theme['$enable-rounded'], props.theme['$border-radius'], props.theme['$breadcrumb-padding-y'], props.theme['$breadcrumb-padding-x'], props.theme['$spacer-y'], props.theme['$breadcrumb-bg'], props.theme['$breadcrumb-item-padding'], props.theme['$breadcrumb-divider-color'], props.theme['$breadcrumb-divider'], props.theme['$breadcrumb-active-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + listUnstyled() + '\n    }\n\n    &.list-inline {\n      ' + listInline() + '\n    }\n\n    &.list-inline-item {\n      ' + listInlineItem(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});

Ol.defaultProps = defaultProps;

export default Ol;