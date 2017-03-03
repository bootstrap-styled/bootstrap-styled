import styled from 'styled-components';
import OffsetNav from './OffsetNav';
import { transition } from '../../styled/mixins/transition';

var OffsetNavSlide = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavSlide__OffsetNavSlide',
  componentId: 'OffsetNavSlide__OffsetNavSlide-ltrjhd'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    ' + transition(props.theme['$enable-transitions'], 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms') + '\n\n    &.menu-left {\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

export default OffsetNavSlide;