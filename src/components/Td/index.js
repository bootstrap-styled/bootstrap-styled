/**
 * A Table cell
 */
import styled from 'styled-components';
import { getBackgroundUtilities } from '../../styled/utilities/background';

const Td = styled.td`
  ${getBackgroundUtilities()}
`;

export default Td;
