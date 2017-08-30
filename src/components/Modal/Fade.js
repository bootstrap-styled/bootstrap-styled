/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  baseClass: PropTypes.string,
  baseClassIn: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  timeout: PropTypes.oneOfType([
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  onExit: PropTypes.func,
  onEnter: PropTypes.func,
};

const defaultProps = {
  tag: 'div',
  baseClass: 'fade',
  baseClassIn: 'show',
  timeout: 0,
  appear: true,
  enter: true,
  exit: true
};

class Fade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: !props.appear,
    };

    this.timers = [];
  }

  componentWillUnmount() {
    this.timers.forEach(timer => clearTimeout(timer));
  }

  onEnter = (cb) => {
    return () => {
      cb();
      if (this.props.onEnter) {
        this.props.onEnter();
      }
    };
  }

  onExit = (cb) => {
    return () => {
      cb();
      if (this.props.onExit) {
        this.props.onExit();
      }
    };
  }

  componentWillAppear(cb) {
    if (!this.props.appear) {
      this.onEnter(cb)();
    }

    this.timers.push(setTimeout(this.onEnter(cb), this.props.timeout.enter || this.props.timeout));
  }

  componentDidAppear() {
    this.setState({
      mounted: true
    });
  }

  componentWillEnter(cb) {
    if (!this.props.enter) {
      this.onEnter(cb)();
    }

    this.timers.push(setTimeout(this.onEnter(cb), this.props.timeout.enter || this.props.timeout));
  }

  componentDidEnter() {
    this.setState({
      mounted: true
    });
  }

  componentWillLeave(cb) {
    this.setState({
      mounted: false
    });

    if (!this.props.exit) {
      this.onExit(cb)();
    }

    this.timers.push(setTimeout(this.onExit(cb), this.props.timeout.exit || this.props.timeout));
  }

  render() {
    const {
      baseClass,
      baseClassIn,
      className,
      tag: Tag,
    } = this.props;
    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = cn(
      className,
      baseClass,
      this.state.mounted ? baseClassIn : false
    );

    return (
      <Tag {...attributes} className={classes}>{this.props.children}</Tag>
    );
  }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
