/**
 * Description Term
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { makeGridColumns } from 'bootstrap-styled-mixins/lib/grid-framework';
import themeDt from '../theme';

const defaultProps = { theme: themeDt };

class DtUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);
    return (
      <dt className={className} {...attributes} />
    );
  }
}

const Dt = styled(DtUnstyled)` 
  ${(props) => `
    /* Reboot Scss */
    font-weight: ${props.theme['$dt-font-weight']};
    ${makeGridColumns(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-columns'],
      props.theme['$grid-gutter-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Dt.defaultProps = defaultProps;

export default Dt;
