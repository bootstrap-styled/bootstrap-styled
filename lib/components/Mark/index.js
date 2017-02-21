/**
 * Mark component
 */

import styled from 'styled-components';
import theme from 'theme';

var defaultProps = { theme: theme };

var Mark = styled.mark.withConfig({
  displayName: 'Mark__Mark',
  componentId: 'Mark__Mark-q8339q'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});

Mark.defaultProps = defaultProps;

export default Mark;