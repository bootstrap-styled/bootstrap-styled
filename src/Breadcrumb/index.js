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

export const defaultProps = {
  tag: 'ol',
  theme: {
    '$breadcrumb-padding-y': '.75rem',
    '$breadcrumb-padding-x': '1rem',
    '$breadcrumb-item-padding': '.5rem',
    '$breadcrumb-bg': '#eceeef',
    '$breadcrumb-divider-color': '#636c72',
    '$breadcrumb-active-color': '#636c72',
    '$breadcrumb-divider': '"/"',
    '$enable-rounded': false,
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
    '$breadcrumb-padding-y': PropTypes.string,
    '$breadcrumb-padding-x': PropTypes.string,
    '$breadcrumb-item-padding': PropTypes.string,
    '$breadcrumb-bg': PropTypes.string,
    '$breadcrumb-divider-color': PropTypes.string,
    '$breadcrumb-active-color': PropTypes.string,
    '$breadcrumb-divider': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class BreadcrumbUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

/**
 * Use our **default** `Breadcrumb` blocks, to emphasize part of your page.
 * You can also use another `tag` without list markup.
 */
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
Breadcrumb.propTypes = propTypes;

/** @component */
export default Breadcrumb;
