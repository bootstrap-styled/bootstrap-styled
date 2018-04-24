/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import cn from 'classnames';
import styled from 'styled-components';
import { bp } from 'bootstrap-styled-mixins';
import logoYeutech from '../../logo-yeutech';


export class DocumentationUnstyled extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool,
  };

  render() {
    const { className, classes, title, children, toc, hasSidebar, } = this.props;
    return (
        <div className={cn(className, classes.root, hasSidebar && classes.hasSidebar, 'documentation')}>
          <main className={classes.content}>
            {hasSidebar && (
              <div className={classes.sidebar} title={console.log(classes.sidebar)}>
                <div className={classes.logo}>
                  <Logo>{title}</Logo>
                </div>
                {toc}
              </div>
            )}
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
        </div>
    );
  }
};

const Documentation = styled(DocumentationUnstyled)`
  ${(props) => `
    &.documentation {
      margin-top: 40px !important;
      border-top: 5px solid #5B2CA2; 
    }
    ${bp.up(
      'sm',
      props.theme['$grid-breakpoints'],
      `
        & .rsg--sidebar-4 {
          border-top: 5px solid #5B2CA2; 
          top: 213px !important;
        }
      `
    )}
    ${bp.up(
      'md',
      props.theme['$grid-breakpoints'],
      `
        & .rsg--sidebar-4 {
          border-top: 5px solid #5B2CA2; 
          top: 213px !important;
        }
      `
    )}
    ${bp.up(
      'lg',
      props.theme['$grid-breakpoints'],
      `
        & .rsg--sidebar-4 {
          border-top: 5px solid #5B2CA2; 
          top: 145px !important;
        }
      `
    )}
  `}
`;

export default Documentation;
/* eslint-enable */
