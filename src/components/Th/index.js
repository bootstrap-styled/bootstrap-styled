/**
 * A Table Header Cell
 */
import styled from 'styled-components';
import { getBackgroundUtilities } from '../../styled/utilities/background';

const Th = styled.th`
  ${getBackgroundUtilities()}
  /* Reboot Scss*/
  /* Centered by default, but left-align-ed to match the 'td's below. */
  text-align: left;
`;

export default Th;
