/**
 * A link to a certain page, an anchor tag
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';

import { mapToCssModules } from '../../styled/utilities/tools';
import { a } from '../../styled/mixins/a';

const defaultProps = {
  theme: bsTheme,
};

class A extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    'dropdown-item': PropTypes.bool,
    theme: PropTypes.object,
    color: PropTypes.string,
    cssModule: PropTypes.object,
  }

  state = {
    focus: false,
  }

  render() {
    const {
      className,
      theme,   // eslint-disable-line no-unused-vars
      active,
      disabled,
      cssModule,
      color,
      'dropdown-item': dropdownItem,
      children,
      ...attributes
    } = this.props;

    const { focus } = this.state;

    const classes = mapToCssModules(cn(
      className,
      active ? 'active' : false,
      disabled ? 'disabled' : false,
      focus,
      dropdownItem ? 'dropdown-item' : false,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <a
        className={classes}
        {...attributes}
      >
        {children}
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
