/**
 * A Tooltip component
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import TetherContent from '../TetherContent';
import { mapToCssModules, omit, getTetherAttachments, tetherAttachements } from '../../styled/utilities/tools';

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250,
};

const defaultProps = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: () => {},
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show',
  },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' },
  ],
};
// propTypes need to be excluded of the tooltip class
// issue on : https://github.com/yannickcr/eslint-plugin-react/issues/203
const propTypes = {
  placement: React.PropTypes.oneOf(tetherAttachements),
  target: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  tether: PropTypes.object,
  tetherRef: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
};

class Tooltip extends React.Component {

  static propTypes = {
    placement: React.PropTypes.oneOf(tetherAttachements),
    target: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    tether: PropTypes.object,
    tetherRef: PropTypes.func,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    toggle: PropTypes.func,
    autohide: PropTypes.bool,
    delay: PropTypes.oneOfType([
      PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
      PropTypes.number,
    ]),
  };

  state = {
    focus: false,
  }

  componentDidMount = () => {
    this.target = document.getElementById(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount = () => {
    this.removeTargetEvents();
  }

  onMouseOverTooltip = () => {
    if (this.hideTimeout) {
      this.clearHideTimeout();
    }
    this.showTimeout = setTimeout(this.show, this.getDelay('show'));
  }

  onMouseLeaveTooltip = () => {
    if (this.showTimeout) {
      this.clearShowTimeout();
    }
    this.hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  onMouseOverTooltipContent = () => {
    if (this.props.autohide) {
      return;
    }
    if (this.hideTimeout) {
      this.clearHideTimeout();
    }
  }

  onMouseLeaveTooltipContent = () => {
    if (this.props.autohide) {
      return;
    }
    if (this.showTimeout) {
      this.clearShowTimeout();
    }
    this.hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  getDelay = (key) => {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  getTetherConfig = () => {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: '#' + this.props.target, // eslint-disable-line prefer-template
      ...this.props.tether,
    };
  }

  show = () => {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
  }

  hide = () => {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle();
    }
  }

  clearShowTimeout = () => {
    clearTimeout(this.showTimeout);
    this.showTimeout = undefined;
  }

  clearHideTimeout = () => {
    clearTimeout(this.hideTimeout);
    this.hideTimeout = undefined;
  }

  handleDocumentClick = (e) => {
    if (e.target === this.target || this.target.contains(e.target)) {
      if (this.hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents = () => {
    this.target.addEventListener('mouseover', this.onMouseOverTooltip, true);
    this.target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeTargetEvents = () => {
    this.target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this.target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = mapToCssModules(cn(
      'tooltip',
      this.props.className
    ), this.props.cssModule);

    const tetherConfig = this.getTetherConfig();

    const optional = {};
    if (this.state.focus === true) {
      optional.onFocus = this.handleFocus;
    }

    return (
      <TetherContent
        className={classes}
        tether={tetherConfig}
        tetherRef={this.props.tetherRef}
        isOpen={this.props.isOpen}
        toggle={this.toggle}
      >
        <div
          {...attributes}
          className={'tooltip-inner'}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
          onFocus={this.handleFocus}
          {...optional}
        />
      </TetherContent>
    );
  }
}

// eslint-disable-next-line no-class-assign
Tooltip = styled(Tooltip)`
  ${(props) => `
    &.tooltip {
      position: absolute;
      z-index: 1070;
      display: block;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-break: auto;
      line-height: 1.5;
      text-align: left;
      text-align: start;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      white-space: normal;
      word-break: normal;
      word-spacing: normal;
      font-size: .875rem;
      word-wrap: break-word;
      opacity: 0
    }
    
    &.tooltip.show {
      opacity: ${props.theme['$tooltip-opacity']}
    }
    
    &.tooltip.bs-tether-element-attached-bottom,
    &.tooltip.tooltip-top {
      padding: 5px 0;
      margin-top: -3px
    }
    
    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,
    &.tooltip.tooltip-top .tooltip-inner:before {
      bottom: 0;
      left: 50%;
      margin-left: -5px;
      content: "";
      border-width: 5px 5px 0;
      border-top-color: #000
    }
    
    &.tooltip.bs-tether-element-attached-left,
    &.tooltip.tooltip-right {
      padding: 0 5px;
      margin-left: 3px
    }
    
    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,
    &.tooltip.tooltip-right .tooltip-inner:before {
      top: 50%;
      left: 0;
      margin-top: -5px;
      content: "";
      border-width: 5px 5px 5px 0;
      border-right-color: #000
    }
    
    &.tooltip.bs-tether-element-attached-top,
    &.tooltip.tooltip-bottom {
      padding: 5px 0;
      margin-top: 3px
    }
    
    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,
    &.tooltip.tooltip-bottom .tooltip-inner:before {
      top: 0;
      left: 50%;
      margin-left: -5px;
      content: "";
      border-width: 0 5px 5px;
      border-bottom-color: #000
    }
    
    &.tooltip.bs-tether-element-attached-right,
    &.tooltip.tooltip-left {
      padding: 0 5px;
      margin-left: -3px
    }
    
    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,
    &.tooltip.tooltip-left .tooltip-inner:before {
      top: 50%;
      right: 0;
      margin-top: -5px;
      content: "";
      border-width: 5px 0 5px 5px;
      border-left-color: #000
    }
    
    & .tooltip-inner {
      max-width: ${props.theme['$tooltip-max-width']};
      padding: ${props.theme['$tooltip-padding-y']} ${props.theme['$tooltip-padding-x']};
      color: ${props.theme['$tooltip-color']};
      text-align: center;
      background-color: ${props.theme['$tooltip-bg']};
      border-radius: .25rem
    }
    
    & .tooltip-inner:before {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid
    }
  `}
`;

Tooltip.defaultProps = defaultProps;

export default Tooltip;

//
//
//
// render() {
//   if (!this.props.isOpen) {
//     return null;
//   }
//
//
//   const {
//     className,
//     cssModule,
//     tag: Tag,
//     theme,  // eslint-disable-line
//     ...attributes
//   } = omit(this.props, Object.keys(this.props));
//
//   const classes = mapToCssModules(cn(
//     'tooltip-inner',
//     className
//   ), cssModule);
//
//   const tetherConfig = this.getTetherConfig();
//
//   const optional = {};
//   if (this.state.focus === true) {
//     optional.onFocus = this.handleFocus;
//   }
//
//
//   return (
//     <TetherContent
//       className="tooltip"
//       tether={tetherConfig}
//       tetherRef={this.props.tetherRef}
//       isOpen={this.props.isOpen}
//       toggle={this.toggle}
//     >
//       <Tag
//         {...attributes}
//         className={classes}
//         onMouseOver={this.onMouseOverTooltipContent}
//         onMouseLeave={this.onMouseLeaveTooltipContent}
//         onFocus={this.handleFocus}
//         {...optional}
//       />
//     </TetherContent>
//   );
// }
// }
