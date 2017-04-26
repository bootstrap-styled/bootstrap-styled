/* A Select (Box) */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import bsTheme from 'theme';
import omit from 'lodash.omit';

const defaultProps = { theme: bsTheme };

class Select extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    theme: PropTypes.object,
    className: PropTypes.string,
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
      this.state.className = this.props.className;
    }
  }

  render() {
    const {
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <select
        className={cn(this.state.className, 'select')}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Select = styled(Select)`
  &.select {
    touch-action: manipulation;
    line-height: inherit;
  }
  
  &:disabled{
    color: graytext;
  }
`;

Select.defaultProps = defaultProps;

export default Select;
