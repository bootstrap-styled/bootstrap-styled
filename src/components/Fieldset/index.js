/* A Fieldset (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { makeRow } from '../../styled/mixins/grid';

const defaultProps = { theme: bsTheme };

class Fieldset extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = omit(this.props, ['theme']);

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
