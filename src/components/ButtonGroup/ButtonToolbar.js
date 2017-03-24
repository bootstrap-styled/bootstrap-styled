/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { mapToCssModules } from '../../styled/utilities/tools';
import { buttonGroup } from '../../styled/mixins/buttonGroup';

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

class ButtonToolbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    role: PropTypes.string,
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'btn-toolbar'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />

    );
  }
}

// eslint-disable-next-line no-class-assign
ButtonToolbar = styled(ButtonToolbar)`
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

ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
