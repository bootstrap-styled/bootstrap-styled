/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';
import CollapseLib from 'react-collapse';
import bsTheme from 'theme';

export default function composeCollapse(CollapseLib) {
  class Collapse extends React.Component {

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
      console.log(theme);
      return theme['$enable-transitions'] ? (
        <CollapseLib {...props}>{children}</CollapseLib>
      ) : (
        <div {...rest}>{children}</div>
      )
    }
  }
  return withTheme(Collapse);
}
