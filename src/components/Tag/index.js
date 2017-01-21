/* Tag (Text Format) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from '../../config';
import { hoverFocus } from '../../styled/mixins/hover';
import { borderRadius } from '../../styled/mixins/border-radius';
import { tagVariant } from '../../styled/mixins/tag';

const defaultProps = { theme };

class Tag extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <span className={cn(this.props.className, 'tag')}>
        {this.props.children}
      </span>
    );
  }
}

// eslint-disable-next-line no-class-assign
Tag = styled(Tag)`
  ${(props) => `
    
    /* Base class */
    /* Requires one of the contextual, color modifier classes for 'color' and */
    /* 'background-color'. */
    
    &.tag {
      display: inline-block;
      padding: ${props.theme['$tag-padding-y']} ${props.theme['$tag-padding-x']};
      font-size: ${props.theme['$tag-font-size']};
      font-weight: ${props.theme['$tag-font-weight']};
      line-height: 1;
      color: ${props.theme['$tag-color']};
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius'])}
    
      /* Empty tags collapse automatically */
      &:empty {
        display: none;
      }
    }
    
    
    /* scss-lint:disable QualifyingElement */
    /* Add hover effects, but only for links */
    &a {
      ${hoverFocus(props.theme['$enable-hover-media-query'], `
        color: ${props.theme['$tag-link-hover-color']};
        text-decoration: none;
        cursor: pointer;
      `)}
    }
    /* scss-lint:enable QualifyingElement */
    
    /* Pill tags */
    /* Make them extra rounded with a modifier to replace v3's badges. */
    
    &.tag-pill {
      padding-right: ${props.theme['$tag-pill-padding-x']};
      padding-left: ${props.theme['$tag-pill-padding-x']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$tag-pill-border-radius'])}
    }
    
    /* Colors */
    /* Contextual variations (linked tags get darker on :hover). */
    
    &.tag-default {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-default-bg'])}
    }     
    
    &.tag-primary {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-primary-bg'])}
    }
    
    &.tag-success {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-success-bg'])}
    }
    
    &.tag-info {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-info-bg'])}
    }
    
    &.tag-warning {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-warning-bg'])}
    }
    
    &.tag-danger {
      ${tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-danger-bg'])}
    }
  `}
`;

Tag.defaultProps = defaultProps;

export default Tag;
