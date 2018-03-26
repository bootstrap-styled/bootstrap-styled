'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Accordion Group Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var propTypes = exports.propTypes = {
  /**
   * Define current active accordion.
   */
  activeAccordionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  /**
   * Call specified function when `on click` event is triggered.
   */
  onChange: _propTypes2.default.func,
  /**
   * Toggles heading component visibility.
   */
  'heading-component': _propTypes2.default.bool
};

var AccordionGroup = function (_React$Component) {
  _inherits(AccordionGroup, _React$Component);

  function AccordionGroup() {
    _classCallCheck(this, AccordionGroup);

    return _possibleConstructorReturn(this, (AccordionGroup.__proto__ || Object.getPrototypeOf(AccordionGroup)).apply(this, arguments));
  }

  _createClass(AccordionGroup, [{
    key: 'getChildContext',
    // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */
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
    /* eslint-enable react/no-unused-prop-types */

  }, {
    key: 'render',
    value: function render() {
      var attributes = _objectWithoutProperties(this.props, []);

      var _omit = (0, _lodash2.default)(attributes, ['activeAccordionName', 'onClick', 'headingComponent']),
          restAfterChildContext = _objectWithoutProperties(_omit, []);

      return _react2.default.createElement('div', restAfterChildContext);
    }
  }]);

  return AccordionGroup;
}(_react2.default.Component);

AccordionGroup.propTypes = propTypes;
AccordionGroup.childContextTypes = {
  accordionGroup: _propTypes2.default.object
};


AccordionGroup.propTypes = propTypes;

/** @component */
exports.default = AccordionGroup;