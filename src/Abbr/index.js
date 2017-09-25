/**
 * Abbr component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import bsTheme from '../theme';

const defaultProps = {
  tag: 'abbr',
  theme: bsTheme,
};

class AbbrUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    theme: PropTypes.object,
    tag: PropTypes.string,
    initialism: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  };

  render() {
    const {
      className,
      initialism,
      title,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <Tag
        className={cn(className, {
          initialism,
        })}
        title={title}
        {...attributes}
      />
    );
  }
}

const Abbr = styled(AbbrUnstyled)`
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

