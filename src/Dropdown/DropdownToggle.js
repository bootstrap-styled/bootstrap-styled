import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Button from '../Button';
import A from '../A';


class DropdownToggle extends React.Component {

  static defaultProps = {
    'aria-haspopup': true,
    'data-toggle': 'dropdown',
    color: 'primary',
  };

  static propTypes = {
    'aria-haspopup': PropTypes.bool,
    caret: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    'data-toggle': PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    nav: PropTypes.bool,
    split: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

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

export default DropdownToggle;
