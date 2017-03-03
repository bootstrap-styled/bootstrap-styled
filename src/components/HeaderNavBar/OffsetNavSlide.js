import styled from 'styled-components';
import OffsetNav from './OffsetNav';
import { transition } from '../../styled/mixins/transition';

const OffsetNavSlide = styled(OffsetNav)`
  ${(props) => `
    position: fixed;
    top: 0;
    ${transition(
      props.theme['$enable-transitions'],
      'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    )}

    &.menu-left {
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
      transform: translateX(-100%);
      &.active {
        transform: translateX(0);
      }
    }
    
    &.menu-right {
      right: 0;
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
    }

  `}
`;


export default OffsetNavSlide;

