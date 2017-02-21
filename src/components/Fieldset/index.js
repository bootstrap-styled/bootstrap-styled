/* A Fieldset (Box) */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = { theme: bsTheme };


class Fieldset extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { theme, className, children, ...rest } = this.props; // eslint-disable-line
    return (
      <fieldset
        className={className}
        {...rest}
      >
        {children}
      </fieldset>
    );
  }
}

// eslint-disable-next-line no-class-assign
Fieldset = styled(Fieldset)`
  ${(props) => `
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;

    & .row {
      ${makeRow(
        props.theme['$enable-grid-classes'],
        props.theme['$grid-gutter-widths'],
      )}
    }

  `}
`;

Fieldset.defaultProps = defaultProps;

export default Fieldset;
