/**
 * A list item.
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';
import { listUnstyled } from '../../styled/mixins/lists';

const defaultProps = { theme };

class Li extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    separator: PropTypes.bool,
    active: PropTypes.bool,
    'dropdown-item': PropTypes.bool,
    'dropdown-header': PropTypes.bool,
  }

  render() {
    return (
      <li
        className={cn(this.props.className, {
          'dropdown-divider': this.props.separator,
          'dropdown-item': this.props['dropdown-item'],
          active: this.props.active,
          disabled: this.props.disabled,
          'dropdown-header': this.props['dropdown-header'],
        })}
      >
        {this.props.children}
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
