import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from '../../src/BootstrapProvider';
import theme from '../../src/theme';

export default class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    const { children } = this.props;
    return <BootstrapProvider theme={theme}>{children}</BootstrapProvider>;
  }
}
