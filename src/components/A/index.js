/**
 * A link to a certain page, an anchor tag
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'config';

import { a } from '../../styled/utilities/a';

const defaultProps = {
  theme,
};

class A extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.node,
    target: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    'dropdown-item': PropTypes.bool,
  }

  render() {
    const { onClick, href, target, type } = this.props;

    return (
      <a
        className={cn(this.props.className, {
          active: this.props.active,
          disabled: this.props.disabled,
          'dropdown-item': this.props['dropdown-item'],
        })}
        onClick={onClick}
        href={href}
        target={target}
        type={type}
      >
        {this.props.children}
      </a>
    );
  }
}

// eslint-disable-next-line no-class-assign
A = styled(A)`
  ${(props) => `
    ${a(
      props.theme['$link-color'],
      props.theme['$link-decoration'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$enable-hover-media-query'],
    )}
  `}
`;

A.defaultProps = defaultProps;

export default A;

// export composers
export { default as composeLink } from './composeLink';
