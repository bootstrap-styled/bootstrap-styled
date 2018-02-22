/* eslint-disable */
// styleguide/ThemeWrapper.js

import React, { Component } from 'react';
import BootstrapProvider from '../src/BootstrapProvider';
import theme from '../src/theme';

export default class ThemeWrapper extends Component {
  render() {
    return <BootstrapProvider theme={theme}>{this.props.children}</BootstrapProvider>;
  }
}
