import styled from 'styled-components';
import OffsetNav from './OffsetNav';
import { transition } from '../../styled/mixins/transition';
import { boxShadow } from '../../styled/mixins/box-shadow';

const OffsetNavPush = styled(OffsetNav)`
  ${(props) => `
    position: fixed;
    top: 0;

    ${boxShadow(
      props.theme['$enable-shadows'],
      props.theme['$menu-offset-nav-box-shadow'],
    )}    

    &.menu-left {
      left: -${props.theme['$menu-push-width']};
      ${transition(
        props.theme['$enable-transitions'],
        props.theme['$menu-offset-nav-transition'],
      )}
    }
    
    &.menu-right {
      right: 0px;
      transform: translateX(100%);
      ${transition(
        props.theme['$enable-transitions'],
        props.theme['$menu-offset-nav-transition'],
      )}
    }
  `}
`;


export default OffsetNavPush;

