/**
 * A Breadcrumb
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { clearfix } from 'bootstrap-styled-mixins/lib/clearfix';
import themeBreadcrumb from './theme';

const defaultProps = {
  theme: themeBreadcrumb,
  tag: 'ol',
};

class BreadcrumbUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
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
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className, 'breadcrumb'), cssModule)}
        {...attributes}
      />
    );
  }
}

const Breadcrumb = styled(BreadcrumbUnstyled)`
  ${(props) => `
    &.breadcrumb {
      padding: ${props.theme['$breadcrumb-padding-y']} ${props.theme['$breadcrumb-padding-x']};
      margin-bottom: ${props.theme['$spacer-y']};
      list-style: none;
      background-color: ${props.theme['$breadcrumb-bg']};
 
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$border-radius']
      )}
            
      ${clearfix()}
    }

    & .breadcrumb-item {
      float: left;
    
      /* The separator between breadcrumbs (by default, a forward-slash: "/") */
      + .breadcrumb-item::before {
        display: inline-block; /* Suppress underlining of the separator in modern browsers */
        padding-right: ${props.theme['$breadcrumb-item-padding']};
        padding-left: ${props.theme['$breadcrumb-item-padding']};
        color: ${props.theme['$breadcrumb-divider-color']};
        content: ${props.theme['$breadcrumb-divider']};
      }
  
      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built
       without 'ul's. The '::before' pseudo-element generates an element
       *within* the .breadcrumb-item and thereby inherits the 'text-decoration'.
      
       To trick IE into suppressing the underline, we give the pseudo-element an
       underline and then immediately remove it.
      */
      
      + .breadcrumb-item:hover::before {
        text-decoration: underline;
      }
      + .breadcrumb-item:hover::before {
        text-decoration: none;
      }
    
      &.active {
        color: ${props.theme['$breadcrumb-active-color']};
      }
    }
  `}
`;

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
