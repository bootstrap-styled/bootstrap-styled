/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';
import Provider from 'react-redux/lib/components/Provider';
import { createStore, applyMiddleware, compose } from 'redux';
import theme, { makeTheme } from '../../src/theme';
import reducer from '../reducer';

import logoBs from './logo-bs';
import logoYeutech from './logo-yeutech';

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
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

export class StyleGuideRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool,
  };
  state = {
    store: null,
  }
  /* eslint-disable no-underscore-dangle, function-paren-newline */
  componentWillMount() {
    const middleware = [];
    const composeEnhancers =
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middleware),
      // other store enhancers if any
    );

    const demoTheme = makeTheme({
      _name: 'demo', // eslint-disable-line no-underscore-dangle
      '$btn-primary-bg': 'yellow',
      '$btn-success-bg': 'pink',
      '$btn-warning-bg': 'darkgrey',
    });

    const store = createStore(reducer, {
      'bs.documentation': {
        theme,
        themes: {
          [theme._name]: theme, // eslint-disable-line no-underscore-dangle
          [demoTheme._name]: demoTheme, // eslint-disable-line no-underscore-dangle
        },
      },
    }, enhancer);
    this.setState({
      store,
    });
  }
  /* eslint-enable no-underscore-dangle, function-paren-newline */
  render() {
    return (
      <Provider store={this.state.store}>
        <div className={cx(this.props.classes.root, this.props.hasSidebar && this.props.classes.hasSidebar)}>
          <main className={this.props.classes.content}>
            {this.props.children}
            <footer className={this.props.classes.footer}>
              <span className="Bootstrap-Styled">Module provided by</span>
              <a
                href="https://www.yeutech.vn"
                target="_blank"
                alt="Yeutech Company Limited"
                title="Yeutech Company Limited"
              >
                <img
                  src={`data:image/png;base64,${logoYeutech}`}
                  height="55px"
                  alt="Yeutech Company Limited logo"
                  title="Yeutech Company Limited logo"
                />
              </a>
            </footer>
          </main>
          {this.props.hasSidebar && (
            <div className={this.props.classes.sidebar}>
              <div className={this.props.classes.logo}>
                <img
                  src={`data:image/png;base64,${logoBs}`}
                  height="85px"
                  alt="Bootstrap-styled library"
                  title="Bootstrap-styled library logo"
                />
                <Logo>{this.props.title}</Logo>
              </div>
              {this.props.toc}
            </div>
          )}
        </div>
      </Provider>
    );
  }
};

export default Styled(styles)(StyleGuideRenderer);
/* eslint-enable */
