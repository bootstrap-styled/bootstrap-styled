import styled from 'styled-components';
import { transition } from 'bootstrap-styled-mixins/lib/transition';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import OffsetNav from './OffsetNav';

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

