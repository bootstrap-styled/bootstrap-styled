import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';
import { typography } from '../../styled/mixins/typography';

const defaultProps = { theme: bsTheme };

class H4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node,
    lead: PropTypes.bool,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
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
      <h4 className={classes} {...attributes}>
        {children}
      </h4>
    );
  }
}
// eslint-disable-next-line no-class-assign
H4 = styled(H4)`
  ${(props) => `
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

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H4.defaultProps = defaultProps;

export default H4;
