import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import { hoverFocus } from '../../styled/mixins/hover';

const defaultProps = { theme };

class Close extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    'sr-only': PropTypes.bool,
    className: PropTypes.string,
    closeLabel: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
  }

  render() {
    const { onDismiss, closeLabel } = this.props;

    if (this.props['sr-only']) {
      return (
        <button
          type="button"
          className={cn(this.props.className, ['close', 'sr-only'])}
          onClick={onDismiss}
        >
          ${closeLabel}
          <span>&times;</span>
        </button>
      );
    }
    return (
      <button
        type="button"
        className={cn(this.props.className, 'close')}
        onClick={onDismiss}
      >
        <span>&times;</span>
      </button>
    );
  }
}

// eslint-disable-next-line no-class-assign
Close = styled(Close)`
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
    &button.close {
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

export default Close;
