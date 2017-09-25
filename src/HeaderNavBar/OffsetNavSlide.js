import styled from 'styled-components';
import { transition } from 'bootstrap-styled-mixins/lib/transition';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import OffsetNav from './OffsetNav';

const OffsetNavSlide = styled(OffsetNav)`
  ${(props) => `
    position: fixed;
    top: 0;
    bottom: 0;
    ${transition(
      props.theme['$enable-transitions'],
      props.theme['$menu-offset-nav-transition'],
    )}
    ${boxShadow(
      props.theme['$enable-shadows'],
      props.theme['$menu-offset-nav-box-shadow'],
    )}  
    &.menu-left {
      left: 0;
      transform: translateX(-100%);
      &.active {
        transform: translateX(0);
      }
    }
    
    &.menu-right {
      right: 0;
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
    }

  `}
`;


export default OffsetNavSlide;

