/**
 *Definition List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { makeRow } from 'bootstrap-styled-mixins/lib/grid';

export const defaultProps = {
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
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
    '$grid-gutter-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};

class DlUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <dl className={className} {...attributes} />
    );
  }
}
/**
 * `<Dl />` defines a description list.
 */
const Dl = styled(DlUnstyled)` 
  /* Reboot Scss */
  margin-top: 0;
  margin-bottom: 1rem;
  
  ${(props) => `
    ${makeRow(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
  `}
`;

Dl.defaultProps = defaultProps;
Dl.propTypes = propTypes;

/** @component */
export default Dl;
