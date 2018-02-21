/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';

import mapToCssModules from 'map-to-css-modules';
import { a } from 'bootstrap-styled-mixins/lib/a';
// import theme from './theme';

const defaultProps = {
  tag: 'a',
  theme: {
    '$enable-hover-media-query': true,
    '$link-color': '#f00',
    '$link-decoration': '#f00',
    '$link-hover-color': '#f00',
    '$link-hover-decoration': '#f00',
  },
};
const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Description of prop "active". */
  active: PropTypes.bool,
  tag: PropTypes.string,
  disabled: PropTypes.bool,
  /** Theme variables. */
  theme: PropTypes.shape({
    '$enable-hover-media-query': PropTypes.bool,
    '$link-color': PropTypes.string,
    '$link-decoration': PropTypes.string,
    '$link-hover-color': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
  }),
  color: PropTypes.string,
  cssModule: PropTypes.object,
};

class AUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  state = {
    focus: false,
  }

  render() {
    const {
      className,
      active,
      disabled,
      cssModule,
      color,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    const { focus } = this.state;

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          focus,
          active,
          disabled,
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

/**
 * anchor link element
 */
const A = styled(AUnstyled)`
  ${(props) => `
    ${a(
      props.theme['$enable-hover-media-query'],
      props.theme['$link-color'],
      props.theme['$link-decoration'],
      props.theme['$link-hover-color'],
      props.theme['$link-hover-decoration'],
    )}
  `}
`;

A.defaultProps = defaultProps;
A.propTypes = propTypes;

/** @component */
export default A;
