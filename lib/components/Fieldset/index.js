var _templateObject = _taggedTemplateLiteral(['\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n'], ['\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import theme from 'theme';
var defaultProps = { theme: theme };

var Fieldset = styled.fieldset(_templateObject);

Fieldset.defaultProps = defaultProps;

export default Fieldset;