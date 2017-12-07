/**
 * Accordion Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import Collapse from '../Collapse';
import H5 from '../H5';

class Accordion extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: Card,
    delay: 350,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.oneOfType([
      PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
      PropTypes.number,
    ]),
    heading: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]),
    name: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }

  static contextTypes = {
    accordionGroup: PropTypes.object,
  }

  render() {
    // extract keys for div
    const {
      className,
      name,
      children,
      heading,
      tag: Tag,
      delay,
      ...attributes
    } = this.props;

    const {
      activeAccordionName,
      onClick,
      'heading-component': HeadingComponent,
    } = this.context.accordionGroup;

    const optional = {
      isOpened: false,
    };
    if (typeof onClick === 'function') {
      optional.onClick = () => onClick(name);
    }
    if (activeAccordionName === name) {
      optional.isOpened = true;
    }
    const accordionHeading = HeadingComponent ? (
      <HeadingComponent onClick={optional.onClick}>{heading}</HeadingComponent> // eslint-disable-line jsx-a11y/no-static-element-interactions
    ) : (
      <CardHeader onClick={optional.onClick}><H5>{heading}</H5></CardHeader> // eslint-disable-line jsx-a11y/no-static-element-interactions
    );
    return (
      <Tag className={className} {...attributes}>
        {accordionHeading}
        <Collapse delay={delay} isOpen={optional.isOpened}>
          {children}
        </Collapse>
      </Tag>
    );
  }
}

export default Accordion;
