var _templateObject = _taggedTemplateLiteral(['\n  ', '  \n'], ['\n  ', '  \n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import theme from 'theme';
import { navbar } from '../../styled/utilities/navbar';

var defaultProps = { theme: theme };

var Header = styled.header(_templateObject, function (props) {
  return '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-dark-active-color'], props.theme['$navbar-dark-color'], props.theme['$navbar-dark-hover-color'], props.theme['$navbar-dark-toggler-bg'], props.theme['$navbar-dark-toggler-border']) + '\n  ';
});

Header.defaultProps = defaultProps;

export default Header;