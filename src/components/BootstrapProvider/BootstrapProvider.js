import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import UtilityProvider from './UtilityProvider';
import themeBs from '../../config';

export default class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: themeBs,
  }

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    utils: PropTypes.shape({
      align: PropTypes.bool,
      background: PropTypes.bool,
      a: PropTypes.bool,
      border: PropTypes.bool,
      clearfix: PropTypes.bool,
      display: PropTypes.bool,
      flex: PropTypes.bool,
      float: PropTypes.bool,
      screenreaders: PropTypes.bool,
      spacing: PropTypes.bool,
      text: PropTypes.bool,
      visibility: PropTypes.bool,
    }),
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
    const { children, theme, utils } = this.props;
    return (
      <ThemeProvider theme={Object.assign({}, themeBs, theme)}>
        <UtilityProvider utils={utils}>
          {children}
        </UtilityProvider>
      </ThemeProvider>
    );
  }
}
