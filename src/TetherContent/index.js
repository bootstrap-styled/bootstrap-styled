/**
 * A Tether Content component
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tether from 'tether-fix';
import isFunction from 'lodash.omit';

export const defaultProps = {
  isOpen: false,
  tetherRef: null,
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<TetherContent />` component. */
  children: PropTypes.node,
  /** Toggles opened CSS display. */
  isOpen: PropTypes.bool,
  /** Toggles disabled CSS display. */
  disabled: PropTypes.bool,
  /** Call specified function when toggle action is triggered. */
  toggle: PropTypes.func.isRequired,
  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: PropTypes.object.isRequired,
  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: PropTypes.func,
  /** Tether style. Please consult [Tether documentation](http://tether.io/) for more information. */
  style: PropTypes.node,
};
class TetherContent extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  componentDidMount = () => {
    this.handleProps();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    } else if (this.element) {
      // rerender
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount = () => {
    this.hide();
  }

  getTarget = () => {
    const target = this.props.tether.target;

    if (isFunction(target)) {
      return target();
    }

    return target;
  }

  getTetherConfig = () => {
    const config = {
      ...this.props.tether,
    };

    config.element = this.element;
    config.target = this.getTarget();
    return config;
  }

  handleDocumentClick = (e) => {
    const container = this.element;
    if (e.target === container || !container.contains(e.target)) {
      this.toggle();
    }
  }

  handleProps = () => {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);

    if (this.element) {
      document.body.removeChild(this.element);
      ReactDOM.unmountComponentAtNode(this.element);
      this.element = null;
    }

    if (this.tether) {
      this.tether.destroy();
      this.tether = null;
      if (this.props.tetherRef) {
        this.props.tetherRef(this.tether);
      }
    }
  }

  show = () => {
    document.addEventListener('click', this.handleDocumentClick, true);

    this.element = document.createElement('div');
    this.element.className = this.props.className;
    document.body.appendChild(this.element);
    this.renderIntoSubtree();
    this.tether = new Tether(this.getTetherConfig());
    if (this.props.tetherRef) {
      this.props.tetherRef(this.tether);
    }
    this.tether.position();
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderIntoSubtree = () => {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this.element
    );
  }

  renderChildren = () => {
    const { children, style } = this.props;
    return React.cloneElement(
      children,
      { style }
    );
  }

  render() {
    return (
      null
    );
  }
}

TetherContent.defaultProps = defaultProps;
TetherContent.propTypes = propTypes;

export default TetherContent;
