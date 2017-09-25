/* A Fieldset (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import { makeRow } from 'bootstrap-styled-mixins/lib/grid';
import bsTheme from '../theme';

const defaultProps = { theme: bsTheme };

class FieldsetUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

const Fieldset = styled(FieldsetUnstyled)`
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
