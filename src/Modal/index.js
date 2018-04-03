/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
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
import Fade, { propTypes as FadePropType, defaultProps as FadeDefaultProps } from './Fade';
import { makeTheme } from './theme';

const FadePropTypes = PropTypes.shape(FadePropType);
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({

  }),
  /** Toggles opened CSS style. */
  isOpen: PropTypes.bool,
  /** Toggles auto focus CSS style. */
  autoFocus: PropTypes.bool,
  /** Modal use default size base and can use different size such as: */
  size: PropTypes.oneOf([
    'sm',
    'lg',
    '',
  ]),
  /** Call specified function when on toggle action is triggered. */
  toggle: PropTypes.func,
  /** Toggles keyboard events. */
  keyboard: PropTypes.bool,
  /** Define role with specified one. */
  role: PropTypes.string,
  /** Define labelledBy with specified one. */
  labelledBy: PropTypes.string,
  /** Toggles backdrop action. */
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static']),
  ]),
  /** Call specified function when entering modal is triggered. */
  onEnter: PropTypes.func,
  /** Call specified function when exiting modal is triggered. */
  onExit: PropTypes.func,
  /** Call specified function when opened modal is triggered. */
  onOpened: PropTypes.func,
  /** Call specified function when closed modal is triggered. */
  onClosed: PropTypes.func,
  /** Specified node element will be passed as children of `<Modal />`. */
  children: PropTypes.node,
  /** Define document's className with specified one. */
  documentClassName: PropTypes.string,
  /** Define modal's className with specified one. */
  modalClassName: PropTypes.string,
  /** Define backdrop's className with specified one. */
  backdropClassName: PropTypes.string,
  /** Define content's className with specified one. */
  contentClassName: PropTypes.string,
  /** Toggles fade transition. */
  fade: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
  /** Define z-index with specified one. */
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Define backdrop transition with specified one. */
  backdropTransition: FadePropTypes,
  /** Define modal transition with specified one. */
  modalTransition: FadePropTypes,
};

export const defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 2000,
  theme: makeTheme(),
  fade: true,
  onOpened: null,
  onClosed: null,
  modalTransition: {
    timeout: 300,
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: 150, // uses standard fade transition
  },
};

class ModalUnstyled extends React.Component {

  static defaultProps = defaultProps;
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  constructor(props) {
    super(props);
    this.originalBodyPadding = null;


    this.state = {
      isOpen: props.isOpen,
    };

    if (props.isOpen) {
      this.init();
    }
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }

    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen && !this.state.isOpen) {
      this.init();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
  }


  componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }
    if (this.state.isOpen) {
      this.destroy();
    }
    this._isMounted = false;
  }

  onOpened = (node, isAppearing) => {
    if (this.props.onOpened) {
      this.props.onOpened();
    }
    if (this.props.modalTransition.onEntered) {
      this.props.modalTransition.onEntered(node, isAppearing);
    }
  }

  onClosed = (node) => {
    // so all methods get called before it is unmounted
    if (this.props.onClosed) {
      this.props.onClosed();
    }
    if (this.props.modalTransition.onEntered) {
      this.props.modalTransition.onExited(node);
    }
    this.destroy();

    if (this._isMounted) {
      this.setState({ isOpen: false });
    }
  }

  setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  }

  handleBackdropClick = (e) => {
    e.stopPropagation();
    if (!this.props.isOpen || this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleEscape = (e) => {
    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  destroy = () => {
    document.body.removeChild(this._element);
    this._element = null;

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )overflow( |$)/, ' ');
    document.body.className = mapToCssModules(cn(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  init() {
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

  render() {
    if (this.state.isOpen) {
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
        onClick: this.handleBackdropClick,
        onKeyUp: this.handleEscape,
        style: { display: 'block' },
        'aria-labelledby': labelledBy,
        role,
        tabIndex: '-1',
      };

      const hasTransition = this.props.fade;
      const modalTransition = {
        ...FadeDefaultProps,
        ...this.props.modalTransition,
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0,
      };
      const backdropTransition = {
        ...FadeDefaultProps,
        ...this.props.backdropTransition,
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0,
      };

      return (
        <Portal node={this._element}>
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
        </Portal>
      );
    }

    return null;
  }
}
/**
 * Modal element
 */
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

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

/** @component */
export default Modal;
