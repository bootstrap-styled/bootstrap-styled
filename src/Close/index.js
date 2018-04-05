import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { hoverFocus } from 'bootstrap-styled-mixins/lib/hover';

export const defaultProps = {
  theme: {
    '$close-color': '#000',
    '$close-font-size': '1.5rem',
    '$close-font-weight': '#bold',
    '$close-text-shadow': '0 1px 0 #fff',
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
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
  }),
  /** Replace close label with any string. */
  closeLabel: PropTypes.string,
  /** Call function when dismiss is trigger. */
  onDismiss: PropTypes.func.isRequired,
  /** Toggles screen-reader only CSS display. */
  'sr-only': PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class CloseUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      'sr-only': srOnly,
      onDismiss,
      closeLabel,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);
    return (
      <button
        className={mapToCssModules(cn(className, 'close', {
          'sr-only': srOnly,
        }), cssModule)}
        type="button"
        onClick={onDismiss}
        {...attributes}
      >
        {closeLabel}
        <span>&times;</span>
      </button>
    );
  }
}

const Close = styled(CloseUnstyled)`
  ${(props) => `
    float: right;
    font-size: ${props.theme['$close-font-size']};
    font-weight: ${props.theme['$close-font-weight']};
    line-height: 1;
    color: ${props.theme['$close-color']};
    text-shadow: ${props.theme['$close-text-shadow']};
    opacity: .2;
    
    &:focus {outline:0;}
    
    ${hoverFocus(
      props.theme['$enable-hover-media-query'],
      `
        color: ${props.theme['$close-color']};
        text-decoration: none;
        cursor: pointer;
        opacity: .5;
      `
    )}
    
    /* Additional properties for button version
     iOS requires the button element instead of an anchor tag.
     If you want the anchor version, it requires 'href="#"'.
     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
     */
    
    /* scss-lint:disable QualifyingElement */
    &.close {
      padding: 0;
      cursor: pointer;
      background: transparent;
      border: 0;
      -webkit-appearance: none;
    }
    /* scss-lint:enable QualifyingElement */
  `}
`;

Close.defaultProps = defaultProps;
Close.propTypes = propTypes;

/** @component */
export default Close;
