/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { a } from '../../styled/utilities/a';

const defaultProps = {
  theme,
};

export default function composeLink(RouterLink) {
  class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
      className: PropTypes.string,
      to: PropTypes.string.isRequired,
      theme: PropTypes.object,
      children: PropTypes.node,
    }

    render() {
      const { className, to, children, theme, ...rest } = this.props;  // eslint-disable-line
      return (
        <RouterLink className={className} to={to} {...rest}>{children}</RouterLink>
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
