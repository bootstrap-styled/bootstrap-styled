var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Accordion Group Component
 *
 *
 */
import React, { PropTypes } from 'react';

var AccordionGroup = function (_React$Component) {
  _inherits(AccordionGroup, _React$Component);

  function AccordionGroup() {
    _classCallCheck(this, AccordionGroup);

    return _possibleConstructorReturn(this, (AccordionGroup.__proto__ || Object.getPrototypeOf(AccordionGroup)).apply(this, arguments));
  }

  _createClass(AccordionGroup, [{
    key: 'getChildContext',
    // eslint-disable-line react/prefer-stateless-function

    value: function getChildContext() {
      var _props = this.props,
          activeAccordionName = _props.activeAccordionName,
          onChange = _props.onChange,
          headingComponent = _props['heading-component'];

      return {
        accordionGroup: {
          activeAccordionName: activeAccordionName,
          onClick: onChange,
          'heading-component': headingComponent
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['children']);

      var activeAccordionName = rest.activeAccordionName,
          onClick = rest.onClick,
          headingComponent = rest['heading-component'],
          restAfterChildContext = _objectWithoutProperties(rest, ['activeAccordionName', 'onClick', 'heading-component']); // eslint-disable-line no-unused-vars

      return React.createElement(
        'div',
        restAfterChildContext,
        children
      );
    }
  }]);

  return AccordionGroup;
}(React.Component);

AccordionGroup.childContextTypes = {
  accordionGroup: React.PropTypes.object
};
export default AccordionGroup;