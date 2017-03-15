import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';
import { typography } from '../../styled/mixins/typography';

const defaultProps = { theme: bsTheme };

class H2 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
    color: PropTypes.string,
    lead: PropTypes.bool,
    cssModule: PropTypes.object,
  }

  render() {
    const {
      className,
      color,
      theme,  // eslint-disable-line no-unused-vars
      children,
      cssModule,
      lead,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      lead ? 'lead' : false,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <h2 className={classes} {...attributes}>
        {children}
      </h2>
    );
  }
}
// eslint-disable-next-line no-class-assign
H2 = styled(H2)`
  ${(props) => `

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

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H2.defaultProps = defaultProps;

export default H2;
