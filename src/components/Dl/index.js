/**
 *Definition List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = { theme: bsTheme };

class Dl extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <dl className={className} {...attributes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Dl = styled(Dl)` 
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

export default Dl;
