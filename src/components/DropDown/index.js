/**
 * DropDown
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import onClickOutside from 'react-onclickoutside';
import bsTheme from 'theme';
import Button from '../Button';
import { borderRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { navDivider } from '../../styled/mixins/nav-divider';
import { hoverFocus } from '../../styled/mixins/hover';
import { buttonGroup } from '../../styled/mixins/buttonGroup';
import { ifThen } from '../../styled/mixins/conditional';

const defaultProps = {
  toggler: {
    component: Button,
    text: 'Dropdown',
  },
  theme: bsTheme,
};

class DropDown extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
    'dropdown-split': PropTypes.bool,
    toggler: PropTypes.shape({
      component: PropTypes.component,
      className: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  };

  state = {
    dropped: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.tagName === 'A') {
      e.target.classList.toggle('show');
    }

    this.setState({
      dropped: !this.state.dropped,
    });
  }

  closeMenu = () => {
    this.setState({
      dropped: false,
    });
  }

  render() {
    const { className, children, theme, toggler } = this.props; // eslint-disable-line no-unused-vars
    const { component: Toggler, className: classNameToggler, text: textToggler, ...restToggler } = toggler;
    const { dropped } = this.state;

    const dropdown = (
      <div className={className}>
        <Toggler
          className={cn(classNameToggler, 'dropdown-toggle')}
          onClick={this.handleClick}
          {...restToggler}
        >
          {textToggler}
        </Toggler>
        <div className={cn({ 'dropdown-hide': !dropped })}>
          {children}
        </div>
      </div>
    );

    if (this.props['dropdown-split']) {
      return (
        <div className={cn(className, 'btn-group')}>
          <Toggler className={classNameToggler} {...restToggler}>
            {textToggler}
          </Toggler>
          <Toggler
            className={cn(classNameToggler, 'dropdown-toggle', 'dropdown-toggle-split')}
            onClick={this.handleClick}
            {...restToggler}
          >
            <span className="sr-only"></span>
          </Toggler>
          <div className={cn({ 'dropdown-hide': !dropped })}>
            {children}
          </div>
        </div>
      );
    }
    return dropdown;
  }
}

// eslint-disable-next-line no-class-assign
DropDown = onClickOutside(DropDown, {
  handleClickOutside(instance) {
    return instance.closeMenu;
  },
});

// eslint-disable-next-line no-class-assign
DropDown = styled(DropDown)`
  ${(props) => `

    &.dropup,
    &.dropdown {
      position: relative;
    }

    & .dropdown-hide {
      display: none;
    }
    
    & .dropdown-toggle {
      /* Generate the caret automatically */
      &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: ${props.theme['$caret-width']};
        vertical-align: middle;
        content: '';
        border-top: ${props.theme['$caret-width']} solid;
        border-right: ${props.theme['$caret-width']} solid transparent;
        border-left: ${props.theme['$caret-width']} solid transparent;
      }

      /* Prevent the focus on the dropdown toggle when closing dropdowns */
      &:focus {
        outline: 0;
      }
    }

    &.dropup {
      .dropdown-toggle {
        &::after {
          border-top: 0;
          border-bottom: ${props.theme['$caret-width']} solid;
        }
      }
    }

    & .dropdown-menu {
      clear: left;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: ${props.theme['$zindex-dropdown']};
      display: block; /* none by default, but block on 'open' of the menu */
      float: left;
      min-width: ${props.theme['$dropdown-min-width']};
      padding: ${props.theme['$dropdown-padding-y']} 0;
      margin: ${props.theme['$dropdown-margin-top']} 0; /* override default ul */
      font-size: ${props.theme['$font-size-base']};
      color: ${props.theme['$body-color']};
      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */
      list-style: none;
      background-color: ${props.theme['$dropdown-bg']};
      background-clip: padding-box;
      border: ${props.theme['$dropdown-border-width']} solid ${props.theme['$dropdown-border-color']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius'])}
      ${boxShadow(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow'])}
    }

    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */
    & .dropdown-divider {
      ${navDivider(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg'])}
    }

    & .dropdown-item {
      display: block;
      width: 100%; /* For <button>s */
      padding: 3px ${props.theme['$dropdown-item-padding-x']};
      clear: both;
      font-weight: ${props.theme['$font-weight-normal']};
      color: ${props.theme['$dropdown-link-color']};
      text-align: inherit; /* For <button>s */
      white-space: nowrap; /* prevent links from randomly breaking onto new lines */
      background: none; /* For <button>s */
      border: 0; /* For <button>s */

      ${hoverFocus(props.theme['$enable-hover-media-query'], `
        color: ${props.theme['$dropdown-link-hover-color']};
        text-decoration: none;
        background-color: ${props.theme['$dropdown-link-hover-bg']}
      `)}

      &.active,
      &:active {
        color: ${props.theme['$dropdown-link-active-color']};
        text-decoration: none;
        background-color: ${props.theme['$dropdown-link-active-bg']}
      }

      &.disabled,
      &:disabled{
        color: ${props.theme['$dropdown-link-disabled-color']};
        cursor: ${props.theme['$cursor-disabled']};
        background-color: transparent;
        ${ifThen(props.theme['$enabled-gradients'],
          'background-image: none; /* Remove CSS gradient */'
        )}
      }
    }

    &.show {
      /* show the menu */
      &>.dropdown-menu {
        display: block;
      }

      & > a {
        outline: 0;
      }
    }


    /* Menu positioning */

    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*
    /* menu with the parent. */
    & .dropdown-menu-right {
      right: 0;
      left: auto; /* Reset the default from .dropdown-menu */
    }

    & .dropdown-menu-left {
      right: auto;
      left: 0;
    }

    /* Dropdown section headers */
    & .dropdown-header {
      display: block;
      padding: ${props.theme['$dropdown-padding-y']} ${props.theme['$dropdown-item-padding-x']};
      margin-bottom: 0; /* for use with heading elements */
      font-size: ${props.theme['$font-size-sm']};
      color: ${props.theme['$dropdown-header-color']};
      white-space: nowrap; /* as with > li > a */
    }
    /* Dropdown section footers */
    & .dropdown-footer {
      display: block;
      padding: ${props.theme['$dropdown-padding-y']} ${props.theme['$dropdown-item-padding-x']};
      margin-bottom: 0; /* for use with heading elements */
      font-size: ${props.theme['$font-size-sm']};
      color: ${props.theme['$dropdown-header-color']};
      white-space: nowrap; /* as with > li > a */
    }
    

    /* Backdrop to catch body clicks on mobile, etc. */
    & .dropdown-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${props.theme['$zindex-dropdown-backdrop']};
    }

    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */

    /* Just add .dropup after the standard .dropdown class and you're set. */
    /* TODO: abstract this so that the navbar fixed styles are not placed here? */

    &.dropup {
      .dropdown-menu {
        top: auto;
        bottom: 100%;
        margin-bottom: ${props.theme['$dropdown-margin-top']};
      }
    }
        
    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */
    ${buttonGroup(
      props.theme['$enable-shadows'],
      props.theme['$enable-rounded'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-toolbar-margin'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm']
    )}
  `}
`;

DropDown.defaultProps = defaultProps;
export default DropDown;
