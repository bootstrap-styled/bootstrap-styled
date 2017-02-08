/**
 * Alert component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import Close from '../Close';
import { alertVariant } from '../../styled/mixins/alert';
import { borderRadius } from '../../styled/mixins/border-radius';
import { srOnly } from '../../styled/mixins/screen-reader';

const defaultProps = {
  closeLabel: 'Close',
  theme,
};

class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    onDismiss: PropTypes.func,
    className: PropTypes.string,
    closeLabel: PropTypes.string,
  }

  render() {
    const { className, onDismiss, children, closeLabel } = this.props;

    return (
      <div
        className={cn(className, 'alert', {
          'alert-dismissible': !!onDismiss,
        })}
      >
        {!!onDismiss && <Close onDismiss={onDismiss} />}
        {children}
        {!!onDismiss && <Close sr-only onDismiss={onDismiss} closeLabel={closeLabel} />}
      </div>
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
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$alert-border-radius'])};
    }
    
    /* Headings for larger alerts */
    &.alert-heading {
      /* Specified to prevent conflicts of changing $headings-color */
      color: inherit;
    }
    
    /* Provide class for links that match alerts */
    & .alert-link { 
      font-weight: ${props.theme['$alert-link-font-weight']} 
    }
    
    /* Dismissible alerts
    Expand the right padding and account for the close button's positioning. */
    
    &.alert-dismissible {
      padding-right: ${props.theme['$alert-dismissible-padding-x']};
    
      /* Adjust close link position*/
      & .close {
        position: relative;
        top: -.125rem;
        right: -${props.theme['$alert-padding-x']};
        color: inherit;
      }
      
      & .sr-only {
        ${srOnly}
      }
    }
    /* Alternate styles
    Generate contextual modifier classes for colorizing the alert. */

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

export default Alert;

