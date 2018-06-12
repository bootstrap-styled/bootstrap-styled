import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { a } from 'bootstrap-styled-mixins/lib/a';

export const defaultProps = {
  theme: {
    '$link-color': '#0275d8',
    '$link-decoration': 'none',
    '$link-hover-color': '#014C8D',
    '$link-hover-decoration': 'underline',
    '$enable-hover-media-query': false,
  },
};

export default function composeLink(RouterLink) {
  class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
      /* eslint-disable react/no-unused-prop-types */
      /**
       * @ignore
       */
      className: PropTypes.string,
      /** Link destination. */
      to: PropTypes.string.isRequired,
      /** Theme variables. Can be: */
      theme: PropTypes.shape({
        '$link-color': PropTypes.string,
        '$link-decoration': PropTypes.string,
        '$link-hover-color': PropTypes.string,
        '$link-hover-decoration': PropTypes.string,
        '$enable-hover-media-query': PropTypes.bool,
      }),
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
