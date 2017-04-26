'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('../Cards/CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _Collapse = require('../Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _H = require('../H5');

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Accordion Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultProps = {
  tag: _Card2.default
};

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      // extract keys for div
      var _props = this.props,
          className = _props.className,
          name = _props.name,
          children = _props.children,
          heading = _props.heading,
          Tag = _props.tag,
          attributes = _objectWithoutProperties(_props, ['className', 'name', 'children', 'heading', 'tag']);

      var _context$accordionGro = this.context.accordionGroup,
          activeAccordionName = _context$accordionGro.activeAccordionName,
          onClick = _context$accordionGro.onClick,
          HeadingComponent = _context$accordionGro['heading-component'];


      var optional = {
        isOpened: false
      };
      if (typeof onClick === 'function') {
        optional.onClick = function () {
          return onClick(name);
        };
      }
      if (activeAccordionName === name) {
        optional.isOpened = true;
      }
      var accordionHeading = HeadingComponent ? _jsx(HeadingComponent, {
        onClick: optional.onClick
      }, void 0, heading) // eslint-disable-line jsx-a11y/no-static-element-interactions
      : _jsx(_CardHeader2.default, {
        onClick: optional.onClick
      }, void 0, _jsx(_H2.default, {}, void 0, heading)) // eslint-disable-line jsx-a11y/no-static-element-interactions
      ;
      return _react2.default.createElement(
        Tag,
        _extends({ className: className }, attributes),
        accordionHeading,
        _jsx(_Collapse2.default, {
          isOpen: optional.isOpened
        }, void 0, children)
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

Accordion.contextTypes = {
  accordionGroup: _propTypes2.default.object
};


Accordion.defaultProps = defaultProps;

exports.default = Accordion;