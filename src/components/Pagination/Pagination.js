/**
 * A Breadcrumb
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';
import { pagination } from '../../styled/mixins/paginations';

const defaultProps = {
  theme: bsTheme,
  tag: 'ul',
};

class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      size,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className, 'pagination', {
          [`pagination-${size}`]: !!size,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Pagination = styled(Pagination)`
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

export default Pagination;
