/**
 * Alert component
 */


import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled, { withTheme } from 'styled-components';
import themeBs from 'theme';
import Close from '../Close';
import { mapToCssModules } from '../../styled/utilities/tools';
import { alertVariant } from '../../styled/mixins/alert';
import { borderRadius } from '../../styled/mixins/border-radius';

const defaultProps = {
  color: 'success',
  tag: 'div',
  closeLabel: 'Close',
  theme: themeBs,
};

// const FirstChild = ({ children }) => (
//   React.Children.toArray(children)[0] || null
// );


class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    color: PropTypes.string,
    close: PropTypes.bool,
    closeLabel: PropTypes.string,
    dismissed: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    theme: PropTypes.object,
  }

  state = {
    dismissed: false,
  }

  componentWillMount = () => {
    const { dismissed } = this.props;
    if (dismissed) {
      this.setState({
        dismissed,
      });
    }
  }

  regAnimationDuration = new RegExp(/(\.\d+)s/); // eg: [0] = .2s [1] = .2, assuming we only use animation shorter than 1 sec

  handleDisappearing = (alertElement) => {
    const { theme } = this.props;
    let animationDurationMs = 0;

    if (theme['$enable-transition']) {
      const animationDurationS = theme['$transition-fade'].match(this.regAnimationDuration)[1];
      animationDurationMs = parseFloat(animationDurationS) * 1000;
    }

    setTimeout(() => {
      alertElement.classList.add('d-none');
    }, animationDurationMs);
  }

  handleDismiss = (e) => {
    this.setState({
      dismissed: true,
    });

    const target = e.target;
    let alertElement = target.parentElement;
    while (!alertElement.classList.contains('alert-dismissible')) {
      alertElement = alertElement.parentElement;
    }
    this.handleDisappearing(alertElement);
  }

  render() {
    const {
      theme, // eslint-disable-line
      dismissed: unused, // eslint-disable-line
      close,
      closeLabel,
      className,
      cssModule,
      tag: Tag,
      color,
      children,
      ...rest }
      = this.props;

    const { dismissed } = this.state;

    const classes = mapToCssModules(cn(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': close },
      { fade: close },
      { show: close && !dismissed },
    ), cssModule);

    return (
      <Tag
        className={classes}
        role="alert"
        {...rest}
      >
        {close && <Close onDismiss={this.handleDismiss} />}
        { children }
        {close && <Close sr-only onDismiss={this.handleDismiss} closeLabel={closeLabel} />}
      </Tag>
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

