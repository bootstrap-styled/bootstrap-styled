/* A Fieldset (Box) */

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
  /** Node element passed has child of fieldset component */
  children: PropTypes.node.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-gutter-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};

class FieldsetUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
/**
 * `<Fieldset />` component is used to group related elements in a form.
 */
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
Fieldset.propTypes = propTypes;

/** @component */
export default Fieldset;
