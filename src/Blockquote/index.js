/* eslint dot-notation: 'off' */

/**
 * Blockquote
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'blockquote',
  theme: {
    '$blockquote-small-color': '#636c72',
    '$blockquote-font-size': '1.25rem',
    '$blockquote-border-color': '#eceeef',
    '$blockquote-border-width': '.25rem',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$blockquote-small-color': PropTypes.string,
    '$blockquote-font-size': PropTypes.string,
    '$blockquote-border-color': PropTypes.string,
    '$blockquote-border-width': PropTypes.string,
  }),
  /** Toggles content to display on left or right. */
  reverse: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class BlockquoteUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  static propTypes = propTypes;

  render() {
    const {
      className,
      reverse,
      tag: Tag,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className, 'blockquote', {
          'blockquote-reverse': reverse,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

/**
 * A quoting blocks component. Wrap `<Blockquote />` around any html node or element as the quote.
 */
const Blockquote = styled(BlockquoteUnstyled)` 
  ${(props) => `
    &.blockquote {
      padding: ${props.theme['$spacer-halved']} ${props.theme['$spacer']};
      margin-bottom: ${props.theme['$spacer']};
      font-size: ${props.theme['$blockquote-font-size']};
      border-left: ${props.theme['$blockquote-border-width']} solid ${props.theme['$blockquote-border-color']};
      
      .blockquote-footer {
        display: block;
        font-size: 80%; 
        color: ${props.theme['$blockquote-small-color']};
        &::before {
          content: '\\2014 \\00A0';
        }
      }
    }

    &.blockquote-reverse {
      padding-right: ${props.theme['$spacer']};
      padding-left: 0;
      text-align: right;
      border-right: ${props.theme['$blockquote-border-width']} solid ${props.theme['$blockquote-border-color']};
      border-left: 0;
      
      .blockquote-footer {
        display: block;
        font-size: 80%; 
        color: ${props.theme['$blockquote-small-color']};
        &::before {
          content: "";
        }
        &::after {
          content: '\\00A0 \\2014';
        }
      }
    }
    
    /* Reboot from bootstrap v4 */
    margin: 0 0 1rem;
 `} 

`;

Blockquote.defaultProps = defaultProps;
Blockquote.propTypes = propTypes;

/** @component */
export default Blockquote;
