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
import themeBlockquote from './theme';

const defaultProps = {
  tag: 'blockquote',
  theme: themeBlockquote,
};

class BlockquoteUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    tag: PropTypes.string,
    reverse: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      reverse,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={cn(className, 'blockquote', {
          'blockquote-reverse': reverse,
        })}
        {...attributes}
      />
    );
  }
}

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

export default Blockquote;
