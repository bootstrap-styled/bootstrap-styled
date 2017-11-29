/* Badge (Text Format) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { hoverFocus } from 'bootstrap-styled-mixins/lib/hover';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { badgeVariant } from 'bootstrap-styled-mixins/lib/badge';
import { makeTheme } from './theme';

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span',
  theme: makeTheme(),
};

class BadgeUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    color: PropTypes.string,
    pill: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      color,
      pill,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className, 'badge', {
          'badge-pill': pill,
          [`badge-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

const Badge = styled(BadgeUnstyled)`
  ${(props) => `
    
    /* Base class */
    /* Requires one of the contextual, color modifier classes for 'color' and */
    /* 'background-color'. */
    
    &.badge {
      display: inline-block;
      padding: ${props.theme['$badge-padding-y']} ${props.theme['$badge-padding-x']};
      font-size: ${props.theme['$badge-font-size']};
      font-weight: ${props.theme['$badge-font-weight']};
      line-height: 1;
      color: ${props.theme['$badge-color']};
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
        color: ${props.theme['$badge-link-hover-color']};
        text-decoration: none;
        cursor: pointer;
      `)}
    }
    /* scss-lint:enable QualifyingElement */
    
    /* Pill tags */
    /* Make them extra rounded with a modifier to replace v3s badges. */
    
    &.badge-pill {
      padding-right: ${props.theme['$badge-pill-padding-x']};
      padding-left: ${props.theme['$badge-pill-padding-x']};
      ${borderRadius(props.theme['$enable-rounded'], props.theme['$badge-pill-border-radius'])}
    }
    
    /* Colors */
    /* Contextual variations (linked tags get darker on :hover). */
    
    &.badge-default {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-default-bg'])}
    }     
    
    &.badge-primary {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-primary-bg'])}
    }
    
    &.badge-success {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-success-bg'])}
    }
    
    &.badge-info {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-info-bg'])}
    }
    
    &.badge-warning {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-warning-bg'])}
    }
    
    &.badge-danger {
      ${badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-danger-bg'])}
    }
  `}
`;

Badge.defaultProps = defaultProps;

export default Badge;
