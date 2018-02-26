/* A Select (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';

class SelectUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /* eslint-enable react/no-unused-prop-types */
  }

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

const Select = styled(SelectUnstyled)`
  &.select {
    touch-action: manipulation;
    line-height: inherit;
  }
  
  &:disabled{
    color: graytext;
  }
`;

/** @component */
export default Select;
