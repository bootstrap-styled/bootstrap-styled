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


export const defaultProps = {
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    '$border-radius-lg': '.3rem',
    '$jumbotron-padding': '2rem',
    '$jumbotron-bg': '#eceeef',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Toggles disabled CSS style. */
  fluid: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$grid-breakpoints': PropTypes.object,
    '$border-radius-lg': PropTypes.string,
    '$jumbotron-padding': PropTypes.string,
    '$jumbotron-bg': PropTypes.string,
  }),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class JumbotronUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
/**
 * A classic `<Jumbotron />` component.
 * You can also add `Button Dropdown` and customize `Sizing`.
 */
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

Jumbotron.defaultProps = defaultProps;
Jumbotron.propTypes = propTypes;

/** @component */
export default Jumbotron;
