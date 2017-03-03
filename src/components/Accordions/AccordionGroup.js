/**
 * Accordion Group Component
 *
 *
 */
import React, { PropTypes } from 'react';

export default class AccordionGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    activeAccordionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    'heading-component': PropTypes.bool,
  }

  static childContextTypes = {
    accordionGroup: React.PropTypes.object,
  };

  getChildContext() {
    const { activeAccordionName, onChange, 'heading-component': headingComponent } = this.props;
    return {
      accordionGroup: {
        activeAccordionName,
        onClick: onChange,
        'heading-component': headingComponent,
      },
    };
  }

  render() {
    const { children, ...rest } = this.props;
    const { activeAccordionName, onClick, 'heading-component': headingComponent, ...restAfterChildContext } = rest; // eslint-disable-line no-unused-vars

    return (
      <div
        {...restAfterChildContext}

      >
        {children}
      </div>
    );
  }
}
