/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Provider from 'react-redux/lib/components/Provider';
import { createStore } from 'redux';
import { combinedReducer } from 'step-progress';

import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import Logo from 'react-styleguidist/lib/rsg-components/Logo';

import cn from 'classnames';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import { makeTheme } from '../../src/theme';

import defaultLogo from './logo';

const theme = makeTheme()

const styles = ({
                  color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth,
                }) => ({
  root: {
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    textAlign: 'right',
  },
});

const store = createStore(combinedReducer);


/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
function LayoutRenderer({
                          theme, classes, className, title, children, toc, hasSidebar, logo, bottomLogo, bottomLogoText, logoHref, bottomLogoHref, store
                        }) {
  return (
    <Provider store={store}>
      <BootstrapProvider injectGlobal theme={theme}>
        {console.log(theme)}
        <div className={cn(className, classes.root, hasSidebar && classes.hasSidebar)}>
          <main className={classes.content}>
            {children}
            <footer className={classes.footer}>
              <span>{bottomLogoText}</span>
              <a
                href={bottomLogoHref}
                target="_blank"
                alt="Yeutech Company Limited"
                title="Yeutech Company Limited"
              >
                <img
                  src={`data:image/png;base64,${bottomLogo}`}
                  height="55px"
                  alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                  title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
                />
              </a>
            </footer>
          </main>
          {hasSidebar && (
            <div className={classes.sidebar}>
              <div className={classes.logo}>
                {logoHref ? (
                  <a
                    href={logoHref}
                    target="_blank"
                    alt="Yeutech Company Limited"
                    title="Yeutech Company Limited"
                  >
                    <img
                      src={`data:image/png;base64,${logo}`}
                      height="70px"
                      alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                      title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
                    />
                  </a>
                ) : (
                  <img
                    src={`data:image/png;base64,${logo}`}
                    height="70px"
                    alt={logo === defaultLogo ? 'Yeutech Company Limited logo' : 'logo'}
                    title={logo === defaultLogo ? 'Yeutech Company Limited' : 'Brand logo'}
                  />
                )}

                <Logo>{title}</Logo>
              </div>
              {toc}
            </div>
          )}
        </div>
      </BootstrapProvider>
    </Provider>
  );
}

LayoutRenderer.defaultProps = {
  logo: defaultLogo,
  logoHref: null,
  bottomLogo: defaultLogo,
  bottomLogoHref: 'https://www.yeutech.vn',
  bottomLogoText: 'Module provided by',
  className: null,
};

LayoutRenderer.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /** TBD */
  toc: PropTypes.node.isRequired,
  /** theme to be used by BootstrapProvider */
  theme : PropTypes.object,
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool,
  /** define the logo used by the layout */
  logo: PropTypes.string,
  /** logo link */
  logoHref: PropTypes.string,
  /** define the bottom logo used by the layout */
  bottomLogo: PropTypes.string,
  /** bottom logo link */
  bottomLogoHref: PropTypes.string,
  /** text prefix of bottom logo */
  bottomLogoText: PropTypes.string,
};

const LayoutRendererOriginal = Styled(styles)(LayoutRenderer);

export default (props) => <LayoutRendererOriginal {...props} store={store} theme={theme} />;
