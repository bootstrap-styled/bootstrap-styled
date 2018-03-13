import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';

import mapToCssModules from 'map-to-css-modules';
import { a } from 'bootstrap-styled-mixins/lib/a';

export const defaultProps = {
  tag: 'a',
  theme: {
    '$link-color': '#0275d8',
    '$link-decoration': 'none',
    '$link-hover-color': '#014C8D',
    '$link-hover-decoration': 'underline',
    '$enable-hover-media-query': false,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$link-color': PropTypes.string,
    '$link-decoration': PropTypes.string,
    '$link-hover-color': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$enable-hover-media-query': PropTypes.bool,
  }),
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'white',
    'muted',
    'gray-dark',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
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
          [`text-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

/**
 * An anchor tag component used to direct towards a page outside of the application.
 */
const A = styled(AUnstyled)`
  ${(props) => `
    ${a(
  props.theme['$link-color'],
  props.theme['$link-decoration'],
  props.theme['$link-hover-color'],
  props.theme['$link-hover-decoration'],
  props.theme['$enable-hover-media-query']
)}
  `}
`;

A.defaultProps = defaultProps;
A.propTypes = propTypes;

/** @component */
export default A;
