import styled from 'styled-components';
import OffsetNav from './OffsetNav';
import { transition } from '../../styled/mixins/transition';

const OffsetNavPush = styled(OffsetNav)`
  ${(props) => `
    position: absolute;
    top: 0;
    ${transition(
      props.theme['$enable-transitions'],
      'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    )}

    &.menu-left {
      left: -${props.theme['$menu-push-width']};
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
    }
    
    &.menu-right {
      right: -${props.theme['$menu-push-width']};
      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
    }

  `}
`;


export default OffsetNavPush;

