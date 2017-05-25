/**
 * Accordion Group Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

export default class AccordionGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    activeAccordionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    'heading-component': PropTypes.bool,
  }

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
