import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeBs, { makeTheme } from '../theme';
import UtilityProvider from './UtilityProvider';

export const defaultProps = {
  theme: themeBs,
};
export const propTypes = {
  /** Specified node element will be passed as children of `<<Alert> />` component. */
  children: PropTypes.node,
  /** Theme variables. */
  theme: PropTypes.object,
  /** Utilities variables. */
  utils: PropTypes.shape({
    /** Toggles align theme variables. */
    align: PropTypes.bool,
    /** Toggles background theme variables. */
    background: PropTypes.bool,
    /** Toggles `<A />` link theme variables. */
    a: PropTypes.bool,
    /** Toggles border theme variables. */
    border: PropTypes.bool,
    /** Toggles clearfix theme variables. */
    clearfix: PropTypes.bool,
    /** Toggles display theme variables. */
    display: PropTypes.bool,
    /** Toggles flex theme variables. */
    flex: PropTypes.bool,
    /** Toggles float theme variables. */
    float: PropTypes.bool,
    /** Toggles position theme variables. */
    position: PropTypes.bool,
    /** Toggles screenreaders theme variables. */
    screenreaders: PropTypes.bool,
    /** Toggles sizing theme variables. */
    sizing: PropTypes.bool,
    /** Toggles spacing theme variables. */
    spacing: PropTypes.bool,
    /** Toggles text theme variables. */
    text: PropTypes.bool,
    /** Toggles transition theme variables. */
    transition: PropTypes.bool,
    /** Toggles visibility theme variables. */
    visibility: PropTypes.bool,
  }),
};
class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
      <ThemeProvider theme={makeTheme(theme)}>
        <UtilityProvider utils={utils}>
          {children}
        </UtilityProvider>
      </ThemeProvider>
    );
  }
}

BootstrapProvider.defaultProps = defaultProps;
BootstrapProvider.propTypes = propTypes;

export default BootstrapProvider;
