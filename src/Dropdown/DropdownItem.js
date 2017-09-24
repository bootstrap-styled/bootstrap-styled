import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { mapToCssModules } from '../utils/tools';
import H6 from '../H6';
const defaultProps = {
  tag: 'button',
};

class DropdownItem extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    divider: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    header: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    cssModule: PropTypes.object,
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

DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
