/**
 * DropDown
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';
import onClickOutside from 'react-onclickoutside';

import Button from '../Button';
import { borderRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { navDivider } from '../../styled/mixins/nav-divider';
import { hoverFocus, plainHoverFocus } from '../../styled/mixins/hover';
import { buttonGroup } from '../../styled/utilities/buttonGroup';

const defaultProps = {
  type: 'link',
  button: { Button },
  buttonProps: {
    type: 'button',
    children: 'Dropdown',
    'dropdown-toggle': true,
  },
  theme,
};

class DropDown extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    dropdown: PropTypes.node.isRequired,
    button: PropTypes.any.isRequired,
    buttonProps: PropTypes.object.isRequired,
    className: PropTypes.string,
    'dropdown-split': PropTypes.bool,
    'dropdown-toggle': PropTypes.bool,
  };

  state = {
    dropped: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.tagName === 'A') {
      e.target.classList.toggle('active');
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
    const Btn = this.props.button;
    const { href, value, className, ...rest } = this.props.buttonProps;

    const dropdown = (
      <div className={this.props.className}>
        <Btn
          {...rest}
          className={cn(className, {
            'dropdown-toggle': this.props['dropdown-toggle'],
          })}
          href={href}
          onClick={this.handleClick}
        >
          {value}
        </Btn>
        <div
          className={cn({ 'dropdown-hide': !this.state.dropped })}
        >
          {this.props.dropdown}
        </div>
      </div>
    );

    if (this.props['dropdown-split']) {
      return (
        <div
          className={cn(this.props.className, {
            'dropdown-toggle-split': this.props['dropdown-split'],
          })}
        >
          <Btn
            {...rest}
            className={className}
          >
            {value}
          </Btn>
          <Btn
            {...rest}
            className={cn(className, 'dropdown-toggle')}
            href={href}
            onClick={this.handleClick}
          >
            <span className="sr-only"></span>
          </Btn>
          <div
            className={cn({
              'dropdown-hide': !this.state.dropped,
            })}
          >
            {this.props.dropdown}
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

    & .dropup {
      &.dropdown-toggle {
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
      padding: ${props.theme['$dropdown-padding-y']} 0 0 0;
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
      ${navDivider(props.theme['$spacer-y-half'], props.theme['$dropdown-divider-bg'])}
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

      &.active {
        ${plainHoverFocus(props.theme['$enable-hover-media-query'], `
          color: ${props.theme['$dropdown-link-active-color']};
          text-decoration: none;
          background-color: ${props.theme['$dropdown-link-active-bg']}
          text-decoration: none;
          outline: 0;
        `)}
      }

      &.disabled {

        ${plainHoverFocus(props.theme['$enable-hover-media-query'], `
          color: ${props.theme['$dropdown-link-disabled-color']};
        `)}

        /* Nuke hover/focus effects */
        ${hoverFocus(props.theme['$enable-hover-media-query'], `
          text-decoration: none;
          cursor: ${props.theme['$cursor-disabled']};
          background-color: transparent;
          background-image: none; /* Remove CSS gradient */
        `)}
      }
    }

    &.active {
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

    & .dropup,
    & .navbar-fixed-bottom .dropdown {
      /* Reverse the caret */
      & .caret {
        content: '';
        border-top: 0;
        border-bottom: ${props.theme['$caret-width']} solid;
      }

      /* Different positioning for bottom up menu */
      &+div>.dropdown-menu,
      .dropdown-menu {
        top: auto;
        bottom: 100%;
        margin-bottom: ${props.theme['$dropdown-margin-top']};
      }
    }
    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */
    ${buttonGroup()}

  `}
`;

DropDown.defaultProps = defaultProps;

export default DropDown;
