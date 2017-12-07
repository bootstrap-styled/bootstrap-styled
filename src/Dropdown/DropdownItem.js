import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import H6 from '../H6';


class DropdownItem extends React.Component {

  static defaultProps = {
    tag: 'button',
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    divider: PropTypes.bool,
    header: PropTypes.bool,
    onClick: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static contextTypes = {
    toggle: PropTypes.func,
  };

  onClick = (e) => {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.context.toggle();
  }

  getTabIndex = () => {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }
    return '0';
  }

  render() {
    const tabIndex = this.getTabIndex();
    /* eslint-disable prefer-const */
    let {
      className,
      cssModule,
      divider,
      disabled,
      tag: Tag,
      header,
      ...attributes } = this.props;
    /* eslint-enable prefer-const */

    const classes = mapToCssModules(cn(
      className,
      {
        disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider,
      }
    ), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = H6;
      } else if (divider) {
        Tag = 'div';
      }
    }

    return (
      <Tag
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
        {...attributes}
      />
    );
  }
}

export default DropdownItem;
