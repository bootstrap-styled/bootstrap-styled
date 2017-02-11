var _templateObject = _taggedTemplateLiteral(['\n  touch-action: manipulation;\n  line-height: inherit;\n  /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n  resize: vertical;\n'], ['\n  touch-action: manipulation;\n  line-height: inherit;\n  /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n  resize: vertical;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* A Textarea (Box) */

/**
 * A Textarea tag
 */
import styled from 'styled-components';

var Textarea = styled.textarea(_templateObject);

export default Textarea;