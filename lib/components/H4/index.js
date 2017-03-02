/**
 * H4 Component
 *
 *
 */
import styled from 'styled-components';
import bsTheme from 'theme';
import { typography } from '../../styled/mixins/typography';
var defaultProps = { theme: bsTheme };

var H4 = styled.h4.withConfig({
  displayName: 'H4__H4',
  componentId: 'H4__H4-1k03x8h'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h4'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H4.defaultProps = defaultProps;

export default H4;