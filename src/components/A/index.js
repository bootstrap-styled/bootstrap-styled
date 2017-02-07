/**
 * A link to a certain page, an anchor tag
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from '../../config';

import { a } from '../../styled/utilities/a';
import { button } from '../../styled/utilities/button';

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
    
    ${button(
      props.theme['$enable-shadows'],
      props.theme['$enable-hover-media-query'],
      props.theme['$enable-transitions'],
      props.theme['$enable-rounded'],
      props.theme['$btn-font-weight'],
      props.theme['$btn-line-height'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-padding-y'],
      props.theme['$font-size-base'],
      props.theme['$btn-border-radius'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$cursor-disabled'],
      props.theme['$link-color'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
      props.theme['$btn-link-disabled-color'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm'],
      props.theme['$btn-block-spacing-y'],
      props.theme['$btn-primary-color'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-primary-border'],
      props.theme['$btn-secondary-color'],
      props.theme['$btn-secondary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-color'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-info-border'],
      props.theme['$btn-success-color'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-success-border'],
      props.theme['$btn-warning-color'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-warning-border'],
      props.theme['$btn-danger-color'],
      props.theme['$btn-danger-bg'],
      props.theme['$btn-danger-border'],
    )}
  `}
`;

A.defaultProps = defaultProps;

export default A;

// export composers
export { default as composeLink } from './composeLink';
