/* A Caption (Box) */

import styled from 'styled-components';
import theme from 'theme';
var defaultProps = { theme: theme };

var Caption = styled.caption.withConfig({
  displayName: 'Caption__Caption',
  componentId: 'Caption__Caption-12w9sir'
})(['', ''], function (props) {
  return '\n    padding-top: ' + props.theme['$table-cell-padding'] + ';\n    padding-bottom: ' + props.theme['$table-cell-padding'] + ';\n    color: ' + props.theme['$text-muted'] + ';\n    text-align: left;\n    caption-side: top;\n  ';
});

Caption.defaultProps = defaultProps;

export default Caption;