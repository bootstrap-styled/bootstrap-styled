/**
 * Accordion Group Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class AccordionGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    activeAccordionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    'heading-component': PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.bool,
    ]),
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
