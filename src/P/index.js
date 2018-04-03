import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { typography } from 'bootstrap-styled-mixins/lib/typography';


export const defaultProps = {
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$font-size-h1': '2.5rem',
    '$font-size-h2': '2rem',
    '$font-size-h3': '1.75rem',
    '$font-size-h4': '1.5rem',
    '$font-size-h5': '1.25rem',
    '$font-size-h6': '1rem',
    '$headings-margin-bottom': '0.5rem',
    '$headings-font-family': 'inherit',
    '$headings-font-weight': '500',
    '$headings-line-height': '1.1',
    '$headings-color': 'inherit',
    '$display1-size': '6rem',
    '$display2-size': '5.5rem',
    '$display3-size': '4.5rem',
    '$display4-size': '3.5rem',
    '$display1-weight': '300',
    '$display2-weight': '300',
    '$display3-weight': '300',
    '$display4-weight': '300',
    '$display-line-height': '1.1',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300',
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />` component. */
  children: PropTypes.node,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'white',
    'muted',
    'gray-dark',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /** Toggles lead CSS style. */
  lead: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$grid-breakpoints': PropTypes.object,
    '$font-size-h1': PropTypes.string,
    '$font-size-h2': PropTypes.string,
    '$font-size-h3': PropTypes.string,
    '$font-size-h4': PropTypes.string,
    '$font-size-h5': PropTypes.string,
    '$font-size-h6': PropTypes.string,
    '$headings-margin-bottom': PropTypes.string,
    '$headings-font-family': PropTypes.string,
    '$headings-font-weight': PropTypes.string,
    '$headings-line-height': PropTypes.string,
    '$headings-color': PropTypes.string,
    '$display1-size': PropTypes.string,
    '$display2-size': PropTypes.string,
    '$display3-size': PropTypes.string,
    '$display4-size': PropTypes.string,
    '$display1-weight': PropTypes.string,
    '$display2-weight': PropTypes.string,
    '$display3-weight': PropTypes.string,
    '$display4-weight': PropTypes.string,
    '$display-line-height': PropTypes.string,
    '$lead-font-size': PropTypes.string,
    '$lead-font-weight': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class PUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const { className,
      color,
      children,
      cssModule,
      lead,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      lead ? 'lead' : false,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <p className={classes} {...attributes}>
        {children}
      </p>
    );
  }
}

const P = styled(PUnstyled)`
  ${(props) => `
    /* Type Scss */

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }
    
    &.h1{
      font-size: ${props.theme['$font-size-h1']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h2{
      font-size: ${props.theme['$font-size-h2']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h3{
      font-size: ${props.theme['$font-size-h3']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h4{
      font-size: ${props.theme['$font-size-h4']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h5{
      font-size: ${props.theme['$font-size-h5']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h6{
      font-size: ${props.theme['$font-size-h6']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    /* Reboot Scss */
    margin-top: 0;   
    margin-bottom: 1rem;
  `}
`;

/** @component */
export default P;
