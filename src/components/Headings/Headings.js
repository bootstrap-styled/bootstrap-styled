import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';
import { typography } from '../../styled/mixins/typography';

const defaultProps = { theme: bsTheme };

class Headings extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    lead: PropTypes.bool,
    tag: PropTypes.string.isRequired,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      color,
      cssModule,
      lead,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          lead,
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}
// eslint-disable-next-line no-class-assign
Headings = styled(Headings)`
  ${(props) => `
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

Headings.defaultProps = defaultProps;

export default Headings;
