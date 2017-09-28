/**
 * A Tether Content component
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tether from 'tether-fix';
import isFunction from 'lodash.omit';

const defaultProps = {
  isOpen: false,
  tetherRef() {},
};

class TetherContent extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    tether: PropTypes.object.isRequired,
    tetherRef: PropTypes.func,
    style: PropTypes.node,
  }

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
      this.props.tetherRef(this.tether);
    }
  }

  show = () => {
    document.addEventListener('click', this.handleDocumentClick, true);

    this.element = document.createElement('div');
    this.element.className = this.props.className;
    document.body.appendChild(this.element);
    this.renderIntoSubtree();
    this.tether = new Tether(this.getTetherConfig());
    this.props.tetherRef(this.tether);
    this.tether.position();
    // this.element.childNodes[0].focus();
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

export default TetherContent;
