/**
 * A Jumbotron (Slider)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Color from 'color';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { mediaBreakpointUp } from 'bootstrap-styled-mixins/lib/breakpoints';
import { makeTheme } from './theme';


class JumbotronUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'div',
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    cssModule: PropTypes.object,
    fluid: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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

const Jumbotron = styled(JumbotronUnstyled)`
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

export default Jumbotron;
