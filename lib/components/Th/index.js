var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  /* Reboot Scss*/\n  /* Centered by default, but left-align-ed to match the \'td\'s below. */\n  text-align: left;\n'], ['\n  ', '\n  /* Reboot Scss*/\n  /* Centered by default, but left-align-ed to match the \'td\'s below. */\n  text-align: left;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * A Table Header Cell
 */
import styled from 'styled-components';
import { getBackgroundUtilities } from '../../styled/utilities/background';

var Th = styled.th(_templateObject, getBackgroundUtilities());

export default Th;