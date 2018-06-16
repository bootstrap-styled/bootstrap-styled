import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { a } from 'bootstrap-styled-mixins/lib/a';
import bsTheme from '../theme';

export const defaultProps = {
  theme: bsTheme,
};

export default function composeLink(RouterLink) {
  class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
      /* eslint-disable react/no-unused-prop-types */
      className: PropTypes.string,
      to: PropTypes.string.isRequired,
      theme: PropTypes.object,
      /* eslint-enable react/no-unused-prop-types */
    }

    render() {
      const {
        className,
        to,
        ...attributes
      } = omit(this.props, ['theme']);
      return (
        <RouterLink className={className} to={to} {...attributes} />
      );
    }
  }

  // eslint-disable-next-line no-class-assign
  Link = styled(Link)`
    ${(props) => `
      ${a(
        props.theme['$link-color'],
        props.theme['$link-decoration'],
        props.theme['$link-hover-color'],
        props.theme['$link-hover-decoration'],
        props.theme['$enable-hover-media-query'],
      )}
    `}
  `;
  Link.defaultProps = defaultProps;
  return Link;
}
