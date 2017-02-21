/**
 * Nav Component
 *
 *
 */
import styled from 'styled-components';
import theme from 'theme';
import { nav } from '../../styled/mixins/nav';
import { breadcrumb } from '../../styled/mixins/breadcrumb';

const defaultProps = { theme };

// eslint-disable-next-line no-class-assign
const Nav = styled.nav`
  ${(props) => `
    ${nav(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$nav-link-padding'],
      props.theme['$nav-disabled-link-color'],
      props.theme['$cursor-disabled'],
      props.theme['$nav-tabs-border-width'],
      props.theme['$nav-tabs-border-color'],
      props.theme['$nav-tabs-border-radius'],
      props.theme['$nav-tabs-link-hover-border-color'],
      props.theme['$nav-tabs-active-link-hover-color'],
      props.theme['$nav-tabs-active-link-hover-bg'],
      props.theme['$nav-tabs-active-link-hover-border-color'],
      props.theme['$nav-pills-border-radius'],
      props.theme['$nav-pills-active-link-color'],
      props.theme['$nav-pills-active-link-bg'],
    )}
    ${breadcrumb(
      props.theme['$enable-rounded'],
      props.theme['$border-radius'],
      props.theme['$breadcrumb-padding-y'],
      props.theme['$breadcrumb-padding-x'],
      props.theme['$spacer-y'],
      props.theme['$breadcrumb-bg'],
      props.theme['$breadcrumb-item-padding'],
      props.theme['$breadcrumb-divider-color'],
      props.theme['$breadcrumb-divider'],
      props.theme['$breadcrumb-active-color']
    )}
  `}
`;

Nav.defaultProps = defaultProps;

export default Nav;
