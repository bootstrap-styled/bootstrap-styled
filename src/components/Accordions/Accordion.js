/**
 * Accordion Component
 *
 *
 */
import React, { PropTypes } from 'react';
import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import Collapse from '../Collapse';
import H5 from '../H5';

const defaultProps = {
  tag: Card,
};

class Accordion extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    heading: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }

  static contextTypes = {
    accordionGroup: PropTypes.object,
  }

  render() {
    // extract keys for div
    const { className, name, children, heading, tag: Tag, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { activeAccordionName, onClick, 'heading-component': HeadingComponent } = this.context.accordionGroup;
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
      <Tag className={className} {...rest}>
        {accordionHeading}
        <Collapse isOpen={optional.isOpened}>
          {children}
        </Collapse>
      </Tag>
    );
  }
}

Accordion.defaultProps = defaultProps;

export default Accordion;
