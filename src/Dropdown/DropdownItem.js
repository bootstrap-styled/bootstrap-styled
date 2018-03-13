import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import H6 from '../H6';

export const defaultProps = {
  tag: 'button',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** Toggles divider visibility. */
  divider: PropTypes.bool,
  /** Toggles header element display. */
  header: PropTypes.bool,
  /** Call specified function when on click event is triggered. */
  onClick: PropTypes.func,
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

class DropdownItem extends React.Component {

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
DropdownItem.propTypes = propTypes;

/** @component */
export default DropdownItem;
