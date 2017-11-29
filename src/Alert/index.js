/**
 * Alert component
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled, { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { alertVariant } from 'bootstrap-styled-mixins/lib/alert';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import themeAlert from './theme';
import Close from '../Close';

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  theme: themeAlert,
};

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);


class AlertUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    color: PropTypes.string,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    transitionAppear: PropTypes.number,
    transitionEnter: PropTypes.number,
    transitionLeave: PropTypes.number,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      color,
      isOpen,
      toggle,
      children,
      transitionAppear,
      transitionEnter,
      transitionLeave,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': toggle }
    ), cssModule);

    const alert = (
      <Tag {...attributes} className={classes} role="alert">
        {toggle && <Close onDismiss={toggle} />}
        {children}
      </Tag>
    );

    return (
      <ReactCSSTransitionGroup
        component={FirstChild}
        transitionName={{
          appear: 'fade',
          appearActive: 'show',
          enter: 'fade',
          enterActive: 'show',
          leave: 'fade',
          leaveActive: 'out',
        }}
        transitionAppear={transitionAppear > 0}
        transitionAppearTimeout={transitionAppear}
        transitionEnter={transitionEnter > 0}
        transitionEnterTimeout={transitionEnter}
        transitionLeave={transitionLeave > 0}
        transitionLeaveTimeout={transitionLeave}
      >
        {isOpen ? alert : null}
      </ReactCSSTransitionGroup>
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

Alert.defaultProps = defaultProps;

export default withTheme(Alert);

