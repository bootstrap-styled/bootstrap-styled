/**
 * A Pagination
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { pagination } from 'bootstrap-styled-mixins/lib/paginations';


export const defaultProps = {
  tag: 'ul',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$pagination-padding-x': '.75rem',
    '$pagination-padding-y': '.5rem',
    '$pagination-padding-x-sm': '.5rem',
    '$pagination-padding-y-sm': '.25rem',
    '$pagination-padding-x-lg': '1.5rem',
    '$pagination-padding-y-lg': '.75rem',
    '$pagination-line-height': '1.25',
    '$pagination-color': '#0275d8',
    '$pagination-bg': '#fff',
    '$pagination-border-width': '1px',
    '$pagination-border-color': '#ddd',
    '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$pagination-hover-bg': '#eceeef',
    '$pagination-hover-border': '#ddd',
    '$pagination-active-color': '#fff',
    '$pagination-active-bg': '#0275d8',
    '$pagination-active-border': '#0275d8',
    '$pagination-disabled-color': '#636c72',
    '$pagination-disabled-bg': '#fff',
    '$pagination-disabled-border': '#ddd',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Pagination />` component. */
  children: PropTypes.node,
  /** Pagination use default size base and can use different size such as: */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),
  /** Replace the default component tag by the one specified. Can be: */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
    '$pagination-padding-x': PropTypes.string,
    '$pagination-padding-y': PropTypes.string,
    '$pagination-padding-x-sm': PropTypes.string,
    '$pagination-padding-y-sm': PropTypes.string,
    '$pagination-padding-x-lg': PropTypes.string,
    '$pagination-padding-y-lg': PropTypes.string,
    '$pagination-line-height': PropTypes.string,
    '$pagination-color': PropTypes.string,
    '$pagination-bg': PropTypes.string,
    '$pagination-border-width': PropTypes.string,
    '$pagination-border-color': PropTypes.string,
    '$pagination-hover-color': PropTypes.string,
    '$pagination-hover-bg': PropTypes.string,
    '$pagination-hover-border': PropTypes.string,
    '$pagination-active-color': PropTypes.string,
    '$pagination-active-bg': PropTypes.string,
    '$pagination-active-border': PropTypes.string,
    '$pagination-disabled-color': PropTypes.string,
    '$pagination-disabled-bg': PropTypes.string,
    '$pagination-disabled-border': PropTypes.string,
  }),
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'white',
    'muted',
    'gray-dark',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class PaginationUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      size,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      'pagination',
      {
        [`pagination-${size}`]: !!size,
      }
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

const Pagination = styled(PaginationUnstyled)`
  ${(props) => `
    ${pagination(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$border-radius'],
      props.theme['$pagination-active-color'],
      props.theme['$pagination-active-bg'],
      props.theme['$pagination-active-border'],
      props.theme['$pagination-disabled-color'],
      props.theme['$cursor-disabled'],
      props.theme['$pagination-disabled-bg'],
      props.theme['$pagination-disabled-border'],
      props.theme['$pagination-padding-y'],
      props.theme['$pagination-padding-x'],
      props.theme['$pagination-line-height'],
      props.theme['$pagination-color'],
      props.theme['$pagination-bg'],
      props.theme['$pagination-border-width'],
      props.theme['$pagination-border-color'],
      props.theme['$pagination-hover-color'],
      props.theme['$pagination-hover-bg'],
      props.theme['$pagination-hover-border'],
      props.theme['$pagination-padding-y-lg'],
      props.theme['$pagination-padding-x-lg'],
      props.theme['$font-size-lg'],
      props.theme['$line-height-lg'],
      props.theme['$border-radius-lg'],
      props.theme['$pagination-padding-y-sm'],
      props.theme['$pagination-padding-x-sm'],
      props.theme['$font-size-sm'],
      props.theme['$line-height-sm'],
      props.theme['$border-radius-sm'],
    )}
  `}
`;

Pagination.defaultProps = defaultProps;
Pagination.propTypes = propTypes;

/** @component */
export default Pagination;
