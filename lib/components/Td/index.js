var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * A Table cell
 */
import styled from 'styled-components';
import { getBackgroundUtilities } from '../../styled/utilities/background';

var Td = styled.td(_templateObject, getBackgroundUtilities());

export default Td;