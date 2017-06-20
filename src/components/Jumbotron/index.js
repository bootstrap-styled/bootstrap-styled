/**
 * A Jumbotron (Slider)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Color from 'color';
import omit from 'lodash.omit';
import bsTheme from '../../theme';
import { mapToCssModules } from '../../utils/tools';
import { borderRadius } from '../../styled/mixins/border-radius';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';

const defaultProps = {
  theme: bsTheme,
  tag: 'div',
};

class Jumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      fluid,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'jumbotron',
      fluid ? 'jumbotron-fluid' : false
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Jumbotron = styled(Jumbotron)`
  ${(props) => `
    &.jumbotron {
      padding: ${props.theme['$jumbotron-padding']} calc(${props.theme['$jumbotron-padding']} / 2);
      margin-bottom: ${props.theme['$jumbotron-padding']};
      background-color: ${props.theme['$jumbotron-bg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$border-radius-lg']
      )}
    
      ${mediaBreakpointUp('sm',
        props.theme['$grid-breakpoints'],
        `padding: calc(${props.theme['$jumbotron-padding']} * 2) ${props.theme['$jumbotron-padding']};`
      )}  
    }

    & .jumbotron-hr {
      border-top-color: ${Color(props.theme['$jumbotron-bg']).darken(0.1).toString()};
    }
    
    &.jumbotron-fluid {
      padding-right: 0;
      padding-left: 0;
      ${borderRadius(
        props.theme['$enable-rounded'],
        '0'
      )}
    }
  `}
`;

Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
