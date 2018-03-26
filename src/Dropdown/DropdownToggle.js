import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Button from '../Button';
import A from '../A';

export const defaultProps = {
  'aria-haspopup': true,
  'data-toggle': 'dropdown',
  color: 'primary',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<DropdownItem />`. */
  children: PropTypes.node,
  /** Toggles popup CSS style. */
  'aria-haspopup': PropTypes.bool,
  /** Toggles caret CSS style. */
  caret: PropTypes.bool,
  /** Change toggle content with specified string. */
  'data-toggle': PropTypes.string,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** Call specified function when on click event is triggered. */
  onClick: PropTypes.func,
  /** Toggles nav CSS style. */
  nav: PropTypes.bool,
  /** Toggles split CSS style. */
  split: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class DropdownToggle extends React.Component {

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  static contextTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  onClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  render() {
    const { className, cssModule, caret, split, nav, tag, ...attributes } = this.props;
    const ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
    const classes = mapToCssModules(classNames(
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav,
      }
    ), cssModule);
    const children = attributes.children || <span className="sr-only">{ariaLabel}</span>;

    let Tag;

    if (nav && !tag) {
      Tag = A;
      attributes.href = '#';
    } else if (!tag) {
      Tag = Button;
    } else {
      Tag = tag;
    }

    return (
      <Tag
        className={classes}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
        {...attributes}
      >
        {children}
      </Tag>
    );
  }
}

DropdownToggle.defaultProps = defaultProps;
DropdownToggle.propTypes = propTypes;
/** @component */
export default DropdownToggle;
