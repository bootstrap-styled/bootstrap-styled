/**
 * Dropdown
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import { navDivider } from 'bootstrap-styled-mixins/lib/nav-divider';
import { hoverFocus } from 'bootstrap-styled-mixins/lib/hover';
import { buttonGroup } from 'bootstrap-styled-mixins/lib/buttonGroup';
import { ifThen } from 'bootstrap-styled-mixins/lib/conditional';
import DropdownMenu from './DropdownMenu';
import TetherContent from '../TetherContent';


const defaultTetherConfig = {
  classes: { element: 'dropdown', enabled: 'show' },
  classPrefix: 'bs-tether',
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' },
  ],
};

export const defaultProps = {
  isOpen: false,
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-gradients': false,
    '$enable-hover-media-query': false,
    '$spacer-y': '1rem',
    '$border-width': '1px',
    '$font-size-sm': '.875rem',
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$zindex-dropdown-backdrop': '990',
    '$zindex-dropdown': '1000',
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$caret-width': '.3em',
    '$line-height-lg': '1.6',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-y-lg': '.75rem',
    '$dropdown-min-width': '10rem',
    '$dropdown-padding-y': '.5rem',
    '$dropdown-margin-top': '.125rem',
    '$dropdown-bg': '#fff',
    '$dropdown-border-color': '',
    '$dropdown-border-width': '',
    '$dropdown-divider-bg': '',
    '$dropdown-box-shadow': '0 .5rem 1rem rgba(#000,.175)',
    '$dropdown-link-color': '',
    '$dropdown-link-hover-color': '',
    '$dropdown-link-hover-bg': '',
    '$dropdown-link-active-color': '',
    '$dropdown-link-active-bg': '',
    '$dropdown-link-disabled-color': '',
    '$dropdown-item-padding-x': '1.5rem',
    '$dropdown-header-color': '',
    '$input-btn-border-width': '', // For form controls and buttons
    '$cursor-disabled': 'not-allowed',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': '',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-border-radius-lg': '',
    '$btn-border-radius-sm': '',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$input-height-lg': '',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** Toggles dropdown direction. */
  dropup: PropTypes.bool,
  /** Toggles group CSS style. */
  group: PropTypes.bool,
  /** Toggles dropdown visibility. */
  isOpen: PropTypes.bool,
  /** Size variables. Can be small or large: */
  size: PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  /** Tether position value. Can be: */
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /** Call specified function when on toggle action is triggered. */
  toggle: PropTypes.func,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$enable-gradients': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$spacer-y': PropTypes.string,
    '$border-width': PropTypes.string,
    '$font-size-sm': PropTypes.string,
    '$font-weight-normal': PropTypes.string,
    '$font-size-base': PropTypes.string,
    '$font-size-lg': PropTypes.string,
    '$zindex-dropdown-backdrop': PropTypes.string,
    '$zindex-dropdown': PropTypes.string,
    '$component-active-color': PropTypes.string,
    '$component-active-bg': PropTypes.string,
    '$caret-width': PropTypes.string,
    '$line-height-lg': PropTypes.string,
    '$border-radius-lg': PropTypes.string,
    '$border-radius-sm': PropTypes.string,
    '$input-padding-y-lg': PropTypes.string,
    '$dropdown-min-width': PropTypes.string,
    '$dropdown-padding-y': PropTypes.string,
    '$dropdown-margin-top': PropTypes.string,
    '$dropdown-bg': PropTypes.string,
    '$dropdown-border-color': PropTypes.string,
    '$dropdown-border-width': PropTypes.string,
    '$dropdown-divider-bg': PropTypes.string,
    '$dropdown-box-shadow': PropTypes.string,
    '$dropdown-link-color': PropTypes.string,
    '$dropdown-link-hover-color': PropTypes.string,
    '$dropdown-link-hover-bg': PropTypes.string,
    '$dropdown-link-active-color': PropTypes.string,
    '$dropdown-link-active-bg': PropTypes.string,
    '$dropdown-link-disabled-color': PropTypes.string,
    '$dropdown-item-padding-x': PropTypes.string,
    '$dropdown-header-color': PropTypes.string,
    '$input-btn-border-width': PropTypes.string, // For form controls and buttons
    '$cursor-disabled': PropTypes.string,
    '$btn-padding-x': PropTypes.string,
    '$btn-active-box-shadow': PropTypes.string,
    '$btn-padding-x-lg': PropTypes.string,
    '$btn-padding-y-lg': PropTypes.string,
    '$btn-border-radius-lg': PropTypes.string,
    '$btn-border-radius-sm': PropTypes.string,
    '$btn-padding-x-sm': PropTypes.string,
    '$btn-padding-y-sm': PropTypes.string,
    '$input-height-lg': PropTypes.string,
  }),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class DropdownUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  static childContextTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      isOpen: this.props.isOpen,
      toggle: this.props.toggle,
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getTetherTarget() {
    const container = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    return container.querySelector('[data-toggle="dropdown"]');
  }

  getTetherConfig = (childProps) => {
    const target = () => this.getTetherTarget();
    let vElementAttach = 'top';
    let hElementAttach = 'left';
    let vTargetAttach = 'bottom';
    let hTargetAttach = 'left';

    if (childProps.right) {
      hElementAttach = 'right';
      hTargetAttach = 'right';
    }

    if (this.props.dropup) {
      vElementAttach = 'bottom';
      vTargetAttach = 'top';
    }

    return {
      ...defaultTetherConfig,
      attachment: vElementAttach + ' ' + hElementAttach,  // eslint-disable-line prefer-template
      targetAttachment: vTargetAttach + ' ' + hTargetAttach,  // eslint-disable-line prefer-template
      target,
      ...this.props.tether,
    };
  }

  addEvents = () => {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick = (e) => {
    const container = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.toggle();
  }

  handleProps() {
    if (this.props.tether) {
      return;
    }

    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderChildren() {
    const { tether, children, ...attrs } = this.props;
    attrs.toggle = this.toggle;

    return React.Children.map(React.Children.toArray(children), (child) => {
      if (tether && child.type === DropdownMenu) {
        const tetherConfig = this.getTetherConfig(child.props);
        return (
          <TetherContent {...attrs} tether={tetherConfig}>{child}</TetherContent>
        );
      }

      return child;
    });
  }

  render() {
    const {
      className,
      cssModule,
      dropup,
      group,
      size,
      tag: Tag,
      isOpen,
      ...attributes
    } = omit(this.props, ['toggle', 'tether', 'theme']);

    const classes = mapToCssModules(cn(
      className,
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        show: isOpen,
        dropup,
      }
    ), cssModule);

    return (
      <Tag
        {...attributes}
        className={classes}
      >
        {this.renderChildren()}
      </Tag>
    );
  }
}
/**
 * Use our `<Dropdown />` blocks with dismissing menu.
 * Customize it with `<DropdownToggle />` with `caret` attribute for display icon and `<DropdownItem />` with `header`, `disabled` and `divider` attributes for customize menu.
 */
const Dropdown = styled(DropdownUnstyled)`
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
      display: none; // none by default, but block on "open" of the menu
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
        ${ifThen(props.theme['$enable-gradients'],
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

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

/** @component */
export default Dropdown;
