import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapToCssModules from 'map-to-css-modules';

const defaultProps = {
  tag: 'li',
};

class BreadcrumbItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

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

export default BreadcrumbItem;
