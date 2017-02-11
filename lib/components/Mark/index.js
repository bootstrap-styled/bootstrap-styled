var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Mark component
 */

import styled from 'styled-components';
import theme from 'theme';

var defaultProps = { theme: theme };

var Mark = styled.mark(_templateObject, function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});

Mark.defaultProps = defaultProps;

export default Mark;