/**
 * ButtonGroup
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { buttonGroup } from 'bootstrap-styled-mixins/lib/buttonGroup';
import themeButtonGroup from './theme';

const defaultProps = {
  theme: themeButtonGroup,
  tag: 'div',
  role: 'group',
};

class ButtonGroupUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    vertical: PropTypes.bool,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      cssModule,
      size,
      vertical,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={mapToCssModules(cn(className,
          vertical ? 'btn-group-vertical' : 'btn-group',
          { [`btn-group-${size}`]: size },
        ), cssModule)}
        {...attributes}
      />
    );
  }
}

const ButtonGroup = styled(ButtonGroupUnstyled)`
  ${(props) => `
    ${buttonGroup(
      props.theme['$enable-shadows'],
      props.theme['$enable-rounded'],
      props.theme['$input-btn-border-width'],
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

