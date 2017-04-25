/**
 * Abbr component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import bsTheme from 'theme';

const defaultProps = {
  tag: 'abbr',
  theme: bsTheme,
};

class Abbr extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    theme: PropTypes.object,
    tag: PropTypes.string,
    initialism: PropTypes.bool,
  }

  render() {
    const {
      className,
      initialism,
      title,
      tag: Tag,
      ...rest
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={cn(className, {
          initialism,
        })}
        title={title}
        {...rest}
      />
    );
  }

}

// eslint-disable-next-line no-class-assign
Abbr = styled(Abbr)`
  /* Reboot Scss */
  /* Abbreviations and acronyms */
  &[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }
  
  /* Type Scss */
  
  &.initialism {
    font-size: 90%;
    text-transform: uppercase;
  }
`;

Abbr.defaultProps = defaultProps;

export default Abbr;

