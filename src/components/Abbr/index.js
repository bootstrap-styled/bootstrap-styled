/**
 * Abbr component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
class Abbr extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    theme: PropTypes.object,
    initialism: PropTypes.bool,
  }

  render() {
    const { className, initialism, theme, title, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const classes = cn(
      className,
      initialism ? 'initialism' : false,
    );

    return (
      <abbr
        className={classes}
        title={title}
        {...rest}
      >
        {children}
      </abbr>
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

export default Abbr;

