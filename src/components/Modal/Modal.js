/* eslint-disable */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TransitionGroup from 'react-addons-transition-group';
import classNames from 'classnames';
import Fade from './Fade';

import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit,
} from './utils';


const defaultProps = {
  isOpen: false,
  backdrop: true,
  keyboard: true,
  zIndex: 1000,
};

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    size: PropTypes.string,
    toggle: PropTypes.func,
    keyboard: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    cssModule: PropTypes.object,
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  };

  constructor(props) {
    super(props);

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
    const sheet = window.document.styleSheets[0];
    sheet.insertRule('.modal-open { overflow: hidden; }', sheet.cssRules.length);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
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
    this.onExit();
  }

  onEnter() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  onExit() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  handleEscape(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  togglePortal() {
    if (this.props.isOpen) {
      this._focus = true;
      this.show();
    } else {
      this.hide();
    }
  }

  destroy() {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    const classes = document.body.className.replace('modal-open', '');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);
    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      this._dialog.parentNode.focus();
      this._focus = false;
    }
  }

  renderChildren() {
    const {
      className,
      wrapClassName,
      modalClassName,
      backdropClassName,
      contentClassName,
      cssModule,
      isOpen,
      size,
      backdrop,
      children,
      ...attributes
    } = omit(this.props, ['toggle', 'keyboard', 'onEnter', 'onExit', 'zIndex']);

    return (
      <TransitionGroup component="div" className={mapToCssModules(classNames(wrapClassName, className))}>
        {isOpen && (
          <Fade
            key="modal-dialog"
            onEnter={this.onEnter}
            onLeave={this.onExit}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            onClickCapture={this.handleBackdropClick}
            onKeyUp={this.handleEscape}
            className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
            style={{ display: 'block' }}
            tabIndex="-1"
          >
            <div
              className={mapToCssModules(classNames('modal-dialog', {
              [`modal-${size}`]: size,
              show: isOpen
              }))}
              role="document"
              ref={(c) => (this._dialog = c)}
              {...attributes}
            >
              <div className={ mapToCssModules(classNames('modal-content', contentClassName), cssModule)}>
                {children}
              </div>
            </div>
          </Fade>
        )}
        {isOpen && backdrop && (
          <Fade
            key="modal-backdrop"
            transitionAppearTimeout={150}
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
            className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
          />
        )}
      </TransitionGroup>
    );
  }

  render() {
    return null;
  }
}

// eslint-disable-next-line no-class-assign
Modal = styled(Modal)`

  & .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    
    &.fade {
      opacity: 0;
      transition: opacity .15s linear;
      &.show {
        opacity: 1;
      }
      .modal-dialog {
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
        transform: translateY(-25%);
      }
    }
    &.show {
      .modal-dialog {
        transform: translate(0);
      }
    }
  }
  
  & .modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
  }
  
  
  & .modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
  }
  
  & .modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eceeef;
  }
  
  & .modal-body {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 15px;
  }
  
  & .modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #eceeef;
  }
  
  & .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    &.fade {
      opacity: 0
    }
    &.show {
      opacity: .5;
    }
  }
  
  & .fade {
    opacity: 0;
    transition: opacity .15s linear;
    .show {
      opacity: 1;
    }
  }
  
  
`;


Modal.defaultProps = defaultProps;

export default Modal;
