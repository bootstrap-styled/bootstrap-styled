/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Styled from 'rsg-components/Styled';
import cn from 'classnames';
import Provider from 'react-redux/lib/components/Provider';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// import theme, { makeTheme } from '../../src/theme';
import reducer from '../reducer';
import Link from './Link';
import NavBarDoc from './NavBarDoc';
import { pages } from '../config';
import Documentation from './pages/Documentation';

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

// const Documentation = (props) => (
//   <div>
//     <main className={props.classes.content}>
//       {props.children}
//       <footer className={props.classes.footer}>
//         <span className="Bootstrap-Styled">Module provided by</span>
//         <a
//           href="https://www.yeutech.vn"
//           target="_blank"
//           alt="Yeutech Company Limited"
//           title="Yeutech Company Limited"
//         >
//           <img
//             src={`data:image/png;base64,${logoYeutech}`}
//             height="55px"
//             alt="Yeutech Company Limited logo"
//             title="Yeutech Company Limited logo"
//           />
//         </a>
//       </footer>
//     </main>
//     {props.hasSidebar && (
//       <div className={props.classes.sidebar}>
//         <div className={props.classes.logo}>
//           <Logo>{props.title}</Logo>
//         </div>
//         {props.toc}
//       </div>
//     )}
//   </div>
// );

const Test = () => <div>test</div>;
const Test1 = () => <div>test 1</div>;
const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  enhancer
);

export class StyleGuideRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    classes: null,
  };

  static propTypes = {
    classes: PropTypes.object,
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

    // this.setState({
    //   store,
    // });
  }
  /* eslint-enable no-underscore-dangle, function-paren-newline */
  render() {
    const {
      classes,
      title,
      children,
      toc,
      hasSidebar,
    } = this.props;
    return (
      <div className={cn(classes.root, hasSidebar && classes.hasSidebar)}>
        <Provider store={store}>
          <div>
            <ConnectedRouter history={history}>
              <div>
              <NavBarDoc pages={pages} />
              {/*<ul>*/}
                {/*<li><Link to="/">/</Link></li>*/}
                {/*<li><Link to="/toto">/toto</Link></li>*/}
              {/*</ul>*/}
              <div>
                <Route exact path="/" component={() => (
                  <div>home</div>
                )}/>
                <Route exact path="/documentation" component={() => (
                  <Documentation
                    title={title}
                    children={children}
                    toc={toc}
                    hasSidebar={hasSidebar}
                    classes={classes}
                  />
                )}/>
                <Route exact path="/community" component={() => (
                  <div>community</div>
                )}/>
              </div>
              </div>
            </ConnectedRouter>
          </div>
        </Provider>
      </div>
    );
  }
};

export default Styled(styles)(StyleGuideRenderer);
/* eslint-enable */


// {/*
//  <Documentation
//    classes={classes}
//    title={title}
//    children={children}
//    toc={toc}
//    hasSidebar={hasSidebar}
//  />
//  */}

//
// <div className={cx(this.props.classes.root, this.props.hasSidebar && this.props.classes.hasSidebar)}>
//   <main className={this.props.classes.content}>
//     {this.props.children}
//     <footer className={this.props.classes.footer}>
//       <span className="Bootstrap-Styled">Module provided by</span>
//       <a
//         href="https://www.yeutech.vn"
//         target="_blank"
//         alt="Yeutech Company Limited"
//         title="Yeutech Company Limited"
//       >
//         <img
//           src={`data:image/png;base64,${logoYeutech}`}
//           height="55px"
//           alt="Yeutech Company Limited logo"
//           title="Yeutech Company Limited logo"
//         />
//       </a>
//     </footer>
//   </main>
//   {this.props.hasSidebar && (
//     <div className={this.props.classes.sidebar}>
//       <div className={this.props.classes.logo}>
//         <img
//           src={`data:image/png;base64,${logoBs}`}
//           height="85px"
//           alt="Bootstrap-styled library"
//           title="Bootstrap-styled library logo"
//         />
//         <Logo>{this.props.title}</Logo>
//       </div>
//       {this.props.toc}
//     </div>
//   )}
// </div>
