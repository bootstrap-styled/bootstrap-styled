import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';

export default class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  state = {
    isWindowPhone8Fixed: null, // just for unit testing
  }

  componentDidMount() {
    this.windowPhone8Fix();
  }

  windowPhone8Fix() {
    // Copyright 2014-2017 The Bootstrap Authors
    // Copyright 2014-2017 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      const msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(
        document.createTextNode('@-ms-viewport{width:auto!important}')
      );
      document.head.appendChild(msViewportStyle);
      this.setState({
        isWindowPhone8Fixed: true,
      });
    }
  }

  render() {
    const { children, theme } = this.props;

    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }
}
