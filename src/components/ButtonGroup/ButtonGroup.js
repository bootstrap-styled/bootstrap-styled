/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { mapToCssModules } from 'utils/tools';
import { buttonGroup } from '../../styled/mixins/buttonGroup';

const defaultProps = {
  theme: bsTheme,
  tag: 'div',
  role: 'group',
};

class ButtonGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    role: PropTypes.string,
    size: PropTypes.string,
    vertical: PropTypes.bool,
    theme: PropTypes.object,
  }

  render() {
    const {
      className,
      cssModule,
      size,
      vertical,
      theme,  // eslint-disable-line
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      size ? 'btn-group-' + size : false, // eslint-disable-line prefer-template
      vertical ? 'btn-group-vertical' : 'btn-group'
    ), cssModule);
    return (
      <Tag {...attributes} className={classes} />

    );
  }
}

// eslint-disable-next-line no-class-assign
ButtonGroup = styled(ButtonGroup)`
  ${(props) => `
    ${buttonGroup(
      props.theme['$enable-shadows'],
      props.theme['$enable-rounded'],
      props.theme['$input-btn-border-width'],
      props.theme['$btn-toolbar-margin'],
      props.theme['$btn-padding-x'],
      props.theme['$btn-active-box-shadow'],
      props.theme['$btn-padding-x-lg'],
      props.theme['$btn-padding-y-lg'],
      props.theme['$font-size-lg'],
      props.theme['$btn-border-radius-lg'],
      props.theme['$btn-padding-x-sm'],
      props.theme['$btn-padding-y-sm'],
      props.theme['$font-size-sm'],
      props.theme['$btn-border-radius-sm']
    )}
  `}  
`;

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
