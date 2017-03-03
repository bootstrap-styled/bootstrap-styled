/**
 * Accordion Component
 *
 *
 */
import React, { PropTypes } from 'react';
import Card from '../Cards';
import Collapse from '../Collapse';
import H5 from '../H5';

const defaultProps = {
  component: Card,
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
    component: PropTypes.component,
  }

  static contextTypes = {
    accordionGroup: PropTypes.object,
  }

  render() {
    // extract keys for div
    const { className, name, component: Component, children, heading, ...rest } = this.props; // eslint-disable-line no-unused-vars
    const { fixedHeight, springConfig, keepCollapsedContent, onRest, onHeightReady, ...restAfterCollapse } = rest; // eslint-disable-line no-unused-vars
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
      <div className="card-header" onClick={optional.onClick}><H5>{heading}</H5></div> // eslint-disable-line jsx-a11y/no-static-element-interactions
    );
    return (
      <Component
        className={className}
        {...restAfterCollapse}
      >
        {accordionHeading}
        <Collapse
          isOpened={optional.isOpened}
          fixedHeight={fixedHeight}
          springConfig={springConfig}
          keepCollapsedContent={keepCollapsedContent}
          onRest={onRest}
          onHeightReady={onHeightReady}
        >
          {children}
        </Collapse>
      </Component>
    );
  }
}

Accordion.defaultProps = defaultProps;

export default Accordion;
