/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
} from 'bootstrap-styled-utils/lib/tools';
import mapToCssModules from 'map-to-css-modules';
import { transition } from 'bootstrap-styled-mixins/lib/transition';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';
import { fade } from 'bootstrap-styled-mixins/lib//utilities/transition';
import rebootUtils from 'bootstrap-styled-mixins/lib/utilities/reboot';
import Fade from './Fade';
import { makeTheme } from './theme';

function noop() { }

const FadePropTypes = PropTypes.shape(Fade.propTypes);


class ModalUnstyled extends React.Component {

  static propTypes = {
    theme: PropTypes.object,
    isOpen: PropTypes.bool,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
    toggle: PropTypes.func,
    keyboard: PropTypes.bool,
    role: PropTypes.string,
    labelledBy: PropTypes.string,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static']),
    ]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    documentClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    backdropTransition: FadePropTypes,
    modalTransition: FadePropTypes,
  };

  static defaultProps = {
    isOpen: false,
    autoFocus: true,
    role: 'dialog',
    backdrop: true,
    keyboard: true,
    zIndex: 2000,
    theme: makeTheme(),
    fade: true,
    onOpened: noop,
    onClosed: noop,
    modalTransition: {
      timeout: 300,
    },
    backdropTransition: {
      mountOnEnter: true,
      timeout: 150, // uses standard fade transition
    },
  };

  constructor(props) {
    super(props);

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
    }
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // handle portal events/dom updates
      this.togglePortal();
    } else if (this._element) {
      // rerender portal
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  onOpened = (node, isAppearing) => {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed = (node) => {
    // so all methods get called before it is unmounted
    setTimeout(() => this.destroy(), 0);
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);
  }

  handleEscape = (e) => {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick = (e) => {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  togglePortal = () => {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
    } else {
      this.hide();
    }
  }

  destroy = () => {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )overflow( |$)/, ' ');
    document.body.className = mapToCssModules(cn(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    if (this._dialog) {
      if (this.props.toggle) {
        this.props.toggle(true);
      }
      return;
    }
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = mapToCssModules(cn(
      classes,
      'overflow'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    const attributes = omit(this.props, [
      'theme',
      'isOpen',
      'autoFocus',
      'size',
      'toggle',
      'keyboard',
      'role',
      'labelledBy',
      'backdrop',
      'onEnter',
      'onExit',
      'onOpened',
      'onClosed',
      'children',
      'className',
      'documentClassName',
      'modalClassName',
      'backdropClassName',
      'contentClassName',
      'fade',
      'cssModule',
      'zIndex',
      'backdropTransition',
      'modalTransition',
    ]);

    return (
      <div
        className={mapToCssModules(cn('modal-dialog', this.props.documentClassName, {
          [`modal-${this.props.size}`]: this.props.size,
        }), this.props.cssModule)}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
        {...attributes}
      >
        <div
          className={mapToCssModules(
            cn('modal-content', this.props.contentClassName),
            this.props.cssModule
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
      this._focus = false;
    }
  }

  renderChildren() {
    const {
      modalClassName,
      backdropClassName,
      cssModule,
      isOpen,
      backdrop,
      role,
      labelledBy,
    } = this.props;

    const modalAttributes = {
      onClickCapture: this.handleBackdropClick,
      onKeyUp: this.handleEscape,
      style: { display: 'block' },
      'aria-labelledby': labelledBy,
      role,
      tabIndex: '-1',
    };

    const hasTransition = this.props.fade;
    const modalTransition = {
      ...Fade.defaultProps,
      ...this.props.modalTransition,
      baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
      timeout: hasTransition ? this.props.modalTransition.timeout : 0,
    };
    const backdropTransition = {
      ...Fade.defaultProps,
      ...this.props.backdropTransition,
      baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
      timeout: hasTransition ? this.props.backdropTransition.timeout : 0,
    };
    return (
      <div className={mapToCssModules(this.props.className)}>
        <Fade
          {...modalAttributes}
          {...modalTransition}
          in={isOpen}
          onEntered={this.onOpened}
          onExited={this.onClosed}
          cssModule={cssModule}
          className={mapToCssModules(cn('modal', modalClassName), cssModule)}
        >
          {this.renderModalDialog()}
        </Fade>
        <Fade
          {...backdropTransition}
          in={isOpen && !!backdrop}
          cssModule={cssModule}
          className={mapToCssModules(cn('modal-backdrop', backdropClassName), cssModule)}
        />
      </div>
    );
  }

  render() {
    return null;
  }
}

const Modal = styled(ModalUnstyled)`
  ${(props) => `
    & .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${props.theme['$zindex-modal']};
      display: none;
      outline: 0;
      overflow-x: hidden;
      overflow-y: auto;
      
      ${fade(props.theme['$enable-transitions'], props.theme['$transition-fade'])}
      &.fade {
        .modal-dialog {
          ${transition(props.theme['$enable-transitions'], props.theme['$modal-transition'])}
          transform: translate(0, -25%);
        }
      }
      &.show {
        .modal-dialog {
          transform: translate(0, 0);
        }
      }
    }
    
    & .modal-dialog {
      position: relative;
      width: auto;
      margin: ${props.theme['$modal-dialog-margin']};
      ${rebootUtils.body(
        props.theme['$font-family-base'],
        props.theme['$font-size-base'],
        props.theme['$font-weight-base'],
        props.theme['$line-height-base'],
        props.theme['$body-color'],
        props.theme['$body-bg'],
      )}
    }
    
    
    & .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${props.theme['$modal-content-bg']};
      background-clip: padding-box;
      border: ${props.theme['$modal-content-border-width']} solid ${props.theme['$modal-content-border-color']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-lg'])}
      ${boxShadow(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow'])}
      outline: 0;
    }
    
    & .modal-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${props.theme['$zindex-modal-backdrop']};
      background-color: ${props.theme['$modal-backdrop-bg']};
      &.fade {
        opacity: 0;
        ${transition(props.theme['$enable-transitions'], props.theme['$transition-fade'])};
      }
      &.show {
        opacity: ${props.theme['$modal-backdrop-opacity']};
      }
    }
      
        
    & .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${props.theme['$modal-header-padding']};
      border-bottom: ${props.theme['$modal-header-border-width']} solid ${props.theme['$modal-header-border-color']};
    }
    
    & .modal-title {
      margin-bottom: 0;
      line-height: ${props.theme['$modal-title-line-height']};
    }
    
    & .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: ${props.theme['$modal-inner-padding']};
    }
    
    & .modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: ${props.theme['$modal-inner-padding']};
      border-top: ${props.theme['$modal-footer-border-width']} solid ${props.theme['$modal-footer-border-color']};
      // Easily place margin between footer elements
      > :not(:first-child) { margin-left: .25rem; }
      > :not(:last-child) { margin-right: .25rem; }
    }
    

  
    // Scale up the modal
    ${mediaBreakpointUp('sm', props.theme['$grid-breakpoints'],
      `
        & .modal-dialog {
          max-width: ${props.theme['$modal-md']};
          margin: ${props.theme['$modal-dialog-sm-up-margin-y']} auto;
        }
      
        & .modal-content {
          ${boxShadow(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow'])}
        }
      
        & .modal-sm {
          max-width: ${props.theme['$modal-sm']};
        }
      `
    )}
  

    ${mediaBreakpointUp('lg', props.theme['$grid-breakpoints'],
      `
        & .modal-lg {
           max-width:  ${props.theme['$modal-lg']}; 
         }
      `
    )}
  `}
`;

export default Modal;
