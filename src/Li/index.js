/**
 * A list item.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { media as mediaCss } from 'bootstrap-styled-mixins/lib/media';
import mapToCssModules from 'map-to-css-modules';


export const defaultProps = {
  theme: {
    '$list-inline-padding': '5px',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Li />` component. */
  children: PropTypes.node,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$list-inline-padding': PropTypes.string,
  }),
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** Toggles separator CSS display. */
  separator: PropTypes.bool,
  /** Toggles active CSS display. */
  active: PropTypes.bool,
  /** Toggles inline CSS display. */
  inline: PropTypes.bool,
  /** Toggles media CSS style. */
  media: PropTypes.bool,
  /** Toggles 'dropdown-item' CSS style. */
  'dropdown-item': PropTypes.bool,
  /** Toggles 'dropdown-header' CSS style. */
  'dropdown-header': PropTypes.bool,
  /** Toggles 'dropdown-footer' CSS style. */
  'dropdown-footer': PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class LiUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      children,
      inline,
      separator,
      media,
      'dropdown-item': dropdownItem,
      'dropdown-header': dropdownHeader,
      'dropdown-footer': dropdownFooter,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      separator ? 'dropdown-divider' : false,
      dropdownItem ? 'dropdown-item' : false,
      dropdownItem ? 'dropdown-item' : false,
      dropdownHeader ? 'dropdown-header' : false,
      dropdownFooter ? 'dropdown-footer' : false,
      inline ? 'list-inline-item' : false,
      media ? 'media' : false,
    ));
    return (
      <li
        className={classes}
        {...attributes}
      >
        {children}
      </li>
    );
  }
}

/**
 * Replace or remove a className from the component.
 * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
 */
const Li = styled(LiUnstyled)`
  ${(props) => `
    &.list-inline-item {
      display: inline-block;
    
      &:not(:last-child) {
        margin-right: ${props.theme['$list-inline-padding']};
      }
    }
    
    ${mediaCss()}
  `}
`;

Li.defaultProps = defaultProps;
Li.propTypes = propTypes;

/** @component */
export default Li;
