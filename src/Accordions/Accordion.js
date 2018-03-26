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

export const defaultProps = {
  tag: Card,
  delay: 350,
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
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Delay transition in milliseconds before and after collapse. Can be: */
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  /** Heading used as title for accordion. Can be: */
  heading: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  /** `<AccordionGroup />` define active accordion with accordion name. */
  name: PropTypes.string,
};
class Accordion extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;

/** @component */
export default Accordion;
