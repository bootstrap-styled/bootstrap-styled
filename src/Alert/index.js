/**
 * Alert component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled, { withTheme } from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { alertVariant } from 'bootstrap-styled-mixins/lib/alert';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { createChainedFunction } from 'bootstrap-styled-utils';
import theme from './theme';
import Fade from '../Modal/Fade';
import Close from '../Close';

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  toggle: false,
  theme,
  uncontrolled: false,
  autoHideDuration: 0, // theme
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

const propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
  initializeIsOpen: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes),
  autoHideDuration: PropTypes.number,
  theme: PropTypes.object,
  uncontrolled: PropTypes.bool,
};

class AlertUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    // inner Alert state for uncontrolled
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
      toggle,
      onClick,
      children,
      onExited,
      transition,
      uncontrolled,
      ...attributes
    } = omit(this.props, ['theme', 'autoHideDuration']);

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': toggle || onClick }
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
        {(toggle || onClick) && <Close onDismiss={this.toggle} />}
        {children}
      </Fade>
    );
  }
}

/**
 * Alert link element
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

/** @component */
export default withTheme(Alert);
