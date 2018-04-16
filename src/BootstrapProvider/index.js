import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { getGlobalStyleNoBootstrapProvider } from 'bootstrap-styled-mixins/lib/utilities/reboot';
import themeBs, { makeTheme as makeThemeBs } from '../theme';
import UtilityProvider, { defaultProps as utilityProviderDefaultProps } from './UtilityProvider';

export const defaultProps = {
  theme: themeBs,
  injectGlobal: true,
  utils: utilityProviderDefaultProps.utils,
};
export const propTypes = {
  /** Specified node element will be passed as children of `<BootstrapProvider />` component. */
  children: PropTypes.node,
  /** Define if BootstrapProvider is in charge of calling getGlobalStyles for you, it can only be run once. */
  injectGlobal: PropTypes.bool,
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
    theme: {},
    isWindowPhone8Fixed: null, // just for unit testing
  }

  componentWillMount() {
    this.setTheme(this.props, this.injectGlobal);
  }

  componentDidMount() {
    this.windowPhone8Fix();
  }

  /**
   * On update props
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    /**
     * We only replace the theme if the filtered theme is different from the current one
     */
    if (JSON.stringify(this.makeTheme(this.props)) !== JSON.stringify(nextProps.theme)) {
      this.setTheme(this.props);
    }
  }

  /**
   * setTheme is in charge of replacing the theme, it does not filter it, use makeTheme for that
   * @param userTheme
   * @param cb
   */
  setTheme = ({ theme: userTheme }, cb) => {
    const theme = this.makeTheme({ theme: userTheme });
    this.setState({ theme }, cb);
  }

  /**
   * makeTheme is in charge of filtering the meta data out of the theme
   * @param userTheme
   * @returns {*}
   */
  makeTheme = ({ theme: userTheme }) => {
    const theme = makeThemeBs(userTheme);
    const metaKeyList = Object.keys(theme).filter((f) => f[0] === '_');
    metaKeyList.forEach((k) => {
      delete theme[k];
    });
    return theme;
  }

  injectGlobal = () => {
    if (this.props.injectGlobal) {
      /* eslint-disable no-unused-expressions */
      injectGlobal`
        ${getGlobalStyleNoBootstrapProvider(
          this.state.theme['$font-family-base'] || themeBs['$font-family-base'],
          this.state.theme['$font-size-base'] || themeBs['$font-size-base'],
          this.state.theme['$font-weight-base'] || themeBs['$font-weight-base'],
          this.state.theme['$line-height-base'] || themeBs['$line-height-base'],
          this.state.theme['$body-color'] || themeBs['$body-color'],
          this.state.theme['$body-bg'] || themeBs['$body-bg'],
        )}
      `;
    }
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
    const { children, utils } = this.props;
    return (
      <ThemeProvider theme={this.state.theme}>
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
