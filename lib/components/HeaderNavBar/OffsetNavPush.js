import styled from 'styled-components';
import OffsetNav from './OffsetNav';
import { transition } from '../../styled/mixins/transition';

var OffsetNavPush = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavPush__OffsetNavPush',
  componentId: 'OffsetNavPush__OffsetNavPush-v6j4jv'
})(['', ''], function (props) {
  return '\n    position: absolute;\n    top: 0;\n    ' + transition(props.theme['$enable-transitions'], 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms') + '\n\n    &.menu-left {\n      left: -' + props.theme['$menu-push-width'] + ';\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n    }\n    \n    &.menu-right {\n      right: -' + props.theme['$menu-push-width'] + ';\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n    }\n\n  ';
});

export default OffsetNavPush;