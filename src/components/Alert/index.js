/**
 * Alert component
 */


import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled, { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import themeBs from 'theme';
import Close from '../Close';
import { mapToCssModules } from '../../styled/utilities/tools';
import { alertVariant } from '../../styled/mixins/alert';
import { borderRadius } from '../../styled/mixins/border-radius';

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  theme: themeBs,
};

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);


class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    color: PropTypes.string,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    transitionAppearTimeout: PropTypes.number,
    transitionEnterTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number,
    theme: PropTypes.object,
  }

  state= {
    visible: true,
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  render() {
    const {
      theme, // eslint-disable-line
      className,
      cssModule,
      tag: Tag,
      color,
      isOpen,
      toggle,
      children,
      transitionAppearTimeout,
      transitionEnterTimeout,
      transitionLeaveTimeout,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': toggle }
    ), cssModule);

    const alert = (
      <Tag {...attributes} className={classes} role="alert">
        { toggle ?
          <Close aria-label="Close" onClick={toggle} />
          : null }
        { children }
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
        transitionAppear={transitionAppearTimeout > 0}
        transitionAppearTimeout={transitionAppearTimeout}
        transitionEnter={transitionEnterTimeout > 0}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeave={transitionLeaveTimeout > 0}
        transitionLeaveTimeout={transitionLeaveTimeout}
      >
        {isOpen ? alert : null}
      </ReactCSSTransitionGroup>
    );
  }
}

// eslint-disable-next-line no-class-assign
Alert = styled(Alert)`
  ${(props) => `
    /*
    Base styles
    */
    
    &.alert{
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

    &.alert-success{
      ${alertVariant(
        props.theme['$alert-success-bg'],
        props.theme['$alert-success-border'],
        props.theme['$alert-success-text'],
      )}    
    }
    &.alert-info{
      ${alertVariant(
        props.theme['$alert-info-bg'],
        props.theme['$alert-info-border'],
        props.theme['$alert-info-text'],
      )}
    } 
    &.alert-warning{
      ${alertVariant(
        props.theme['$alert-warning-bg'],
        props.theme['$alert-warning-border'],
        props.theme['$alert-warning-text'],
      )} 
    }
    &.alert-danger{
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

