/**
 * ButtonGroup
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { buttonGroup } from '../../styled/mixins/buttonGroup';

const defaultProps = { theme: bsTheme };

class ButtonGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    'btn-toolbar': PropTypes.bool,
    theme: PropTypes.object,
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    selectedValueList: PropTypes.array,
    onChange: PropTypes.func,
  }

  static childContextTypes = {
    buttonCheckboxGroup: React.PropTypes.object,
    buttonRadioGroup: React.PropTypes.object,
  };

  getChildContext() {
    const { name, selectedValue, selectedValueList, onChange } = this.props;
    return {
      buttonRadioGroup: {
        name,
        selectedValue,
        onChange,
      },
      buttonCheckboxGroup: {
        name,
        selectedValueList,
        onChange,
      },
    };
  }

  render() {
    const { className, children, theme, 'btn-toolbar': btnToolbar, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { name, selectedValue, selectedValueList, onChange, ...restAfterChildContext } = rest; // eslint-disable-line no-unused-vars

    return (
      <div
        className={cn(className, {
          'btn-group': !btnToolbar, // if this ButtonGroup is a btn-toolbar, then we don't need .btn-group
          'btn-toolbar': btnToolbar,
        })}
        {...restAfterChildContext}
      >
        {children}
      </div>
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
