import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { typography } from 'bootstrap-styled-mixins/lib/typography';
import { makeTheme } from './theme';


class PUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    color: PropTypes.string,
    lead: PropTypes.bool,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

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

export default P;
