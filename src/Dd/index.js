/**
 * Definition Description
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { makeGridColumns } from 'bootstrap-styled-mixins/lib/grid-framework';

export const defaultProps = {
  theme: {
    '$grid-columns': '12',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
    },
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    '$enable-grid-classes': true,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-columns': PropTypes.string,
    '$grid-gutter-widths': PropTypes.object,
    '$grid-breakpoints': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};
class DdUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <dd className={className} {...attributes} />
    );
  }
}
/**
 * Use our `<Dd />` component to describe a term/name in a description list.
 */
const Dd = styled(DdUnstyled)` 
  /* _reboot.scss */
  margin-bottom: .5rem;
  margin-left: 0; /* Undo browser default */
  ${(props) => `
    ${makeGridColumns(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-columns'],
      props.theme['$grid-gutter-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Dd.defaultProps = defaultProps;
Dd.propTypes = propTypes;

/** @component */
export default Dd;
