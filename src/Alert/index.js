/**
 * Alert component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { alertVariant } from 'bootstrap-styled-mixins/lib/alert';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { createChainedFunction } from 'bootstrap-styled-utils';
import Fade, { defaultProps as FadeDefaultProps } from '../Modal/Fade';
import Close from '../Close';

export const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  theme: {
    '$alert-padding-x': '1.25rem',
    '$alert-padding-y': '.75rem',
    '$alert-margin-bottom': '1rem',
    '$alert-border-radius': '.25rem',
    '$alert-link-font-weight': 'bold',
    '$alert-border-width': '1px',
    '$alert-success-bg': '#dff0d8',
    '$alert-success-text': '#3c763d',
    '$alert-success-border': '#3c763d',
    '$alert-info-bg': '#d9edf7',
    '$alert-info-text': '#31708f',
    '$alert-info-border': '#31708f',
    '$alert-warning-bg': '#fcf8e3',
    '$alert-warning-text': '#8a6d3b',
    '$alert-warning-border': '#8a6d3b',
    '$alert-danger-bg': '#f2dede',
    '$alert-danger-text': '#a94442',
    '$alert-danger-border': '#a94442',
    '$enable-rounded': true,
  },
  uncontrolled: false,
  autoHideDuration: null,
  transition: {
    ...FadeDefaultProps,
    unmountOnExit: true,
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Alert />` component. */
  children: PropTypes.node,
  /** Color variables. */
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /**
   * Toggles dismissal of an alert.
   */
  isOpen: PropTypes.bool,
  /**
   * @ignore
   * Used for Close component.
   */
  toggle: PropTypes.func,
  /**
   * Call specified function when `on click` event is triggered.
   */
  onClick: PropTypes.func,
  /**
   * Toggles onClick event.
   */
  initializeIsOpen: PropTypes.func,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Transition used to dismiss alert.
   */
  transition: PropTypes.shape({
    FadeProptypes: PropTypes.object,
    unmountOnExit: PropTypes.bool,
  }),
  /**
   * Transition's duration used to dismiss alert automatically.
   */
  autoHideDuration: PropTypes.number,
  /** Theme variables. */
  theme: PropTypes.shape({
    '$alert-padding-x': PropTypes.string,
    '$alert-padding-y': PropTypes.string,
    '$alert-margin-bottom': PropTypes.string,
    '$alert-border-radius': PropTypes.string,
    '$alert-link-font-weight': PropTypes.string,
    '$alert-border-width': PropTypes.string,
    '$alert-success-bg': PropTypes.string,
    '$alert-success-text': PropTypes.string,
    '$alert-success-border': PropTypes.string,
    '$alert-info-bg': PropTypes.string,
    '$alert-info-text': PropTypes.string,
    '$alert-info-border': PropTypes.string,
    '$alert-warning-bg': PropTypes.string,
    '$alert-warning-text': PropTypes.string,
    '$alert-warning-border': PropTypes.string,
    '$alert-danger-bg': PropTypes.string,
    '$alert-danger-text': PropTypes.string,
    '$alert-danger-border': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
  }),
  /**
   * Toggles inner alert state so that you don't have to write your own state or closing function.
   */
  uncontrolled: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class AlertUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    uncontrolledOpen: true,
    exited: false,
  };

  componentWillMount() {
    this.initializeIsOpen(this.props);
    if (this.props.uncontrolled) {
      if (this.state.uncontrolledOpen) {
        this.setState({ exited: true });
      }
      return;
    }
    if (!this.props.isOpen) {
      this.setState({ exited: true });
    }
  }
  /* eslint-disable no-console */
  componentDidMount() {
    if (this.props.autoHideDuration) {
      if (this.props.onClick) {
        console.warn('You cannot make an Alert auto-hide when using an onClick function. Use the auto-hide props with the uncontrolled props!');
        return;
      }
      this.setAutoHideTimer();
    }
  }
  /* eslint-enable no-console */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.setState({ exited: false });
    }
    if (nextProps.isOpen !== this.props.isOpen) {
      this.initializeIsOpen(nextProps);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.setAutoHideTimer();
      } else {
        clearTimeout(this.timerAutoHide);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHide);
  }

  // Timer that controls delay before snackbar auto hides
  setAutoHideTimer = (autoHideDuration) => {
    if (!this.props.autoHideDuration) {
      return;
    }

    clearTimeout(this.timerAutoHide);

    this.timerAutoHide = setTimeout(() => {
      if (this.props.autoHideDuration) {
        this.toggle();
      }
    }, autoHideDuration || this.props.autoHideDuration);
  };

  timerAutoHide = null;

  initializeIsOpen = (props) => this.setState({ uncontrolledOpen: props.isOpen });

  toggle = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    } else {
      this.setState({ uncontrolledOpen: false });
    }
  };

  handleExited = () => {
    this.setState({ exited: true });
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      color,
      isOpen,
      onClick,
      children,
      onExited,
      transition,
      uncontrolled,
      ...attributes
    } = omit(this.props, ['theme', 'autoHideDuration', 'toggle']);

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': uncontrolled || onClick }
    ), cssModule);

    if (!isOpen && this.state.exited) {
      return null;
    }

    const transitionProps = {
      in: uncontrolled ? this.state.uncontrolledOpen : isOpen,
      appear: true,
      onExited: createChainedFunction(this.handleExited, onExited),
    };

    return (
      <Fade
        tag={Tag}
        className={classes}
        in={uncontrolled ? this.state.uncontrolledOpen : isOpen}
        role="alert"
        {...attributes}
        {...transition}
        {...transitionProps}
      >
        {(uncontrolled || onClick) && <Close onDismiss={this.toggle} />}
        {children}
      </Fade>
    );
  }
}

/**
 * Alert component.
 */
const Alert = styled(AlertUnstyled)`
  ${(props) => `
    /*
    Base styles
    */
    
    &.alert {
      padding: ${props.theme['$alert-padding-y']} ${props.theme['$alert-padding-x']};
      margin-bottom: ${props.theme['$alert-margin-bottom']};
      border: ${props.theme['$alert-border-width']} solid transparent;
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$alert-border-radius'])}
    }
    
    /* Headings for larger alerts */
    &.alert-heading {
      /* Specified to prevent conflicts of changing $headings-color */
      color: inherit;
    }
    
    /* Provide class for links that match alerts */
    & .alert-link { 
      font-weight: ${props.theme['$alert-link-font-weight']};
    }
    
    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */
    
    &.alert-dismissible {    
      /* Adjust close link position */
      & .close {
        position: relative;
        top: -${props.theme['$alert-padding-y']};
        right: -${props.theme['$alert-padding-x']};
        padding: ${props.theme['$alert-padding-y']} ${props.theme['$alert-padding-x']};
        color: inherit;
      }
    }
    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */

    &.alert-success {
      ${alertVariant(
  props.theme['$alert-success-bg'],
  props.theme['$alert-success-border'],
  props.theme['$alert-success-text'],
)}    
    }
    &.alert-info {
      ${alertVariant(
  props.theme['$alert-info-bg'],
  props.theme['$alert-info-border'],
  props.theme['$alert-info-text'],
)}
    } 
    &.alert-warning {
      ${alertVariant(
  props.theme['$alert-warning-bg'],
  props.theme['$alert-warning-border'],
  props.theme['$alert-warning-text'],
)} 
    }
    &.alert-danger {
      ${alertVariant(
  props.theme['$alert-danger-bg'],
  props.theme['$alert-danger-border'],
  props.theme['$alert-danger-text'],
)} 
    }
  `}
`;

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

/** @component */
export default Alert;
