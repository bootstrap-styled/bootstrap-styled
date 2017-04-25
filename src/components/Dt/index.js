/**
 * Description Term
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { makeGridColumns } from '../../styled/mixins/grid-framework';

const defaultProps = { theme: bsTheme };

class Dt extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

// eslint-disable-next-line no-class-assign
Dt = styled(Dt)` 
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
