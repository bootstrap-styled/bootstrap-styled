/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import cx from 'classnames';
import logoBs from '../../logo-bs';
import logoYeutech from '../../logo-yeutech';


export class Documentation extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool,
  };

  render() {
    const { classes, title, children, toc, hasSidebar, } = this.props;
    return (
        <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
          <main className={classes.content}>
            {children}
            <footer className={classes.footer}>
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
          {hasSidebar && (
            <div className={classes.sidebar}>
              <div className={classes.logo}>
                <img
                  src={`data:image/png;base64,${logoBs}`}
                  height="85px"
                  alt="Bootstrap-styled library"
                  title="Bootstrap-styled library logo"
                />
                <Logo>{title}</Logo>
              </div>
              {toc}
            </div>
          )}
        </div>
    );
  }
};

export default Documentation;
/* eslint-enable */
