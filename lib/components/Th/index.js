/**
 * A Table Header Cell
 */
import styled from 'styled-components';
import { getBackgroundUtilities } from '../../styled/utilities/background';

var Th = styled.th.withConfig({
  displayName: 'Th__Th',
  componentId: 'Th__Th-ifc1bh'
})(['', '/* Reboot Scss*//* Centered by default, but left-align-ed to match the \'td\'s below. */text-align: left;'], getBackgroundUtilities());

export default Th;