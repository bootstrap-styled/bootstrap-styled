/**
 * A list item.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { media as mediaCss } from '../../styled/mixins/media';

const defaultProps = { theme: bsTheme };

class Li extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    separator: PropTypes.bool,
    active: PropTypes.bool,
    inline: PropTypes.bool,
    media: PropTypes.bool,
    'dropdown-item': PropTypes.bool,
    'dropdown-header': PropTypes.bool,
    'dropdown-footer': PropTypes.bool,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      children,
      inline,
      separator,
      media,
      'dropdown-item': dropdownItem,
      'dropdown-header': dropdownHeader,
      'dropdown-footer': dropdownFooter,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = cn(
      className,
      separator ? 'dropdown-divider' : false,
      dropdownItem ? 'dropdown-item' : false,
      dropdownItem ? 'dropdown-item' : false,
      dropdownHeader ? 'dropdown-header' : false,
      dropdownFooter ? 'dropdown-footer' : false,
      inline ? 'list-inline-item' : false,
      media ? 'media' : false,
    );
    return (
      <li
        className={classes}
        {...attributes}
      >
        {children}
      </li>
    );
  }
}

// eslint-disable-next-line no-class-assign
Li = styled(Li)`
  ${(props) => `
    &.list-inline-item {
      display: inline-block;
    
      &:not(:last-child) {
        margin-right: ${props.theme['$list-inline-padding']};
      }
    }
    
    ${mediaCss()}
  `}
`;

Li.defaultProps = defaultProps;

export default Li;
