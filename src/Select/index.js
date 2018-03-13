/* A Select (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Select />` component. */
  children: PropTypes.node,
};
class SelectUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    className: null,
  }

  // Android browser fix: https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#android-stock-browser
  componentWillMount() {
    const nua = navigator.userAgent;
    const isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1);
    if (isAndroid) {
      this.setState({
        className: this.props.className.replace(/\bform-control\b/, ''),
      });
    } else {
      this.setState({
        className: this.props.className,
      });
    }
  }

  render() {
    const {
      children,
      ...rest
    } = omit(this.props, ['className']);

    return (
      <select
        className={cn(this.state.className, 'select')}
        {...rest}
      >
        {children}
      </select>
    );
  }
}
/**
 * `<Select />` is used to create a drop-down list.
 */
const Select = styled(SelectUnstyled)`
  &.select {
    touch-action: manipulation;
    line-height: inherit;
  }
  
  &:disabled{
    color: graytext;
  }
`;

Select.propTypes = propTypes;

/** @component */
export default Select;
