/**
 * A list item.
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';

import { listUnstyled } from '../../styled/mixins/lists';

const defaultProps = { theme: bsTheme };

class Li extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    separator: PropTypes.bool,
    active: PropTypes.bool,
    'dropdown-item': PropTypes.bool,
    'dropdown-header': PropTypes.bool,
    'dropdown-footer': PropTypes.bool,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, separator, 'dropdown-item': dropdownItem, active, disabled, 'dropdown-header': dropdownHeader, 'dropdown-footer': dropdownFooter, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <li
        className={cn(className, {
          'dropdown-divider': separator,
          'dropdown-item': dropdownItem,
          active,
          disabled,
          'dropdown-header': dropdownHeader,
          'dropdown-footer': dropdownFooter,
        })}
        {...rest}
      >
        {children}
      </li>
    );
  }
}

// eslint-disable-next-line no-class-assign
Li = styled(Li)`
  ${(props) => `
    /* Type Scss */
    &.list-inline {
      ${listUnstyled()};
    }
    &.list-inline-item {
      display: inline-block;
    
      &:not(:last-child) {
        margin-right: ${props.theme['$list-inline-padding']};
      }
    }
  `}
`;

Li.defaultProps = defaultProps;

export default Li;
