/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import Collapse from 'react-collapse';
import bsTheme from 'theme';

//
// function composeCollapseStyled(Collapse) {
//   class CollapseStyled extends React.Component {
//
//     static propTypes = {
//       children: PropTypes.node.isRequired,
//       isAnimated: PropTypes.bool,
//       component: PropTypes.component,
//     }
//
//     render() {
//       const { children, ...props } = this.props;
//
//       if (bsTheme['$enable-transition'] === true) {
//         this.props.component = Collapse;
//       } else { this.props.component = Div; }
//
//       return (
//         <Component {...props}>
//           {children}
//         </Component>
//       );
//     }
//   }
//   return CollapseStyled;
// }

export default function composeCollapse(Collapse) {
  class CollapseStyled extends React.Component {

    static propTypes = {
      children: PropTypes.node,
      theme: PropTypes.object,
    };
    
    defaultProps = {
      theme: bsTheme,
    };

    render() {
      const { children, theme, ...props } = this.props;

      // extract keys for div
      const { isOpened, fixedHeight, springConfig, keepCollapsedContent, onRest, onHeightReady, ...rest } = props;
      console.log(rest);
      return bsTheme['$enable-transitions'] ? (
        <Collapse {...props}>{children}</Collapse>
      ) : (
        <div {...rest}>{children}</div>
      )
    }
  }
  return CollapseStyled;
}

// withTheme(composeCollapse(Collapse));
