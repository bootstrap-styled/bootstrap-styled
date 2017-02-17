/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';
import CollapseLib from 'react-collapse';
import bsTheme from 'theme';

export default (CollapseLib) => class Collapse extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
    isOpened: PropTypes.bool,
  };

  defaultProps = {
    theme: bsTheme,
    isOpened: false,
  };

  render() {
    const { children, theme, ...props } = this.props;
    // extract keys for div
    const { className, isOpened, fixedHeight, springConfig, keepCollapsedContent, onRest, onHeightReady, ...rest } = props;
    return theme['$enable-transitions'] ? (
      <CollapseLib className={className} {...props}>{children}</CollapseLib>
    ) : (
      <div className={cn(className, { 'd-none': !isOpened })} {...rest}>{children}</div>
    )
  }
}
