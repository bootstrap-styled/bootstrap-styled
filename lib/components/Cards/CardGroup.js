var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CardGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { borderRightRadius, borderLeftRadius } from '../../styled/mixins/border-radius';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { ifThen } from '../../styled/mixins/conditional';
import { card } from '../../styled/utilities/card';

var defaultProps = {
  theme: bsTheme
};

var CardGroup = function (_React$Component) {
  _inherits(CardGroup, _React$Component);

  function CardGroup() {
    _classCallCheck(this, CardGroup);

    return _possibleConstructorReturn(this, (CardGroup.__proto__ || Object.getPrototypeOf(CardGroup)).apply(this, arguments));
  }

  _createClass(CardGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'theme']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'div',
        _extends({
          className: cn(className, 'card-group')
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return CardGroup;
}(React.Component);

// eslint-disable-next-line no-class-assign


CardGroup = styled(CardGroup)(_templateObject, function (props) {
  return '\n    ' + card(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    /*\n     Card groups\n    */\n      ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n          &.card-group {\n            display: flex;\n            flex-flow: row wrap;\n        \n            .card {\n              flex: 1 0 0;\n        \n              + .card {\n                margin-left: 0;\n                border-left: 0;\n              }\n        \n            ' + ifThen(props.theme['$enable-rounded'], '\n                &:first-child {\n                  ' + borderRightRadius(props.theme['$enable-rounded'], '0') + '\n                  .card-img-top {\n                    border-top-right-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-right-radius: 0;\n                  }\n                }\n              \n                &:last-child {\n                  ' + borderLeftRadius(props.theme['$enable-rounded'], '0') + '\n                  \n                  .card-img-top {\n                    border-top-left-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-left-radius: 0;\n                  }\n                }\n                \n                &:not(:first-child):not(:last-child) {\n                  border-radius: 0;\n        \n                  .card-img-top,\n                  .card-img-bottom {\n                    border-radius: 0;\n                  }\n                }\n              ') + '  \n          }\n        }\n      ') + '\n  ';
});

CardGroup.defaultProps = defaultProps;

export default CardGroup;