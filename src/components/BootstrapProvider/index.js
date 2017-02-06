import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';

export default class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
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
