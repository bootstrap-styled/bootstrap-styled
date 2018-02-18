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
import { makeTheme } from './theme';
import Fade from '../Modal/Fade';
import Close from '../Close';

class AlertUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    color: 'success',
    isOpen: true,
    tag: 'div',
    theme: makeTheme(),
    transition: {
      ...Fade.defaultProps,
      unmountOnExit: true,
    },
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    color: PropTypes.string,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    autoClose: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    transition: PropTypes.shape(Fade.propTypes),
    autoHideDuration: PropTypes.number,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  };

  state = {
    // Used to only render active snackbars.
    exited: false,
  };

  componentWillMount() {
    if (!this.props.isOpen) {
      this.setState({ exited: true });
    }
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.setAutoHideTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.setState({ exited: false });
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
  setAutoHideTimer = (autoHideDuration = null) => {
    if (this.props.autoHideDuration == null || !this.props.toggle) {
      return;
    }

    clearTimeout(this.timerAutoHide);

    this.timerAutoHide = setTimeout(() => {
      if (this.props.autoHideDuration != null && this.props.toggle) {
        this.props.toggle();
      } else if (this.props.autoHideDuration != null && !this.props.toggle) {
        this.props.autoClose();
      }
    }, autoHideDuration || this.props.autoHideDuration || 0);
  };

  timerAutoHide = null;

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
      children,
      onExited,
      transition,
      autoClose,
      ...attributes
    } = omit(this.props, ['theme', 'autoHideDuration']);

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': toggle }
    ), cssModule);

    if (!isOpen && this.state.exited) {
      return null;
    }

    const transitionProps = {
      in: isOpen,
      appear: true,
      onExited: createChainedFunction(this.handleExited, onExited),
    };

    return (
      <Fade {...attributes} {...transition} {...transitionProps} tag={Tag} className={classes} in={isOpen} role="alert">
        {toggle ?
          <Close onDismiss={toggle} />
          : null}
        {children}
      </Fade>
    );
  }
}

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

export default withTheme(Alert);

