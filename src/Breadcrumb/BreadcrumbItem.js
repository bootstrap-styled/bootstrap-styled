import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  tag: 'li',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /**
   * Toggles active CSS.
   */
  active: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class BreadcrumbItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      cssModule,
      active,
      tag: Tag,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(classNames(className, 'breadcrumb-item', {
          active,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

BreadcrumbItem.defaultProps = defaultProps;
BreadcrumbItem.propTypes = propTypes;

export default BreadcrumbItem;
