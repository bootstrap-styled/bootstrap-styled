/**
 * Accordion Group Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

export const propTypes = {
  /**
   * Define current active accordion.
   */
  activeAccordionName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * Call specified function when `on click` event is triggered.
   */
  onChange: PropTypes.func,
  /**
   * Toggles heading component visibility.
   */
  'heading-component': PropTypes.bool,
};

class AccordionGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = propTypes;

  static childContextTypes = {
    accordionGroup: PropTypes.object,
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
    const { ...attributes } = this.props;
    const {
      ...restAfterChildContext
    } = omit(attributes, ['activeAccordionName', 'onClick', 'headingComponent']);

    return (
      <div {...restAfterChildContext} />
    );
  }
}

AccordionGroup.propTypes = propTypes;

/** @component */
export default AccordionGroup;
